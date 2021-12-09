import { FoodService } from './../food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchTerm:string='';
  sortTerm:string='';
  constructor(private api:FoodService) { }

  ngOnInit(): void {
  }

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    //console.log(this.searchTerm);
    this.api.search.next(this.searchTerm);
  }
  sort(value:any){
    
    console.log(value)
    this.api.sort.next(value);
  }
}
