import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles {
  firstName: string = 'Rohith';
  lastName: string = 'Sura';
  fullName: string = `${this.firstName} ${this.lastName}`;
  number: number = 1;
  isActive: boolean = true;
  currentDate: Date = new Date();
}
