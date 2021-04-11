import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform{
  transform(value:any[], text:string='', column:string=''):any[]{
    if(text===''){
      return value;
    }else if(!value){
      return value;
    }else if(text==''){
      
    }

    text=text.toLocaleLowerCase();
    return value.filter(
      item=>item[column].toLowerCase().includes(text)
    );
  }
}
