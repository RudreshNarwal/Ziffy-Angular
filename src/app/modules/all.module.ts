import { NgModule } from '@angular/core';

import { ExtensionModule } from './extension/extension.module'
import { LocalizationModule } from './localization/localization.module'
import { ReportsModule } from './reports/reports.module'
import { SalesModule } from './sales/sales.module';
import { HousesComponent } from './catalog/houses/houses.component';
import { OpenRequestsComponent } from './services/open-requests/open-requests.component';
import { ClosedRequestsComponent } from './services/closed-requests/closed-requests.component';
import { CustomersComponent } from './users/customers/customers.component';
import { OwnersComponent } from './users/owners/owners.component';
import { EmployeesComponent } from './users/employees/employees.component'

@NgModule({
  declarations: [
   
  HousesComponent,
   
  OpenRequestsComponent,
   
  ClosedRequestsComponent,
   
  CustomersComponent,
   
  OwnersComponent,
   
  EmployeesComponent],
  imports: [
    ExtensionModule,
    LocalizationModule,
    ReportsModule,
    SalesModule
  ]
})

export class AllModule { }
