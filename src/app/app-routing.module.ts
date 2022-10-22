import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { OpenSatchelComponent } from './open-satchel/open-satchel.component';

const routes: Routes = [
  { path: '', component: ProfileCardComponent },
  { path: 'dashboard', component: OpenSatchelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
