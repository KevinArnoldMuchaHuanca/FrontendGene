import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Diagnostic } from '../Models/Diagnostic';
import { Login } from '../Models/login';
//const base_url = "http://localhost:3000/diagnostic";
const base_url = "http://localhost:8080/authenticate";
const base_url2 = "http://localhost:8080/patient/prueba";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getLogin() {
    const endpoint = `${base_url2}`;
    return this.http.get<Login[]>(endpoint)
  }
  saveLogin(renta: Login) {
    const endpoint = `${base_url}`;
    return this.http.post<Login>(endpoint, renta)
  }
  
}