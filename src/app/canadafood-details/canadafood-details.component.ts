import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CanadianServiceService } from './../canadian-service.service';

@Component({
  selector: 'app-canadafood-details',
  templateUrl: './canadafood-details.component.html',
  styleUrls: ['./canadafood-details.component.css']
})
export class CanadianFoodDetails implements OnInit {
  public foodDirectives;
    public id;


  constructor(private foodService: CanadianServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    
    this.foodService.getFood_details(this.id).subscribe( (json) =>{
      this.foodDirectives = json['meals'];
    });
  }

  }


