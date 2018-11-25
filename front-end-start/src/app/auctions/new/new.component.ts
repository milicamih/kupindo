import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Auction } from '../model/auction';
import { RequestParams, Filter } from '../model/requestParams';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-kupi-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers: [NgbCarouselConfig]
})
export class NewComponent implements OnInit {

  oldestAuctions: Auction[] = [];
  newestAuctions: Auction[] = [];

  constructor(private dataService: DataService, config: NgbCarouselConfig) {
    config.interval = 7000;
    config.wrap = true;
    config.showNavigationArrows = false;
  }

  ngOnInit() {
    this.getOldestAuctions();
    this.getNewestAuctions();
  }


  getOldestAuctions() {
    const requestParams = new RequestParams();
    requestParams.pageSize = 5;
    requestParams.sort = 'dateEnd';
    requestParams.sortDirection = 'asc';

    this.dataService.getAuctions(requestParams).subscribe(data => {
      this.oldestAuctions = data;
    }, error => {
      console.log('Error while getting oldest auctions.');
    });
  }

  getNewestAuctions() {
    const requestParams = new RequestParams();
    requestParams.pageSize = 5;
    requestParams.sort = 'dateEnd';
    requestParams.sortDirection = 'desc';

    this.dataService.getAuctions(requestParams).subscribe(data => {
      this.newestAuctions = data;
    }, error => {
      console.log('Error while getting newest auctions.');
    });
  }

}
