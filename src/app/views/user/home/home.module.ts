import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { TasksComponent } from './tasks/tasks.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ProjectsComponent } from './projects/projects.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    HomeComponent,
    ProfilComponent,
    TasksComponent,
    CalendrierComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DragDropModule,

  ]
})
export class HomeModule { }
