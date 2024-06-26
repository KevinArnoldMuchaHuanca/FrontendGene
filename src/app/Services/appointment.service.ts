import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../Models/Appointment';
//const base_url = "http://localhost:3000/medicalInformation";
const base_url = "http://localhost:8080/createappointment";
const base_url2 = "http://localhost:8080/listarappointment";
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getAppointment() {
    const endpoint = `${base_url2}`;
    return this.http.get<Appointment[]>(endpoint)
  }
  saveAppointment(renta: Appointment) {
    const endpoint = `${base_url}`;
    return this.http.post<Appointment>(endpoint, renta)
  }
  
}