
import { Component, OnInit  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import {FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Role } from '../../Models/Role_User';
import { User } from '../../Models/Role_User';
import { UserService } from '../../Services/user.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { RoleService } from '../../Services/role.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    NgFor,
    

  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  Roles: any = ['PATIENT', 'DOCTOR'];
  public myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService:UserService,
    private roleService:RoleService,
    private snackBar: MatSnackBar,
  ) 
  { }
  
  ngOnInit(): void {
    this.reactiveForm()
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''], 
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      fullname: ['', Validators.required],
      phone_number: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      speciality: ['', Validators.required]
      
    });
    
  }
  addUsuario_y_Rol(){
    const user:User={
      id: 0,
      enabled:true,
      username: this.myForm.get('username')?.value,
      password: this.myForm.get('password')?.value,   
      fullname: this.myForm.get('fullname')?.value,
      phone_number: this.myForm.get('phone_number')?.value,
      city: this.myForm.get('city')?.value,
      gender: this.myForm.get('gender')?.value,
      speciality: this.myForm.get('speciality')?.value,
    } 
   
    this.userService.saveUser(user).subscribe({
      next: (data) => {
      console.log("ingresando registro User...")
      this.snackBar.open('User ingresada correctamento', '', {
        duration: 3000
      })

    },
    error: (err) => {
      console.log(err)
    },
  })
  
  }
  addRol(){
    console.log('Formulario:', this.myForm.value); // Debug: Imprimir todo el formulario
  console.log('Rol:', this.myForm.get('role')?.value); // Debug: Imprimir el valor del rol
  console.log('Username:', this.myForm.get('username')?.value); // D
    const role:Role={
      id: 0,
      rol: this.myForm.get('role')?.value,
      username:this.myForm.get('username')?.value,
    }  
    this.roleService.saveRole(role).subscribe({
      next: (data) => {
      console.log("ingresando registro role...")
      this.snackBar.open('Role ingresada correctamento', '', {
        duration: 3000
      })
    },
    error: (err) => {
      console.log(err)
    },
    })
  }
  onSubmit() {
   
  }
}
