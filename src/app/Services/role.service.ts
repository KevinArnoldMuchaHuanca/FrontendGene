import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role, User } from '../Models/Role_User';

const base_url = "http://localhost:8080/todo/registera";
const base_url2 = "http://localhost:8080/todo/buscar";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  // Método para obtener un número (por ejemplo, ID de usuario)
  getRole(username: string): Observable<number> {
    const endpoint = `${base_url2}/${username}`;
    return this.http.get<number>(endpoint);
  }

  /*
  // Método para obtener un objeto User
  getRole(username: string): Observable<User> {
    const endpoint = `${base_url2}/${username}`;
    return this.http.get<User>(endpoint);
  }
  */

  /*
  // Método para obtener una lista de roles
  getRole(): Observable<Role[]> {
    const endpoint = `${base_url2}`;
    return this.http.get<Role[]>(endpoint);
  }
  */

  // Método para guardar un rol
  saveRole(renta: Role): Observable<Role> {
    const endpoint = `${base_url}`;
    return this.http.post<Role>(endpoint, renta);
  }
  
}
