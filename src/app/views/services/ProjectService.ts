import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ProjectService{
  helper=new JwtHelperService()
  constructor(private http:HttpClient) {
  }
  createProject(formData:any){
    return this.http.post('http://localhost:8080/api/v1/auth/createProject',formData)
  }

}
