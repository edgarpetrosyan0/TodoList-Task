import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly isAuthenticatedSignal = signal<boolean>(this.isAuthenticated()); // Signal for authentication status

  constructor(private router: Router) {}

  /*Register a user and save credentials to localStorage.*/
  signUp(email: string, password: string, userName: string): boolean {
    const user = { email, password, userName };
    localStorage.setItem('user', JSON.stringify(user));
    return true;
  }

  /*Log in a user by checking stored credentials. */
  login(email: string, password: string): boolean {
    const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('user', 'true');
      this.isAuthenticatedSignal.set(true); // Update signal
      return true;
    }

    return false;
  }

  /* Check if the user is authenticated.*/
  isAuthenticated(): boolean {
    return localStorage.getItem('user') === 'true';
  }

  /*Log out the user and clear authentication status.*/
  logout(): void {
    localStorage.removeItem('user');
    this.isAuthenticatedSignal.set(false); // Update signal
    this.router.navigate(['/login']);
  }

  /*Retrieve the currently stored user's email*/
  getEmail(): string | null {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return user?.email || null;
  }

  /* Get authentication status signal.*/
  getIsAuthenticatedSignal() {
    return this.isAuthenticatedSignal;
  }
}
