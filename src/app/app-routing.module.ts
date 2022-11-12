import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', component: ProfileCardComponent },
  { path: 'dashboard', component: ProfileCardComponent },
  { path: 'about', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
