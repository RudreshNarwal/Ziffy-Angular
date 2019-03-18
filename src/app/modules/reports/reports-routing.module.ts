import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotPropertiesComponent } from './hot-properties/hot-properties.component';
import { PropertyOverviewComponent } from './property-overview/property-overview.component';




const routes: Routes = [
  { path: 'reports',
        children: [
          { path: 'hot-properties', component: HotPropertiesComponent},
          { path: 'property-overview', component: PropertyOverviewComponent},
        ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ReportsRoutingModule { }
