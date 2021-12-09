import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartitemService {
  public cartItemList:any=[];
  public wishItemList:any=[];
  public foodList=new BehaviorSubject<any>([]);
  public wishList=new BehaviorSubject<any>([]);
  constructor() { }
  getFooditems(){
    return this.foodList.asObservable()
  }
  addToCart(food:any){
    
    /*let cartItem=this.cartItemList.find((a:any)=>a.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity +1);
    }*/
    console.log(this.foodList.value)
    var index = this.cartItemList.findIndex((item:any )=> item.id === food.id);

    if (index > -1) {
      alert("Item already in cart")
      
    } else {
      this.cartItemList.push(food);
      this.foodList.next(this.cartItemList);
    }
    console.log(this.cartItemList); 
   /* this.cartItemList.forEach((element:any) => {
      alert("success")
      if(element.id != food.id){
        alert("success")
        this.cartItemList.push(food);
        this.foodList.next(this.cartItemList);
      }
      else{
        alert("error")
      }
    });*/
    console.log(food);
    /*this.cartItemList.push(food);
    this.foodList.next(this.cartItemList);*/
    this.getTotal();
    console.log(this.cartItemList)
  }
 /* singleTotal(quan:any){
    let total=0;
    this.cartItemList.map((a:any)=>{
      total=a.price * quan * a.quantity;
    })
    console.log(total);
    return total;
    
  }*/
addtoWish(food:any){
  console.log(this.foodList.value)
  var index = this.wishItemList.findIndex((item:any )=> item.id === food.id);

  if (index > -1) {
    alert("Item already in wishlist")
    
  } else {
    this.wishItemList.push(food);
    this.wishList.next(this.wishItemList);
  }
  console.log(this.wishItemList); 

}

  getTotal(){
    
    let grandTotal=0;
    let tot=0;
    this.cartItemList.map((a:any)=>{
      tot=a.price * a.quantity
      grandTotal+=tot;
    })
    return grandTotal;
  }
  
  changeQuantity(id:any,quantity:number){
      let cartItem=this.cartItemList.find((a:any)=>a.id===id);
      if(!cartItem) return;
      cartItem.quan=quantity;
      

  }
  removeCart(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }
}
