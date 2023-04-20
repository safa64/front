import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/views/services/ProjectService';
import {AuthadminService} from "../../../services/authadmin.service";

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit{
  submitted = false;
  formLogin !:FormGroup
  constructor(private fb:FormBuilder,private asd:ProjectService,private router: Router) {}
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      projectName: ['', Validators.required],
      email: ['', Validators.required],
      descriptionP: ['', Validators.required],
      objectiveP: ['', Validators.required],
      durationP: ['', Validators.required],
      deadlineP: ['', Validators.required],});

  }

  onclickForm() {
    this.submitted = true;

    if (this.formLogin.invalid) {
      return;
    }

    const formData = this.formLogin.value;

    this.asd.createProject(formData).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/project']);

      },
      (error) => {
        console.log(error);
      }
    );
  }
}


