import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auction } from '../model/auction';
import { Category } from '../model/category';



@Component({
  selector: 'kupi-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  auctions: Auction[] = [];
  categories: Category[] = [];

  selectedCategory: Category;
  selectedSubcategory: string;
  searchName: string;
  currentPage=1;
  showLoadMoreBtn = true;
 
 
  loadMoreItemsButton(){
    this.getFilteredAuctions(++this.currentPage);
  }


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFilteredAuctions(1);
    this.getCategories();
  }

  selectSubcategory(event) {
    this.selectedSubcategory = event.target.value;

    this.getFilteredAuctions(1);
  }

  onSearchChange(searchValue : string) {  
    this.searchName = searchValue;
    this.getFilteredAuctions(1)
  }

  getFilteredAuctions(page: number) {
    this.currentPage = page;

    let filter = {};

    if (!this.isNullUndefOrEmpty(this.selectedSubcategory)) {
      filter['category'] = this.selectedSubcategory;
    }

    if (!this.isNullUndefOrEmpty(this.searchName)) {
      filter['name'] = this.searchName;
    }


    this.http.get<Auction[]>('http://localhost:3000/api/auctions?pageSize=5&page=' + page + '&filter=' + JSON.stringify(filter)).subscribe(data => {
      this.showLoadMoreBtn = (data.length < 5) ? false : true;
      
      if (page === 1 ) {
        this.auctions = data;
      } else {
        data.forEach(item => {
          this.auctions.push(item);
        })     
      }   
    }, error => {
      console.log('Error while getting auctions.');
    })
  }

  getCategories() {
    this.http.get<Category[]>('http://localhost:3000/api/categories').subscribe(data => {
      this.categories = data;
    }, error => {
      console.log('Error while getting categories.');
    })
  }


  isNullUndefOrEmpty(value) {
    return value === undefined || value === null || value.toString().trim() === "";
  }

  


  
}


