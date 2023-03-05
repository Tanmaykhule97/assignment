import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) {}

  trendingproduct(){
    return this.http.get<product[]>('https://cms.bettorlogic.com/api/BetBuilder/GetFixtures?sports=1');
  }
}
