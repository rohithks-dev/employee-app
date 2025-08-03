import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../services/master';
import { IAPIModelResponse } from '../../model/interface/APIModelResponse';
import { IDesignation } from '../../model/interface/designation';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.html',
  styleUrl: './designation.css',
})
export class Designation implements OnInit {
  designationList: IDesignation[] = [];
  ngOnInit(): void {
    this.masterService.getAllDesignations().subscribe(
      (result: IAPIModelResponse) => {
        this.designationList = result.data;
      },
      (Error) => {
        alert('API error / Network error');
      }
    );
  }
  masterService = inject(Master);
}
