import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enfermeiro } from '../models/Enfermeiro.model';

@Injectable({
  providedIn: 'root'
})
export class EnfermeiroService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public listarEnfermeiros(): Observable<Enfermeiro[]>{
    return this.http.get<Enfermeiro[]>(`${this.apiUrl}/enfermeiros`);
  }
}
