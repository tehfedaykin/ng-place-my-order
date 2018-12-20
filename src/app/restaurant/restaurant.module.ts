import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';

import { RestaurantRoutingModule } from './restaurant-routing.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
