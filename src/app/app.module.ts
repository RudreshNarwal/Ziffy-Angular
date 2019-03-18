import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule} from './shared/Material/material.module';
import { AllModule} from './modules/all.module';
import { HousesComponent } from './catalog/houses/houses.component'



@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
