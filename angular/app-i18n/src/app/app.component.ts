import { Component } from '@angular/core';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TITLE';
  savebtn = 'SAVE';
  welcome = 'WELCOME';

  constructor(private translateService: TranslateService) {
    console.log(translateService.data);
  }

  setLang(lang: string) {
    this.translateService.use(lang);
  }
}
