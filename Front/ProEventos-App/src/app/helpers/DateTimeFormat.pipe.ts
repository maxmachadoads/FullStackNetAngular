import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../util/constants';

@Pipe({
  name: 'DateTimeFormat'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {

  override transform(
    value: string | number | Date,
    format?: string,
    timezone?: string,
    locale?: string
  ): string | null;
  override transform(
    value: null | undefined,
    format?: string,
    timezone?: string,
    locale?: string
  ): null;
  override transform(
    value: string | number | Date | null | undefined,
    format?: string,
    timezone?: string,
    locale?: string
  ): string | null {
    if (!value) {
      return null;
    }

    if (value instanceof Date) {
      return super.transform(value, Constants.DATE_TIME_FMT);
    }

    if (typeof value === 'string') {
      const [data, hora] = value.split(' ');

      const [dia, mes, ano] = data.split('/').map(Number);
      const [horas, minutos, segundos] = hora.split(':').map(Number);

      const date = new Date(
        ano,
        mes - 1,
        dia,
        horas,
        minutos,
        segundos
      );

      return super.transform(date, Constants.DATE_TIME_FMT);
    }

    return null;
  }
}
