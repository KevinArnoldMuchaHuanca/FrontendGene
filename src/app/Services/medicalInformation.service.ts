import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicalInformation } from '../Models/MedicalInformation';
//const base_url = "http://localhost:3000/medicalInformation";
const base_url = "http://localhost:8080/medical/registra";
const base_url2 = "http://localhost:8080/medical/lismedi";
@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  constructor(private http: HttpClient) { }

  getMedical() {
    const endpoint = `${base_url2}`;
    return this.http.get<MedicalInformation[]>(endpoint)
  }
  saveMedical(renta: MedicalInformation) {
    const endpoint = `${base_url}`;
    return this.http.post<MedicalInformation>(endpoint, renta)
  }
  
}