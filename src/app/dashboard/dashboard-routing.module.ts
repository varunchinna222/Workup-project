import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from '../application/application.component';
import { SearchJobsComponent } from '../search-jobs/search-jobs.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"app", component:ApplicationComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"search", component:SearchJobsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
