import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { TodoListComponent } from '../../todos/components/todo-list/todo-list/todo-list.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports:[TodoListComponent,NavbarComponent],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
