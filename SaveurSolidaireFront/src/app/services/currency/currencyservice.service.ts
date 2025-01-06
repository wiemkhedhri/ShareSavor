import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyserviceService {

  constructor(private http:HttpClient) { }
  private apiKey = '8ad7a88552-efc740c32e-spkv9x';
  private apiUrl = 'https://api.fastforex.io/fetch-all';

  getExchangeRates(baseCurrency: string = 'TND'): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&from=${baseCurrency}`);
  }

}
