import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    value.sort(this.compare);
    return value;
  }

  compare(data1:any,data2:any)
  {
    if(data1.apellido > data2.apellido )
    {
      return 1;
    }
    else if(data1.apellido < data2.apellido) 
    {
      return -1;
    }
    else
    {
      return 0;
    }
  }


}
