import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Houses } from './../models/housesModel';

@Injectable({
  providedIn: 'root'
})
export class HouseFilterService {
  private baseUrl = 'https://rentiz-json-server.vercel.app';
  private selectedData = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {}


  //INPUT PAGINA HOME

  filterData(purpose: string, location: string, type: string, minRooms: number = 0, minBath: number = 0): Observable<Houses[]> {
    let params: { [param: string]: string } = {};
    if (purpose) params['purpose'] = purpose;
    if (location) params['location'] = location;
    if (type) params['type'] = type;
    if (minRooms > 0) params['rooms_gte'] = minRooms.toString();
    if (minBath > 0) params['bathroom_gte'] = minBath.toString();

    return this.http.get<Houses[]>(`${this.baseUrl}/houses`, { params: params }).pipe(
      catchError(error => {
        console.error('Erro ao filtrar dados.', error);
        return of([]);
      })
    );
  }

  setSelectedData(purpose: string, location: string, type: string ): void {
    this.selectedData.next({ purpose, location, type });
  }

  getSelectedData(): Observable<any> {
    return this.selectedData.asObservable();
  }
}
