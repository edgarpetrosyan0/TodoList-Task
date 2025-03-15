import { Component, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';
 import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { IUser } from '../../model/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  imports: [ FormsModule,CommonModule],
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  data = signal<IUser>({
    name: '',
    email: '',
    password:''
  });
  constructor(private authService: AuthService, private router: Router) {}

  sginUp(): void {
    this.authService.signUp(this.data().name, this.data().email,this.data().password);
    this.router.navigate(['/login']);
  }
 
   // Method to handle input change and update the signal
   onFieldChange(field: keyof IUser, value: string): void {
    this.data.set({
      ...this.data(), 
      [field]: value
    });
  }

  routeTo(url: string) {
    this.router.navigate([url]);
  }
}
