import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Houses } from '../models/housesModel';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  private baseUrl = 'http://localhost:3000';
  houses!: any[];
  private page = 1;
  private limit = 12;

  constructor(private http: HttpClient) {}

  getHouses(): Observable<Houses[]> {
    return this.http.get<Houses[]>(`${this.baseUrl}/houses?_page=${this.page}&_limit=${this.limit}`);
  }

  nextPage(): void {
      this.page++;
      window.scrollTo({ top: 0, behavior: 'smooth' });

  }

  previousPage(): void {
    this.page--;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  filterData(purpose: string, location: string, type: string, minRooms: number = 0, minBath: number = 0) {
    let params: { [param: string]: string } = {};
    if (purpose) {
        params['purpose'] = purpose;
    }
    if (location) {
        params['location'] = location;
    }
    if (type) {
        params['type'] = type;
    }
    if (minRooms > 0) {
      params['rooms_gte'] = minRooms.toString();
    }
    if (minBath > 0) {
      params['bathroom_gte'] = minBath.toString();
    }

    return this.http.get<Houses[]>(`${this.baseUrl}/houses`, { params: params });
}

  selected: { purpose: string, location: string, type: string } = { purpose: '', location: '', type: '' };


  setSelectedData(purpose: string, location: string, type: string) {
    this.selected = { purpose, location, type };
  }

  getSelectedData() {
    return this.selected;
  }

  getHouseById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/houses/${id}`);
  }


}
