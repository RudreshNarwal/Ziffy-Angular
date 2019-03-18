import { NgModule } from '@angular/core';

import { AmenitiesComponent } from './amenities/amenities.component';
import { InformationComponent } from './information/information.component';
import { LocalizationRoutingModule } from './localization-routing.module'

@NgModule({
  declarations: [
    AmenitiesComponent,
    InformationComponent
  ],
  imports: [
    LocalizationRoutingModule,
  ]
})

export class LocalizationModule { }
