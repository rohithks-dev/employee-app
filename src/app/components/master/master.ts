import { Component } from '@angular/core';
import { Roles } from '../roles/roles';
import { Designation } from '../designation/designation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [Roles, Designation, CommonModule],
  templateUrl: './master.html',
  styleUrl: './master.css',
})
export class Master {
  currentComponent: string = '';

  changeTab(tabName: string) {
    this.currentComponent = tabName;
  }
}
