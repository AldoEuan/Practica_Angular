import { RestService } from './../rest.service';
import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit  {

  listcharacters:any = [];
  currentPage:number = 1;

  constructor(private RestService:RestService) { }
  

  ngOnInit(){
   this.getCharacters();
  }
  getCharacters(): void {
    this.RestService.getcharacters(this.currentPage)
      .subscribe((response: any) => {
        this.listcharacters = response.results;
      });
  }

  nextPage(): void {
    this.currentPage++;
    this.getCharacters();
  }

  previousPage(): void {
    this.currentPage--;
    this.getCharacters();
  }
}
