import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string, ...args: any): any {
    const initials = value.split( ' ');
    return initials[0][0] + initials[1][0];
  }

}
