import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDateTime'
})
export class FormatDateTimePipe implements PipeTransform {

  transform(dateISO: string): string {
    const dateFormatted = new Date(dateISO);
    return dateFormatted.toString();
  }

}
