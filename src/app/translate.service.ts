import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

// import { Translations } from '../enums/enums';

@Injectable({ 
  providedIn: 'root'
})
export class TranslateService {
  data: any = {};
  constructor(private http: HttpClient) {}
  use(lang: string): Observable<any> {
    const langPath = `assets/i18n/${lang || 'en'}.json`;
    return this.http.get(langPath).pipe(
      map(response => {
        this.data = response || {};
        return this.data;
      }),
      catchError(() => {
        this.data = {};
        return this.data;
      })
    );
  }
  translate(key: string): string {
    return this.data[key] || key.toString();
  }
}