import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { Component, OnInit } from '@angular/core';
import { CustomValidators } from '../../custom-validator';
import { AuthService } from '../../services/auth-service/auth.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  name: string = '';
  surname: string = '';

  
  //Example of notification
  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    const registerRequest = {
      email: this.email,
      name: this.name,
      surname: this.surname
    };

    this.authService.register(registerRequest).subscribe(() => {
      // Optionally navigate to login after register
      this.router.navigate(['/login']);
    });
  }
  //end of example
}

