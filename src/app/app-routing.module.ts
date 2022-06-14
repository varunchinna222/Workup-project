import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { CompaniesComponent } from './companies/companies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchJobsComponent } from './search-jobs/search-jobs.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"search", component:SearchJobsComponent},
  {path:"app", component:ApplicationComponent},
  {path:"profile", component:ProfileComponent},
  {path:"company", component:CompaniesComponent},
  {path:"stats", component:StatisticsComponent},
  {path:"task", component:TasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
