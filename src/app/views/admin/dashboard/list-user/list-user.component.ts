import {Component, OnInit, Inject, ChangeDetectorRef} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import{HttpClient}from'@angular/common/http';
import { DataService } from 'src/app/views/services/data.service';
import { Route, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Authorisation, User } from 'src/app/views/model/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit{
  dataArray!: User[] ;
  
  showPopup: boolean = false;
    constructor(private ds:DataService,private router: Router,public dialog: MatDialog,private fb:FormBuilder,private cdRef:ChangeDetectorRef) {
  }
 
  ngOnInit(): void {
    this.getUsers();
    console.log()
  }

  
  getUsers(): void {
    this.ds.getAllusers().subscribe(
      (response: any) => {
        this.dataArray = response;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  
  deleteUser(id: number): void {
    this.ds.deleteUser(id).subscribe(
      (response: any) => {
        console.log(response);
        this.getUsers();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  showOverlay=false;
  
  togglePopup(): void {
    this.showPopup = !this.showPopup;
    this.showOverlay = !this.showOverlay;
  }
// la fonction pour supprimer un rôle
removeRole(index: number) {
  this.selectedUser.roles.splice(index, 1);
}
editUser(user: User) {
  // Mettre à jour les rôles de l'utilisateur
  const updatedRoles = user.roles.map(role => ({ id: role.id, roleName: role.roleName }));
  roles: updatedRoles

  // Mettre à jour l'utilisateur sélectionné
  this.selectedUser = {
    id: user.id,
    username: user.username,
    userLastName: user.userLastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    titre: user.titre,
    roles: updatedRoles
  };
  
  // Afficher le popup pour modifier l'utilisateur
  this.showPopup = true;
}


  
  selectedUser: User = {
    id: 0,
    username: '',
    userLastName: '',
    email: '',
    phoneNumber: 0,
    titre: '',
    roles: [] as Authorisation[]
  };
  
  updateUser() {
    console.log(this.selectedUser) 
    
    
    this.ds.updateUser(this.selectedUser).subscribe(
     (response) => {
       console.log(response);
       // faire quelque chose avec la réponse du service
       this.router.navigate(['/users']);
       console.log('User updated:', this.selectedUser);
     },
     (error) => {
       console.log(error);
       // faire quelque chose avec l'erreur renvoyée par le service
     }
   );
 }
 
   
 


  



 
  
}

