import { NgModule } from '@angular/core';

import { HotPropertiesComponent } from './hot-properties/hot-properties.component';
import { PropertyOverviewComponent } from './property-overview/property-overview.component';
import { ReportsRoutingModule } from './reports-routing.module'


@NgModule({
  declarations: [
    HotPropertiesComponent,
    PropertyOverviewComponent
  ],
  imports: [
    ReportsRoutingModule
  ]
})

export class ReportsModule {}