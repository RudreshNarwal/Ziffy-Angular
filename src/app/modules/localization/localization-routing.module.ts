import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmenitiesComponent } from './amenities/amenities.component';
import { InformationComponent } from './information/information.component';

// Nested Routing
const routes: Routes = [
  { path: 'localization', 
      children: [
        { path: 'amenities', component: AmenitiesComponent},
        { path: 'information', component: InformationComponent},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class LocalizationRoutingModule { }
