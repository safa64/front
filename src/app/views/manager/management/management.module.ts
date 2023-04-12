import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { TasksComponent } from './tasks/tasks.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ProjectsComponent } from './projects/projects.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfilComponent,
    TasksComponent,
    CalendrierComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    DragDropModule,

  ]
})
export class ManagementModule { }
