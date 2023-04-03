import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// pipes and services
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';

// components
import { AppComponent } from './app.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { LangSwitcherComponent } from './lang-switcher/lang-switcher.component';

export function setupTranslateServiceFactory(
  service: TranslateService
): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [AppComponent, TranslatePipe, ParagraphComponent, LangSwitcherComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateServiceFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
