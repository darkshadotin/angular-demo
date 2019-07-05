import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  data;


  constructor(private http: HttpClient) {
    http.get('http://localhost:4200/api/articles.json')
      .subscribe(result => {
        this.data = result;
      });
  }

 run() {
   console.log(' DataService');
 }
}
