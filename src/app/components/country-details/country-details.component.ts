import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesDataService } from 'src/app/services/countries-data/countries-data.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent {
  id?: any;
  countryDetails?: any  = {}
  d?:any;

  constructor(private activatedRoute: ActivatedRoute, private countriesData: CountriesDataService){}

  ngOnInit(): void{
    this.id = this.activatedRoute.snapshot.paramMap.get("name")
    this.countriesData.getCountryDetails(this.id).subscribe((data) => {
      this.d = data
      this.d.forEach((country: any) => {
        this.countryDetails = country
      })
    })
  }
}
