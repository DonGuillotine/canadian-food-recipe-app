import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CanadianServiceService {

  url= 'https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'
  

  constructor(private http: HttpClient) { }

  getFood() {
    return this.http.get(this.url);
  }
  getFood_details(id) {
    let url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    return this.http.get(url);
  }
}
