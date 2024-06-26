
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { CrearAppointmentComponent } from './Components/Appointment/crear-appointment/crear-appointment.component';
import { ListarAppointmentComponent } from './Components/Appointment/listar-appointment/listar-appointment.component';
import { CrearMedicalInformationComponent } from './Components/Medical_information/crear-medical-information/crear-medical-information.component';
import { ListarMedicalInformationComponent } from './Components/Medical_information/listar-medical-information/listar-medical-information.component';
import { CrearDiagnosticComponent } from './Components/Diagnostic/crear-diagnostic/crear-diagnostic.component';
import { ListarDiagnosticComponent } from './Components/Diagnostic/listar-diagnostic/listar-diagnostic.component';


export const routes: Routes = [
  { path: '', redirectTo: '/listar', pathMatch: 'full' },
  {path: 'landing', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'registrar', component: CrearAppointmentComponent},
  {path: 'listar', component: ListarAppointmentComponent},
  //
  {path: 'crear/medical', component: CrearMedicalInformationComponent},
  {path: 'listar/medical', component: ListarMedicalInformationComponent},
  //
  {path: 'crear/diag', component: CrearDiagnosticComponent},
  {path: 'listar/diag', component: ListarDiagnosticComponent},
  
];
/*
 { path: '', redirectTo: '/crearauto', pathMatch: 'full' },
  {path: 'sanchez/nuevo', component: SanchezCrearComponent},
  {path: 'sanchez/lista', component: SanchezListarComponent}
*/

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
