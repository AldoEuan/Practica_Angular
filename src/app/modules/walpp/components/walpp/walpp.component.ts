import { RestService } from './../../../../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walpp',
  templateUrl: './walpp.component.html',
  styleUrls: ['./walpp.component.sass']
})
export class WalppComponent implements OnInit  {
  listcharacters:any = [];
  currentPage:number = 9;

  constructor(private RestService:RestService){}

  ngOnInit() {
    this.getcharacters();
  }

  getcharacters():void {
    this.RestService.getcharacters(this.currentPage)
    .subscribe((data:any)=>{
      this.listcharacters = data.results;
    })

  }
}
