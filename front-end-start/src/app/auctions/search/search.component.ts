import { Component, OnInit } from '@angular/core';
import { Auction } from '../model/auction';
import { Category } from '../model/category';
import { RequestParams, Filter } from '../model/requestParams';
import { DataService } from '../services/data.service';
import { utils } from 'protractor';

@Component({
  selector: 'app-kupi-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  auctions: Auction[] = [];
  categories: Category[] = [];

  requestParams: RequestParams;

  selectedCategory: Category;
  showLoadMoreBtn = true;


  constructor(private dataService: DataService) {

    this.requestParams = new RequestParams();
    this.requestParams.filter = new Filter();
    this.requestParams.pageSize = 5;
    this.requestParams.page = 1;
  }

  ngOnInit() {
    this.getFilteredAuctions();
    this.getCategories();
  }

  loadMoreItemsButton() {
    this.requestParams.page++;
    this.getFilteredAuctions();
  }

  selectSubcategory(event) {
    this.requestParams.filter.category = event.target.value;
    this.requestParams.page = 1;
    this.getFilteredAuctions();
  }

  onSearchChange(searchValue: string) {
    this.requestParams.filter.name = searchValue;
    this.requestParams.page = 1;
    this.getFilteredAuctions();
  }

  getFilteredAuctions() {
    this.dataService.getAuctions(this.requestParams).subscribe(data => {
      this.showLoadMoreBtn = (data.length < 5) ? false : true;
      // if this is first page refresh with new data (), in other case add new data to the current data array
      if (this.requestParams.page === 1) {
        this.auctions = data;
      } else {
        data.forEach(item => {
          this.auctions.push(item);
        });
      }
    }, error => {
      console.log('Error while getting auctions.');
    });
  }

  getCategories() {
    this.dataService.getCategories().subscribe(data => {
      this.categories = data;
    }, error => {
      console.log('Error while getting categories.');
    });
  }

}


