import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dia',
  standalone: true,
})
export class DiaPipe implements PipeTransform {
  transform(cod?: number): string {
    switch (cod) {
      case 1:
        return 'Lunes';
      case 2:
        return 'Martes';
      case 3:
        return 'Miércoles';
      case 4:
        return 'Jueves';
      case 5:
        return 'Viernes';
      case 6:
        return 'Sábado';
      case 7:
        return 'Domingo';
      default:
        return 'No disponible';
    }
  }
}
