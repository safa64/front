import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { KanbanModule } from 'smart-webcomponents-angular/kanban';
import { TasksComponent } from './tasks/tasks.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { ProfilComponent } from './profil/profil.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { MbscModule } from '@mobiscroll/angular-lite/src/js/modules/mobiscroll.angular.free';
import { ProjectsComponent } from './projects/projects.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';




@NgModule({
  declarations: [DashboardComponent, TasksComponent, ProfilComponent, CalendrierComponent, ProjectsComponent, AddUserComponent, ListUserComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,KanbanModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,FormsModule
  ]
})
export class DashboardModule { 
  
}
