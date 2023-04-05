import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// import { Translations } from '../enums/enums';

@Injectable({ 
  providedIn: 'root'
})
export class TranslateService {
  data: any = {}; //create an empty object...
  constructor(private http: HttpClient) {}

  use(lang: string): Observable<any> {
    const validLangs = ['en', 'nl']; // Array of valid language codes
    const langCode = validLangs.includes(lang) ? lang : 'en'; // Validate the lang parameter or use 'en' as default
    const langPath = `assets/i18n/${langCode}.json`;

    const en = '642c269cebd26539d0a458b6';
    const nl = '642c26afebd26539d0a458c0';
    const validBins = [en, nl];
    const binCode = validBins.includes(lang) ? lang : en;

    const binPath = `https://api.jsonbin.io/v3/b/${binCode}?meta=false`;

    // Use Angular's HttpClient to make an HTTP GET request to the language file
    return this.http.get(binPath).pipe(
      map(response => {
        // If the request is successful, set the response data to the `data` property of the TranslateService instance
        this.data = response || {};
        // Return the json data for the current lang
        return this.data;
      }),
      catchError(() => {
        // Return an empty object if there's an error (with the http request)
        this.data = {};
        return this.data;
      })
    );
  }
  translate(key: string): string { //note: this method is used indirectly, removing it will not change the functionallity, but keeping it is safer...
    return this.data[key] || key.toString(); //returns the value from the json, or show the string (if there's no translation)
  }
}