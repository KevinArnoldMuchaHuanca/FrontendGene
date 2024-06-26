import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { RoleService } from './Services/role.service';
import { UserService } from './Services/user.service';
import { CrearAppointmentComponent } from './Components/Appointment/crear-appointment/crear-appointment.component';
import { ListarAppointmentComponent } from './Components/Appointment/listar-appointment/listar-appointment.component';
import { CrearMedicalInformationComponent } from './Components/Medical_information/crear-medical-information/crear-medical-information.component';
import { ListarMedicalInformationComponent } from './Components/Medical_information/listar-medical-information/listar-medical-information.component';
import { LoginService } from './Services/login.service';
import { DiagnosticService } from './Services/diagnostic.service';
import { AppointmentService } from './Services/appointment.service';
import { MedicalService } from './Services/medicalInformation.service';
import { CrearDiagnosticComponent } from './Components/Diagnostic/crear-diagnostic/crear-diagnostic.component';
import { ListarDiagnosticComponent } from './Components/Diagnostic/listar-diagnostic/listar-diagnostic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    NavBarComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    CrearAppointmentComponent,
    ListarAppointmentComponent,
    CrearMedicalInformationComponent,
  ListarMedicalInformationComponent,
  CrearDiagnosticComponent,
  ListarDiagnosticComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[RoleService,UserService,
    LoginService,
    DiagnosticService,
    AppointmentService,
    MedicalService]
})
export class AppComponent {
  title = 'Genetech_Frontend';
}
