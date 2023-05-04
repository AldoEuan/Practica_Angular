import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { RestService } from './rest.service';
import { Component, OnInit } from '@angular/core';
import { query } from '@angular/animations';
import { character } from './model/character';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'Second-app';
  formsearch: FormGroup = new FormGroup({});
  filtercharacters: any[] = [];
  bodyb: string = '';
  status =false;
  constructor(private RestService: RestService, private http: HttpClient) {}
  ngOnInit() {
    this.formsearch = new FormGroup({
      control: new FormControl(''),
    });
  }
  buscador() :void{
    this.status =true; 
    const body = this.formsearch.value.control.toString();
    console.log(body);
    this.RestService.singleCharacter(body).subscribe((data:any) => {
      this.filtercharacters = data.results;
      this.bodyb = body;
    });
  }

}

/*  busca(query: string) {
   this.http
     .get('https://rickandmortyapi.com/api/character/?name=' + query)
     .subscribe((res: any) => {
       this.filtercharacters = res.results;
       console.log(this.filtercharacters);
     });
 } */