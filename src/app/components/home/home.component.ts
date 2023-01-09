import { Component } from '@angular/core';
import { CountriesDataService } from 'src/app/services/countries-data/countries-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  countriesData = this.CountriesDataService.getTestCountriesData();
  

  constructor(private CountriesDataService: CountriesDataService){
  }

  ngOnInit(){
    // this.CountriesDataService.getAllCountries().subscribe((data) => {
    //   this.countriesData = data
    //   console.log(this.countriesData)
    // })
      console.log(this.countriesData)
  }
}
