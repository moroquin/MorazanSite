import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { TeamComponent } from './pages/team/team.component';
import { TeamcountryComponent } from './pages/teamcountry/teamcountry.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'team', component: TeamComponent },
  {path:'teamcountry/:id', component: TeamcountryComponent},
  { path: '', pathMatch: 'full', redirectTo: 'index' },
  { path: '**', pathMatch: 'full', redirectTo: 'index' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}
