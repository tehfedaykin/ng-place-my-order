import { Component, OnInit } from '@angular/core';

import { Restaurant } from '../../restaurant';
import { RestaurantService } from '../../restaurant.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  restaurants : Restaurant[];

  public states;
  public statesLoading: boolean = true;
  public citiesLoading: boolean = true;
  public state;
  public cities;
  public city;

  public restaurantsLoading: boolean = true;
  public restaurant;

  constructor(
    private restaurantService: RestaurantService
  ) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe((restaurants) => {
      this.restaurants = restaurants;
      this.restaurantsLoading = false;
    });
  }

}
