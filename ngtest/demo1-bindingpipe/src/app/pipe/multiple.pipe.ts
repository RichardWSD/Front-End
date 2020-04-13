import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  //接收一个值和可选的agrs参数
  transform(value: any, args?: any): any {
    if (!args) {
      args = 1;
    }
    return value * args;
  }

}
