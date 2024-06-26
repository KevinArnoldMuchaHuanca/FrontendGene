import { Appointment } from './../../../Models/Appointment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointmentService } from '../../../Services/appointment.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-crear-appointment',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule, 
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './crear-appointment.component.html',
  styleUrls: ['./crear-appointment.component.css'] // corrected here
})
export class CrearAppointmentComponent implements OnInit{
  
  public myForm!:FormGroup
  constructor(
    private builder:FormBuilder,
    private fb: FormBuilder,
    private appointmentService:AppointmentService,
    private snackBar: MatSnackBar,
  )

  {}
  ngOnInit(): void {
    this.reactiveForm()
  }
 
  reactiveForm() {
    this.myForm = this.fb.group({
      doctor: ['', [Validators.required]],
      razon: ['', [Validators.required]],
      paciente: ['', [Validators.required]],
      hora: ['', [Validators.required]]  ,
      fecha: ['', [Validators.required]]  
    });
  }

  /**
         id: number
     doctor: string
     reason: string
     date: string 
     time: string 
     patient:string
  }
   */
  addAppointment(){  
    const appointment:Appointment={
      id:0,  
      doctor:this.myForm.get('doctor')!.value,
      reason:this.myForm.get('razon')!.value,
      date:this.myForm.get('fecha')!.value,
      time:this.myForm.get('hora')!.value,
      patient:this.myForm.get('paciente')!.value,
      }
      this.appointmentService.saveAppointment(appointment).subscribe({
        next: (data) => {
          console.log("ingresando registro...")
          console.log('Medical Information:', appointment);
          this.snackBar.open('Historial medico ingresado correctamente', '', {
            duration: 3000
          }) 
        },
        error: (err) => {
          console.log('Formulario no es válido');
          console.log('Medical Information:', appointment);
          console.log(err)
        },
      })
      
  }


    SaveCustomer(){
   console.log(this.myForm.value);
  }


  clearform(){
    this.myForm.reset();
  }
  
}
