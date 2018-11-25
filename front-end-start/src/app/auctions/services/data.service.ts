import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auction } from '../model/auction';
import { Category } from '../model/category';
import { RequestParams } from '../model/requestParams';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private serverAddress = 'http://localhost:3000/';

  constructor(private http: HttpClient) {
  }


  getAuctions(requestParams?: RequestParams): Observable<Auction[]> {
    let queryString = '?';

    if (!this.isNullUndefined(requestParams)) {
      // loop trough all params and add them to request URL
      Object.keys(requestParams).forEach(item => {
        // add only params with correct value
        if (!this.isNullUndefOrEmpty(requestParams[item])) {
          // only 'filter' params requires different treatment
          if (item === 'filter') {
            queryString += item + '=' + JSON.stringify(requestParams[item]) + '&';
          } else {
            queryString += item + '=' + requestParams[item] + '&';
          }
        }
      });
    }


    return this.http.get<Auction[]>(this.serverAddress + 'api/auctions' + queryString);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.serverAddress + 'api/categories');
  }


  isNullUndefOrEmpty(value) {
    return value === undefined || value === null || value.toString().trim() === '';
  }

  isNullUndefined(value) {
    return value === undefined || value === null;
  }

}
