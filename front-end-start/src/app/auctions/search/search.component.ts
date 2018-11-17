import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auction } from '../model/auction';


@Component({
  selector: 'kupi-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  auctions: Auction[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Auction[]>('http://localhost:3000/api/auctions').subscribe(data => {
      this.auctions = data;
    }, error => {
      console.log('Error while getting ...');
    })
  }

}
