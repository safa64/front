import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/views/model/user';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
import { DataService } from 'src/app/views/services/data.service';
import { ProjectService } from 'src/app/views/services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataArray!: Project[];
  budgetscount: number = 0;
  projectCount: number = 0;
  userCount:number=0;
  constructor(private projectService: ProjectService,private serv:DataService, private auth: AuthadminService) {}

  ngOnInit(): void {
    this.projectService.projects().subscribe(
      (count: number) => {
        this.projectCount = count;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.serv.Users().subscribe(
      (count: number) => {
        this.userCount = count;
      },
      (error: any) => {
        console.log(error);
      }
    );
    this.projectService.budgets().subscribe(
      (budgets: number) => {
        this.budgetscount = budgets;
      },
      (error: any) => {
        console.log(error);
      }
    );
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
}
