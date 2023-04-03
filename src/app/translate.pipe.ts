import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

// import { Translations } from '../enums/enums';
@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(key: string): any {
    const keys = key.split('.');
    let value = this.translate.data;
    for (let i = 0; i < keys.length; i++) {
      value = value[keys[i]];
      if (!value) {
        console.error("Non translated string");
        break;
      }
    }
    return value || key.toString();
  }
}