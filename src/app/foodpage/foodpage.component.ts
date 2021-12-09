import { CartitemService } from './../cartitem.service';
import { Food } from './../foodmodel';
import { FoodService } from './../food.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
foodid:any;
public food:any;
  constructor(private api:FoodService,
             private activatedroute:ActivatedRoute,
             private api2:CartitemService ) {
               activatedroute.params.subscribe((res)=>{
                 if(res.id)
                 this.foodid=api.getById(res.id)
               })
              }

  ngOnInit(): void {
    this.food= this.api.getAll();
    this.food.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
    });
  }

  addToCart(id:any){
    console.log(id);
    
     this.api2.addToCart(id);
     
  }
}
