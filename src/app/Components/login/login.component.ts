import {  Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Login } from '../../Models/login';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public myForm!: FormGroup

  loading= false;

  selected=''; 
  foods: any;
  //conexion con html mediante formControlName
  constructor(
    private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private router:Router,
    private loginService:LoginService,
    private snackBar: MatSnackBar,
    ) { 
    this.myForm= this.fb.group({
      usuario:['', Validators.required],
      contraseña:['', Validators.required],
    })
  }
  ngOnInit(): void {
  }
  addLogin(){
    const login2:Login={
      username: this.myForm.get('usuario')?.value,
      password: this.myForm.get('contraseña')?.value,   
    } 
   
    this.loginService.saveLogin(login2).subscribe({
      next: (data) => {
      console.log("ingresando registro User...")
      this.snackBar.open('Se logueo  correctamento', '', {
        duration: 3000
      })
      this.router.navigate(['/landing'])
    },
    error: (err) => {
      console.log(err)
    },
  })
  }
  ingresar() {
    const usuario = this.myForm.value.usuario;
    const password = this.myForm.value.contraseña;

    //Ver datos que se ingresan 
    console.log("Opción seleccionada:", this.selected);
    console.log("Usuario:", usuario);
    console.log("Contraseña:", password);
  
  
  }

}
 