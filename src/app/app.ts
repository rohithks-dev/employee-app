import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Roles } from './components/roles/roles';
import { Destination } from './components/destination/destination';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Roles, Destination],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('employee-app');
}
