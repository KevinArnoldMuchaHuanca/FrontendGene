import { Component,OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Role, User } from '../../../Models/Role_User';
import { RoleService } from '../../../Services/role.service';
import { MedicalService } from '../../../Services/medicalInformation.service';
import { MedicalInformation } from '../../../Models/MedicalInformation';
@Component({
  selector: 'app-listar-medical-information',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, MatTableModule
  ],
  templateUrl: './listar-medical-information.component.html',
  styleUrl: './listar-medical-information.component.css'
})
export class ListarMedicalInformationComponent  implements OnInit{
  
  [x: string]: any;

  displayedColumns: string[] = ['id','blood_type','registration_date','description','allergies'];
  //dataSource = new MatTableDataSource<User>()
  dataSource = new MatTableDataSource<MedicalInformation>()
  numeroUsuario!: number;
  constructor(
    private rolService: RoleService,
    private medicalService:MedicalService,
  ) {}
  ngOnInit(): void {
    this.getNumeroUsuario();
    this.getMedical();
    
  }
  /*
  getRole(){
    this.rolService.getRole().subscribe((data: Role[]) => {
      this.dataSource = new MatTableDataSource(data)
    })
  }
    */
  getMedical() {
    this.medicalService.getMedical().subscribe((data: MedicalInformation[]) => {
      this.dataSource = new MatTableDataSource(data)
    })
  }
  getNumeroUsuario() {
    const username: string = "Tayson";
    this.rolService.getRole(username).subscribe((numero: number) => {
      console.log('Número del usuario:', numero);
      this.numeroUsuario = numero;
    });
  }

}
