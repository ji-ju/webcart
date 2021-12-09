import { Tag } from './tagmodel';
import { Food } from './foodmodel';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  public search=new BehaviorSubject<string>('');
  public sort=new BehaviorSubject<string>('');
  constructor(private http:HttpClient) { }

  getAllTags():Tag[]{
    return [
      {name:'All',value: 'Pizza Pepperoni',count: '6'},
      {name:'FastFood',value: 'Pizza Pepperoni',count: '4'},
      {name:'Pizza',value: 'Pizza Pepperoni',count: '2'},
      {name:'Lunch',value: 'Pizza Pepperoni',count: '3'},
      {name:'SlowFood',value: 'Pizza Pepperoni',count: '2'},
      {name:'Hamburger',value: 'Pizza Pepperoni',count: '1'},
      {name:'Fry',value: 'Pizza Pepperoni',count: '1'},
      {name:'Soup',value: 'Pizza Pepperoni',count: '1'}
      
    ]
  }

getById(id:number):any{
  return this.getAll().find(res=>res.id==id)
}  

getByCat(tag:string):any {
  
  return tag == "All" ?
  this.getAll() :
  this.getAll().filter((food:any)=>food.tags?.includes(tag));
  
}

addWish(value:any):any {
  let flag=0;
  this.getAll().map((a:any,index:any)=>{
    if(value == a.id){
      alert("getting inside")
      a.favorite=value;
      flag=1; 
    //console.log(a.favorite);
    console.log(flag);
    return flag;
     
    }
    else{
      return flag;
    }
    
  })
  console.log(flag);
    return flag;
}

getFood():any{
  return this.http.get<any>("http://localhost:3000/foods")
  .pipe(map((res:any)=>{
    return res;
  }))
}

  getAll(): Food[]{
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        quantity:1,
        total:0,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
        
        
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        quantity:1,
        total:0,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        quantity:1,
        total:0,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        quantity:1,
        total:0,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        quantity:1,
        total:0,
        cookTime: '40-50',
        favorite: true,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        quantity:1,
        total:0,
        cookTime: '40-50',
        favorite: true,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      }
     
    ];
  }
}
