import { NgModule } from '@angular/core';

import { MailComponent } from './mail/mail.component';
import { ExtensionRoutingModule } from './extension-routing.module'


@NgModule({
  declarations: [
    MailComponent,
    
  ],
  imports: [
    ExtensionRoutingModule,

  ]
})

export class ExtensionModule { }
