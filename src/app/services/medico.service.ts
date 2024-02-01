import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../models/Medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public listarMedicos(): Observable<Medico[]>{
    return this.http.get<Medico[]>(`${this.apiUrl}/medicos`);
  }
}
