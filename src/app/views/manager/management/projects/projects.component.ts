import { Component } from '@angular/core';
import { Project } from 'src/app/views/model/user';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
import { ProjectService } from 'src/app/views/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  dataArray!: Project[];

  constructor(private projectService: ProjectService, private auth: AuthadminService) {
   
   }
  ngOnInit(): void {
    const adminId = this.auth.getUser();
    this.projectService.getAllProjectsByManagerId(adminId).subscribe(
      (response: Project[]) => {
        this.dataArray = response;
        console.log(this.dataArray);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
