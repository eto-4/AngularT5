import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descompte',
})
export class DescomptePipe implements PipeTransform {

  transform(value: number, descompte: number): string {
    const preuRebaixat = value - (value * descompte / 100);
    return `Preu Original ${value}€ - Preu Rebaixat ${descompte}% : ${preuRebaixat}€`;
  }
  
}
