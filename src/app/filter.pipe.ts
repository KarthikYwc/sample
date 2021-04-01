import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  
   transform(value: any, searchValue): any {
    if (!searchValue) return value;
    return value.filter((v) => 
    v.model.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || 
    v.person.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
    v.group.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
    v.category.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ) 
 
   }
}