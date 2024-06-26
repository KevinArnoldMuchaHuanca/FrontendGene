import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Diagnostic } from '../Models/Diagnostic';
//const base_url = "http://localhost:3000/creatediagnostic";
const base_url = "http://localhost:8080/creatediagnostic";
@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {

  constructor(private http: HttpClient) { }

  getDiagnostic() {
    const endpoint = `${base_url}`;
    return this.http.get<Diagnostic[]>(endpoint)
  }
  saveDiagnostic(renta: Diagnostic) {
    const endpoint = `${base_url}`;
    return this.http.post<Diagnostic>(endpoint, renta)
  }
  
}