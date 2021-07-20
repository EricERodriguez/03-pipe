import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {

    value = value.toLocaleLowerCase();
    value = value.charAt(0).toUpperCase() + value.slice(1);
    let value2= value.split(" ");
    let value3 = value2[1];
    
    console.log(value3);

    let value4 = value.split(" ", 1) +" "+ (value3.charAt(0).toUpperCase()+ value3.slice(1));


    return (value4);
  }

}
