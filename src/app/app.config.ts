import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './routes';
import { provideStore } from '@ngrx/store';  // For registering reducers
import { todoReducer } from './store/todos.reducer';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideStore({ todos: todoReducer }), // Register NGRX Store
  ]
};
