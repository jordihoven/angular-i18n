import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';
// import { Translations } from '../enums/enums';

@Pipe({
  name: 'translate',
  pure: false //pipe is called for every change detection cycle no matter whether the value or parameter(s) changes...
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(key: string, delimiter: string = '.'): string {
    const keys = key.split(delimiter);
    let value = this.translate.data;
    for (let i = 0; i < keys.length; i++) {
      value = value[keys[i]];
      if (!value) {
        console.warn(`Translation not found for key: ${key}`);
        return key;
      }
    }
    return value || key;
  }
}