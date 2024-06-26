import { Role, User } from './../../../Models/Role_User';
import { MedicalInformation } from './../../../Models/MedicalInformation';

import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
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
import { MedicalService } from '../../../Services/medicalInformation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RoleService } from '../../../Services/role.service';
import { MatTableDataSource } from '@angular/material/table'; 
@Component({
  selector: 'app-crear-medical-information',
  standalone: true,
  imports: [    FormsModule,
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
    MatButtonModule,
    MatSnackBarModule,
  
  ],
  templateUrl: './crear-medical-information.component.html',
  styleUrl: './crear-medical-information.component.css'
})
export class CrearMedicalInformationComponent  implements OnInit{
  
  bloodlist=['A','B','AB','O']
  public myForm!: FormGroup
  numeroUsuario!: number;
  constructor(
    private fb: FormBuilder,
    private medicalService:MedicalService,
    private snackBar: MatSnackBar,
    private rolService: RoleService,

  ){}
  
 
  ngOnInit(): void {  
    this.reactiveForm();
  }

  reactiveForm(){
    this.myForm = this.fb.group({
      paciente: ['', Validators.required],
      registro: ['', Validators.required],
      Descripcion: ['', Validators.required],
      tipo: ['', Validators.required],
      previous_surgeries: ['', Validators.required],
      alergias: ['', Validators.required],
      vaccinations: ['', Validators.required]
    });
  }
  addMedicalInformation(){  
    const medicalInformation:MedicalInformation={
      id:0,  
      patient:this.myForm.get('paciente')!.value,//
      registration_date:this.myForm.get('registro')!.value,
      description:this.myForm.get('Descripcion')!.value,
      allergies: this.myForm.get('alergias')!.value,
      previous_surgeries:this.myForm.get('previous_surgeries')!.value,
      vaccinations: this.myForm.get('vaccinations')!.value,
      blood_type: this.myForm.get('tipo')!.value,
      }
      this.medicalService.saveMedical(medicalInformation).subscribe({
        next: (data) => {
          console.log("ingresando registro...")
          console.log('Medical Information:', medicalInformation);
          this.snackBar.open('Historial medico ingresado correctamente', '', {
            duration: 3000
          }) 
        },
        error: (err) => {
          console.log('Formulario no es válido');
          console.log('Medical Information:', medicalInformation);
          console.log(err)
        },
      })
      
  }
  dateFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Example filter logic: only allow weekdays
    return day !== 0 && day !== 6;
  };
  getNumeroUsuario() {
   
  }
  SaveCustomer(){
    
    console.log(this.myForm.value);
   }
   
 
   clearform(){
     this.myForm.reset();
   }
}
