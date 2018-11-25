import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Auction } from '../model/auction';

@Component({
  selector: 'kupi-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers: [NgbCarouselConfig]
})
export class NewComponent implements OnInit {

  oldestAuctions: Auction[] = [];
  newestAuctions : Auction[] = [];

  constructor(private http: HttpClient, config: NgbCarouselConfig) { 
    config.interval = 7000;
    config.wrap = true;
    config.showNavigationArrows = false;
  }

  ngOnInit() {
    this.getOldestAuctions();
    this.getNewestAuctions();
  }
  
  
  getOldestAuctions() {
    this.http.get<Auction[]>('http://localhost:3000/api/auctions?sort=dateEnd&sortDirection=asc&pageSize=5').subscribe(data => {
      this.oldestAuctions = data;
    }, error => {
      console.log('Error while getting oldest auctions.');
    })
  }

  getNewestAuctions() {
    this.http.get<Auction[]>('http://localhost:3000/api/auctions?sort=dateEnd&sortDirection=desc&pageSize=5').subscribe(data => {
      this.newestAuctions = data;
    }, error => {
      console.log('Error while getting newest auctions.');
    })
  }

  a(){
    console.log(this.newestAuctions);
  }
	
  

}
