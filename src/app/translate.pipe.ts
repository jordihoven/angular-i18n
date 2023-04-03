import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

import { Translations } from './enums';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(private translate: TranslateService) {}

  transform(key: Translations): any {
    //return this.translate.data[key] || key;
    return this.translate.data[key] || key.toString();
  }
}
