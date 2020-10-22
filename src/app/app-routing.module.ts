import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { TeamComponent } from './pages/team/team.component';
import { TeamcountryComponent } from './pages/teamcountry/teamcountry.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MissionscComponent } from './pages/missionsc/missionsc.component';
import { MissiontecComponent } from './pages/missiontec/missiontec.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'teamcountry/:id', component: TeamcountryComponent },
  { path: 'missionsc', component: MissionscComponent },
  { path: 'missiontec', component: MissiontecComponent },
  { path: 'about', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: '**', pathMatch: 'full', redirectTo: 'index' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
