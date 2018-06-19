import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date, args?: any): string {

    let d = (new Date().getTime() - new Date(value).getTime())/1000;

    return `${d} seconds ago`;
  }

}
