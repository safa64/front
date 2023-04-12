import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{
  submitted = false;

  formLogin !:FormGroup
  // formlogin essem samitou tasmya
  
    constructor(private fb:FormBuilder,private asd:DataService,private router: Router) { }
  
    ngOnInit(): void {
      this.formLogin = this.fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        password: ['', Validators.required],
        userLastName: ['', Validators.required],
        roleName: ['', Validators.required],
        titre: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, { validator: this.ConfirmedValidator('password', 'confirmPassword') });
    }
    
 
    ConfirmedValidator(controlPassword: string, matchingControlPassword: string){
      return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlPassword];
        const matchingControl = formGroup.controls[matchingControlPassword];
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
        } else {
          matchingControl.setErrors(null);
        }
      }
    }
    
    onclickForm() {
      this.submitted = true;
    
      if (this.formLogin.invalid) {
        return;
      }
    
      const formData = this.formLogin.value;
    
      this.asd.adduser(formData).subscribe(
        (response) => {
          console.log(response);
          // faire quelque chose avec la réponse du service
          this.router.navigate(['/users']);

        },
        (error) => {
          console.log(error);
          // faire quelque chose avec l'erreur renvoyée par le service
        }
      );
    }
    
    }

