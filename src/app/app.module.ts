import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanadianFoodComponent } from './canadian-food/canadian-food.component';
import { CanadianFoodDetails } from './canadafood-details/canadafood-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CanadianFoodComponent,
    CanadianFoodDetails
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
