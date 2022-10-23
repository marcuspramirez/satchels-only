import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { OpenSatchelComponent } from './open-satchel/open-satchel.component';
import { SatchelDashboardComponent } from './satchel-dashboard/satchel-dashboard.component';
import { PicksCardComponent } from './picks-card/picks-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    OpenSatchelComponent,
    SatchelDashboardComponent,
    PicksCardComponent,
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
