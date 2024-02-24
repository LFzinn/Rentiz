import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PropertiesPageComponent } from './properties-page/properties-page.component';
import { PropertiesRoutingModule } from './properties-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    PropertiesPageComponent
  ]
})
export class PropertiesModule { }
