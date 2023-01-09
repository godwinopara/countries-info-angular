import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Injectable({
  providedIn: 'root'
})
export class CountriesDataService {

  testCountriesData = [
    {
      name: {common: "Malaysia"},
      population: 32365998,
      region: "Asia",
      capital: ["Kuala Lumpur"],
      flag: {svg: "https://flagcdn.com/my.svg"},
    },
    {
      name: {common: "French Guiana"},
      population: 254541,
      region: "Americas",
      capital: ["Cayenne"],
      flag: {svg: "https://flagcdn.com/gf.svg"}
    },
    {
      name: {common: "United States Of America"},
      population: 323947000,
      region: "Americas",
      capital: ["Washington Dc"],
      flag: {svg: "https://flagcdn.com/my.svg"}
    },
    {
      name: {common: "Germany"},
      population: 323947000,
      region: "Europe",
      capital: ["Berlin"],
      flag: {svg: "https://flagcdn.com/gf.svg"}
    }
  ]

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<[]>{
    return this.http.get<[]>("https://restcountries.com/v3.1/all")
  }

  getCountryDetails(name: string): Observable<{}>{
    return this.http.get<{}>(`https://restcountries.com/v3.1/name/${name}`)
  }

  getTestCountriesData() {
    return this.testCountriesData
  }
}
