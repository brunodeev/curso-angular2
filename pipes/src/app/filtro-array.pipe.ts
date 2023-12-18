import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray',
  pure: false,
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: string[], args?: any): string[] {

    if(value.length === 0 || args == undefined) {
      return value;
    }

    let filter = args.toLocaleLowerCase();
    return value.filter((v: string) => v.toLocaleLowerCase().indexOf(filter) != -1);
  }

}
