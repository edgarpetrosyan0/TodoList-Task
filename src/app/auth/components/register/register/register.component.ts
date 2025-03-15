import { Component, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [ FormsModule,CommonModule],
  styleUrls: ['./register.component.scss'],
})
export class RegistrationComponent {
  email = signal('');
  userName = signal('');
  password = signal('');
  errorMessage = signal('');

  constructor(private authService: AuthService, private router: Router) {}

  sginUp(): void {
    this.authService.signUp(this.email(), this.password(),this.userName());
    this.router.navigate(['/login']);
  }

  routeTo(url: string) {
    this.router.navigate([url]);
  }
}
