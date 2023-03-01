import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigNumber'
})
export class BigNumberPipe implements PipeTransform {

  transform(value: number, formule: string): number {
      if (!['empty', 'Mld', 'Mln'].includes(formule)) {
          throw new Error("Invalid formule " + formule);
      }

      let formuleDevider = {
        empty: 1,
        Mln: 10000,
        Mld: 10000000,
      }

      // let formattedValue = value.replace(' ', '')
      return value / formuleDevider[formule];
  }

}
