import { CartitemService } from './../cartitem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public food:any=[];
  public quan:any;
  singleTotal:any;
  constructor(private api:CartitemService) { }

  ngOnInit(): void {
   
    
    //this.singleTotal= this.api.singleTotal(1)
    this.api.getFooditems()
    .subscribe(res=>{
      this.food=res;
    })
    this.addtotal();
  }
  changeQuantity(id:any,val:any){
    console.log(val);
    this.api.changeQuantity(id,val);
    

  }/*singletotal(val:any){
    
    this.singleTotal= this.api.singleTotal(val)
  }*/

  inc(i:any){
    if(i.quantity !== 5){
      i.quantity+=1;
    }
    this.addtotal();
    console.log(i.quantity);
  }
  dec(i:any){
    if(i.quantity !== 1){
      i.quantity-=1;
    }
    this.addtotal();
    console.log(i.quantity)
  }
  change(i:any,quan:any){
   
    i.quantity=quan;
    console.log(i.quantity);
    
  }
  remove(i:any){
    this.api.removeCart(i);
    this.addtotal();
  }
  addtotal(){
    this.singleTotal=this.api.getTotal();
  }

}
