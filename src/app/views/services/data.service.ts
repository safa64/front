import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  helper=new JwtHelperService()


  constructor(private http:HttpClient) {
  }
 
  getAllusers(){
    return this.http.get('http://localhost:8080/api/v1/auth/getAllUsers')

  }
  adduser(formData:any){
    return this.http.post('http://localhost:8080/api/v1/auth/register',formData)
  }
 



// Fonction pour récupérer les informations utilisateur à partir du backend
getUserData(id: number): Observable<any> {
  return this.http.get<any>(`http://localhost:8080/api/v1/auth/getuserId?id=${id}`);
}


deleteUser(id: number) {
  const url = `http://localhost:8080/api/v1/auth/deleteUser?id=${id}`;
  return this.http.delete(url);
}
updateUser(updatedUser: User): Observable<User> {
  return this.http.put<User>('http://localhost:8080/api/v1/auth/updateUser', updatedUser);
}


}
