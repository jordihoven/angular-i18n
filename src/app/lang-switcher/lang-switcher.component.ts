import { Component } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.css']
})
export class LangSwitcherComponent {

  useRestApi = false;

  constructor(private translateService: TranslateService) {
    console.log(translateService.data);
  }

  //setting the language...
  setLang(lang: string) {
    this.translateService.use(lang).subscribe(data => {
      console.log('Translation data:', data);
    });
  }

  //toggling between local and database json files...
  toggleApi() {
    this.useRestApi = !this.useRestApi;
    this.translateService.useRestApi = this.useRestApi;
  }
}
