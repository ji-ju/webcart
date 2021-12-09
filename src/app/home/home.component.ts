import { CartitemService } from './../cartitem.service';
import { FoodService } from './../food.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  food:any[]=[];
  foodapi:any=[];
  foodCart:any=[];
  tags:any[]=[];
  filterFood:any[]=[];
  searchTerm:any;
  searchKey:string='';
  sortKey:string='';
  sortKeyvalue:boolean=false;
  addedToWishlist=false;
  constructor(private api:FoodService,
              private api2:CartitemService) { }

  ngOnInit(): void {
    this.food= this.api.getAll();
    this.filterFood=this.api.getAll();
    console.log(this.food)

    this.api.search.subscribe(res=>{
      this.searchKey=res;
    })
    this.api.sort.subscribe(res=>{
      this.sortKey=res;
      console.log(this.sortKey);
      this.sortKeyvalue=!this.sortKeyvalue;
      //console.log(this.sortKeyvalue)
    })

    this.tags=this.api.getAllTags();
    this.filterFood.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price,onWishlist:false})
  });
  console.log(this.filterFood);
 /* addToFav(val:any){
    console.log(val);
    val.favorite=false;
  }*/
  
  }
  category(a:any){
    
    console.log(a)
    this.filterFood= this.api.getByCat(a);
    
  }

  filter(name:any){
    alert("filter works");
    this.filterFood=this.food
    .filter((a:any)=>{
      if(a.name === name || name==''){
        return a;
      }
    })
  }
  
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    //console.log(this.searchTerm);
    this.api.search.next(this.searchTerm);
  }

  addToFav(val:any){
    
    //this.addedToWishlist= val.favorite=true;
     this.api2.addtoWish(val);
     
    
    console.log(this.addedToWishlist);
  }
  toggle(val:any){
    val.onWishlist=!val.onWishlist;
  }
}
