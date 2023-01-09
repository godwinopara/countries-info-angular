import { Component, Input } from '@angular/core';
import { CountriesDataService } from 'src/app/services/countries-data/countries-data.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  countriesData = this.CountriesDataService.getTestCountriesData()
  @Input() country?: any;

  constructor(private CountriesDataService : CountriesDataService){
  }

  ngOnInit(){}
}
