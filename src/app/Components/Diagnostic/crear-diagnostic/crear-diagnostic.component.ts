import { Diagnostic } from './../../../Models/Diagnostic';
import { DiagnosticService } from './../../../Services/diagnostic.service';
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
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-crear-diagnostic',
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
  templateUrl: './crear-diagnostic.component.html',
  styleUrls: ['./crear-diagnostic.component.css']
})
export class CrearDiagnosticComponent implements OnInit {

  public myForm!: FormGroup;
  private datePipe: DatePipe = new DatePipe('en-US');
  constructor(
    private fb: FormBuilder,
    private diagnosticService: DiagnosticService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      descripcion: ['', [Validators.required]],
      fecha: ['', [Validators.required]]
    });
  }

  addDiagnostic() {
    const fechaSeleccionada: Date = this.myForm.get('fecha')!.value;
    const fechaFormateada: string = this.datePipe.transform(fechaSeleccionada, 'yyyy-MM-dd')!;
    const diagnostic: Diagnostic = {
      id: 0,
      description: this.myForm.get('descripcion')!.value,
      appointment: fechaFormateada,

      //appointment: "2024-06-26",
    };
    this.diagnosticService.saveDiagnostic(diagnostic).subscribe({
      next: (data) => {
        console.log("ingresando registro...");
        console.log('Medical Information:', diagnostic);
        this.snackBar.open('Historial médico ingresado correctamente', '', {
          duration: 3000
        });
      },
      error: (err) => {
        console.log('Formulario no es válido');
        console.log('Medical Information:', diagnostic);
        console.log(err);
      }
    });
  }

  SaveCustomer() {
    console.log(this.myForm.value);
  }

  clearform() {
    this.myForm.reset();
  }
}
