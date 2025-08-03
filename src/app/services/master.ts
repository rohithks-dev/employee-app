import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IDesignation } from '../model/interface/designation';
import { Observable } from 'rxjs';
import { IAPIModelResponse } from '../model/interface/APIModelResponse';

@Injectable({
  providedIn: 'root',
})
export class Master {
  http = inject(HttpClient);
  designationList: IDesignation[] = [];

  getAllDesignations(): Observable<IAPIModelResponse> {
    return this.http.get<IAPIModelResponse>(
      '/api/ClientStrive/GetAllDesignation'
    );
  }
}
