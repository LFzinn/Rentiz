import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'real',
  standalone: true
})
export class RealPipe implements PipeTransform {

  transform(value: number): string {
    if (value == null) {
      return '';
    }

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    return formatter.format(value);
  }

}
