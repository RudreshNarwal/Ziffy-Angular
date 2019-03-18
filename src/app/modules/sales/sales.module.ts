import { NgModule } from '@angular/core';

import { LeadOwnersComponent } from './lead-owners/lead-owners.component'
import { SalesRoutingModule } from './sales-routing.module';
import { LeadsComponent } from './leads/leads.component'


@NgModule({
  declarations: [
    LeadOwnersComponent,
    LeadsComponent
  ],
  imports: [
    SalesRoutingModule
  ]
})

export class SalesModule { }
