import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProfilComponent } from './profil/profil.component';
import { CalendrierComponent } from './calendrier/calendrier.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'tasks',component:TasksComponent},
  {path:'profil',component:ProfilComponent},
  {path:'Calender',component:CalendrierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
