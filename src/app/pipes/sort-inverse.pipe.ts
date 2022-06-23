import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortInverse'
})
export class SortInversePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    value.sort(this.compare);
    return value;
  }

  compare(data1:any,data2:any)
  {
    if(data1.email > data2.email )
    {
      return 1;
    }
    else if(data1.email < data2.email) 
    {
      return -1;
    }
    else
    {
      return 0;
    }
  }

}
