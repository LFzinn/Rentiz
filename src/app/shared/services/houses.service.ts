import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of, shareReplay } from 'rxjs';
import { Houses } from '../models/housesModel';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  private baseUrl = 'https://rentiz-json-server.vercel.app';
  houses$ = this.http.get<Houses[]>(`${this.baseUrl}/houses`).pipe(shareReplay(1));

  constructor(private http: HttpClient) {}

  getHouses(): Observable<Houses[]> {
    return this.http.get<Houses[]>(`${this.baseUrl}/houses`,).pipe(
      catchError(error => {
        console.error('Erro ao carregar dados.', error);
        return of([]);
      })
    );
  }

  moreVisited(limit: number = 5): Observable<Houses[]> {
    let params = new HttpParams().set('_limit', limit.toString());
    return this.http.get<Houses[]>(`${this.baseUrl}/houses`, { params }).pipe(
      catchError(error => {
        console.error('Erro ao carregar dados.', error);
        return of([]);
      })
    );
  }

  getHouseById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/houses/${id}`);
  }

}
