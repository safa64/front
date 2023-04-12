import {Component, OnInit, Inject, ChangeDetectorRef} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import{HttpClient}from'@angular/common/http';
import { DataService } from 'src/app/views/services/data.service';
import { Route, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Role, User } from 'src/app/views/model/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit{
  dataArray!: User[] ;
  selectedUser: User = {
    id: 0,
    username: '',
    password: '',
    userLastName: '',
    email: '',
    phoneNumber: '',
    titre: '',
    authorities: [],
    roles: []
  };
  
  showPopup: boolean = false;
    constructor(private ds:DataService,private router: Router,public dialog: MatDialog,private fb:FormBuilder,private cdRef:ChangeDetectorRef) {
  }
 
  ngOnInit(): void {
    this.getUsers();
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
  editUser(user: User) {
    this.selectedUser = {...user};
    console.log(this.selectedUser)
    this.showPopup = true;
  }
  
  
  updateUser() {

    this.ds.updateUser(this.selectedUser).subscribe(data => {
      this.showPopup = false;
      this.getUsers();
    });
  }
  
   
 


  



 
  
}

