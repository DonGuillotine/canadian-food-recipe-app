import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanadianFoodComponent } from './canadian-food/canadian-food.component';
import { CanadianFoodDetails } from './canadafood-details/canadafood-details.component';




const routes: Routes = [
  {path: "", component:CanadianFoodComponent},
  {path: "details/:id", component:CanadianFoodDetails},
  {path: "", component:CanadianFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
