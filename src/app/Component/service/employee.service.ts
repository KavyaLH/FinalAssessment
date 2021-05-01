import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empl } from '../model/empl';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  getEmployees(): Observable<Empl[]> {
    return this._http.get<Empl[]>('http://localhost:8091/get');

  }

  saveEmployee(empl: Empl): Observable<Empl> {
    return this._http.post<Empl>('http://localhost:8091/save', empl, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }

  deleteEmployee(id: number): Observable<Empl> {
    return this._http.delete<Empl>(`http://localhost:8091/delete/${id}`,)
  }
  updateEmployee(empl: Empl): Observable<Empl> {
    return this._http.put<Empl>('http://localhost:8091/put', empl, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }
  
  updateEmployeeByEmail(empl: Empl, email: String): Observable<Empl> {
    return this._http.put<Empl>(`http://localhost:8091/putByEmail/${email}`, empl, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }
}
