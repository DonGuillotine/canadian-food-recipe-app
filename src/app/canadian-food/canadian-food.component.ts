import { Component, OnInit } from '@angular/core';
import { CanadianServiceService } from './../canadian-service.service';

@Component({
  selector: 'app-canadian-food',
  templateUrl: './canadian-food.component.html',
  styleUrls: ['./canadian-food.component.css']
})
export class CanadianFoodComponent implements OnInit {
  public canada
  url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`  //remind me to check backtick 

  constructor(private foodService: CanadianServiceService) { }

  ngOnInit() {
    this.foodService.getFood().subscribe( (json) =>{
      this.canada = json['meals'];
  });
  }

}
