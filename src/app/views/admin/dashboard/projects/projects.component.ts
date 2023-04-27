import { Component, ViewChild } from '@angular/core';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
import { ProjectService } from 'src/app/views/services/project.service';
import { Project } from 'src/app/views/model/user';

import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


  dataArray!: Project[];

  constructor(private projectService: ProjectService, private auth: AuthadminService) {
   
   }
  showPopup: boolean = false;
  errorMessage=''

  showOverlay=false;
  
  togglePopup(): void {
    this.showPopup = !this.showPopup;
    this.showOverlay = !this.showOverlay;
  }

  ngOnInit(): void {
    const adminId = this.auth.getUser();
    this.projectService.getAllProjectsByAdminId(adminId).subscribe(
      (response: Project[]) => {
        this.dataArray = response;
        console.log(this.dataArray);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  editUser(project:Project ) {
    this.selectedProject = {
      id: project.id,
      projectName: project.projectName,
      descriptionP: project.descriptionP,
      objectiveP: project.objectiveP,
      durationP: project.durationP,
      deadlineP: new Date(project.deadlineP),
      email:project.email,
      userId:project.userId,
      status:project.status,
      budget:project.budget
    };
    
    // Afficher le popup pour modifier l'utilisateur
    this.showPopup = true;
   
  }

  selectedProject:Project= {
    id:0,
    projectName:'',
    descriptionP:'',
    objectiveP:'',
    durationP:0,
    deadlineP: new Date(), // Spécifiez la date actuelle
    email:'',
    userId:0,
    status:'',
    budget:0
  }
  @ViewChild('picker')
  picker!: MatDatepicker<Date>;

  deleteProject(id: number): void {
    console.log(id)
    this.projectService.deleteProject(id).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
}

updateProject(): void {
  const user = this.auth.getUser();
this.selectedProject.userId=user
  console.log(this.selectedProject)

  this.projectService.updateProject(this.selectedProject).subscribe((updatedProject) => {
    console.log('Projet mis à jour', updatedProject);
    this.togglePopup();
  },
  (error: any) => {
    console.log(error);
  });
}
}