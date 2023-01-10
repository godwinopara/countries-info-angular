import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Injectable({
  providedIn: 'root'
})
export class CountriesDataService {


  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<[]>{
    return this.http.get<[]>("https://restcountries.com/v3.1/all")
  }

  getCountryDetails(name: string): Observable<{}>{
    return this.http.get<{}>(`https://restcountries.com/v3.1/alpha?codes=${name}`)
  }

  
}
