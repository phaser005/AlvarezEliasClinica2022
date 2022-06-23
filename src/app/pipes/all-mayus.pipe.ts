import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allMayus'
})
export class AllMayusPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    const  resultPost:any = [];
    for(let i = 0; i<value.length;i++)
    {
      value[i].nombre = value[i].nombre.toUpperCase();
      value[i].apellido = value[i].apellido.toUpperCase();
      resultPost.push(value[i]);
    }
    return resultPost;
  }

}