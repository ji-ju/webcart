import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FilterPipe implements PipeTransform {
  
  transform(value: any[], filter:string,property:string): any[] {
    //console.log(value);
    console.log(filter);
    //console.log(value);
    const result:any[]=[];
    if(!value || filter==='' || property===''){
      return value;
    }

    value.forEach((a:any)=>{
      if(a[property].trim().toLowerCase().includes(filter.toLowerCase())){
        result.push(a);
      }
    });
    return result;
   /* if(value && filter)
    return value.filter(
      (d)=>d.project_name.indexOf(filter) > -1
       )
      
    return value;

    if(a[property].trim().toLowerCase().includes(filter.toLowerCase())) */
  }

}
