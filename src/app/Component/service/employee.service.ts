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
    return this._http.get<Empl[]>('http://localhost:8096/get');

  }

  saveEmployee(empl: Empl): Observable<Empl> {
    const requestOptions: Object = {

      responseType: 'json'
    }
    return this._http.post<Empl>('http://localhost:8096/save', empl, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }

  deleteEmployee(id: number): Observable<Empl> {
    return this._http.delete<Empl>(`http://localhost:8096/delete/${id}`,)
  }
  updateEmployee(empl: Empl): Observable<Empl> {
    return this._http.put<Empl>('http://localhost:8096/put', empl, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }
  
  updateEmployeeByEmail(empl: Empl, email: String): Observable<Empl> {
    return this._http.put<Empl>(`http://localhost:8096/putByEmail/${email}`, empl, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    })
  }

  getLoginDetails(name1:String , name: String, password: String ): Observable<Empl[]> {
    const requestOptions: Object = {

      responseType: 'text'
    }
    return this._http.get<Empl[]>(`http://localhost:8096/getByNamePasswrd/${name}/${password}`,requestOptions )
  }
}
