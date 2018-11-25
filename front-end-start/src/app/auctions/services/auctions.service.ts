import { Injectable } from '@angular/core';
import { Auction } from '../model/auction';
import { Category } from '../model/category';
import { HttpClient } from '@angular/common/http';
//import { RequiredParameters } from '../model/requiredParameters';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  constructor(private LsService: AuctionsService) {
  }

  getAuctions() {
    this.http.get<Auction[]>('http://localhost:3000/api/auctions').subscribe(data => {
      this.Auctions = data;
    }, error => {
      console.log('Error while getting newest auctions.');
    })
  }


}
