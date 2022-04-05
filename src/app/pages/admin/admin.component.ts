import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from './models/user-register';

import { comparePassword } from './models/custom-validator';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  //REGISTER FORM
  // Incialización del formulario
  public userRegisterForm: FormGroup;
  public userLogIn: FormGroup;

  // variable submitted a false
  public submitted: boolean = false;

 // Inicializamos FormBuilder en el constructor
 constructor(private formBuilder: FormBuilder) {
  // Nuestro formulario - sin campos por defecto
  // Podemos meter valores por defecto en las comillas
  this.userRegisterForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern("[a-zA-Z]+"), Validators.maxLength(20)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
    passwordRepeat: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
  },
  {
    // Validación custom de password
    validator: comparePassword('password', 'passwordRepeat')
  });

}



  ngOnInit(): void {
  }
  //Función accionada al clickar en submit
	public onSubmit(): void {
    // El usuario ha pulsado en submit->cambia a true submitted
    this.submitted = true;
    // Si el formulario es valido
    if (this.userRegisterForm.valid) {
      // Creamos un Usuario y lo emitimos
      const user: UserRegister = {
        name: this.userRegisterForm.get('name')?.value,
        password: this.userRegisterForm.get('password')?.value,
        passwordRepeat: this.userRegisterForm.get('passwordRepeat')?.value,
      };
      console.log(user);
      // Reseteamos todos los campos y el indicador de envío o submitted
      this.userRegisterForm.reset();
      this.submitted = false;
    }
  }

}
