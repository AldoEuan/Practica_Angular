import { query } from '@angular/animations';
import { AppComponent } from './app.component';
import { character } from './model/character';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private  http: HttpClient) {

  }
  public getcharacters(page:number):Observable<character>{
    let url = this.apiUrl + '?page=' + page;
    return this.http.get<character>(url);
  }
  public singleCharacter(query:string):Observable<character>{
    return this.http.get<character>(this.apiUrl + '?name=' + query);
  }
  //jsjjsdjsjds
}