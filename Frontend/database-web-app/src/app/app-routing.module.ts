import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VolunteersComponent } from './components/volunteers/volunteers.component';
import { ConsumersComponent } from './components/consumers/consumers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'volunteers', component: VolunteersComponent},
  {path: 'consumers', component: ConsumersComponent},
  {path: 'dashboard', component: DashboardComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
