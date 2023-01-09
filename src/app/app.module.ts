import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { CountryComponent } from './components/country/country.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    FilterComponent,
    CountryComponent,
    CountryDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
