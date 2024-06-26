import { AppointmentService } from './../../../Services/appointment.service';
import { Component ,OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Appointment } from '../../../Models/Appointment';


@Component({
  selector: 'app-listar-appointment',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, MatTableModule
  ],
  templateUrl: './listar-appointment.component.html',
  styleUrl: './listar-appointment.component.css'
})
export class ListarAppointmentComponent  implements OnInit{
 
  [x: string]: any;

  displayedColumns: string[] = ['id','reason','date','time'];
  dataSource = new MatTableDataSource<Appointment>()
constructor(
  private appointmentService:AppointmentService
){}

ngOnInit(): void {
  this.getAppointment();

  
}
getAppointment() {
  this.appointmentService.getAppointment().subscribe((data: Appointment[]) => {
    this.dataSource = new MatTableDataSource(data)
  })
}
}
