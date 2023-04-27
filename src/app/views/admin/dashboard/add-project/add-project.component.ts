import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthadminService} from "../../../services/authadmin.service";
import { ProjectService } from 'src/app/views/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit{
  submitted = false;
  formLogin !:FormGroup
  constructor(private fb:FormBuilder, private auth: AuthadminService,private asd:ProjectService,private router: Router) {
  }
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      projectName: ['', Validators.required],
      email: ['', Validators.required],
      descriptionP: ['', Validators.required],
      objectiveP: ['', Validators.required],
      durationP: ['', Validators.required],
      deadlineP: ['', Validators.required],
      budget: ['', Validators.required]});

  }

  onclickForm() {
    this.submitted = true;

    if (this.formLogin.invalid) {
      return;
    }
   
    const user = this.auth.getUser();
    const formData = this.formLogin.value;
    if (!formData.userId) {
      formData.userId = user;
    }
    console.log( formData.userId)
    this.asd.createProject(formData).subscribe(
      (response) => {

        console.log(formData);
        console.log(response);

        this.router.navigate(['/Projects']);

      },
      (error) => {
        console.log(error);
      }
    );
  }
}

