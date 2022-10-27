import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { OpenSatchelComponent } from './open-satchel/open-satchel.component';
import { SatchelDashboardComponent } from './satchel-dashboard/satchel-dashboard.component';
import { PicksCardComponent } from './picks-card/picks-card.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    OpenSatchelComponent,
    SatchelDashboardComponent,
    PicksCardComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
