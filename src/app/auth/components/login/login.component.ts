import { Component, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [ FormsModule,CommonModule],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = signal('');
  password = signal('');
  errorMessage = signal('');

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.email(), this.password())) {
      this.router.navigate(['/home']);
    } else {
      this.errorMessage.set('Invalid credentials');
    }
  }

  routeTo(url: string) {
    console.log(url);
    this.router.navigateByUrl(url);
  }
}
