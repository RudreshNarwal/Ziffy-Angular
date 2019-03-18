import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadOwnersComponent } from './lead-owners/lead-owners.component';
import { LeadsComponent } from './leads/leads.component'



const routes: Routes = [
  { path: 'sales',
        children: [
          { path: 'leads', component: LeadsComponent},
          { path: 'lead-owners', component: LeadOwnersComponent},
          ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SalesRoutingModule { }
