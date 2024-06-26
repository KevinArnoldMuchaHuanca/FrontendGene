import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/Role_User';
//const base_url = "http://localhost:3000/users";
const base_url = "http://localhost:8080/user/register";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() {
    const endpoint = `${base_url}`;
    return this.http.get<User[]>(endpoint)
  }
  saveUser(renta: User) {
    const endpoint = `${base_url}`;
    return this.http.post<User>(endpoint, renta)
  }
  
}