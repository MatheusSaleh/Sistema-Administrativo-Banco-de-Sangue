import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipamentoMedico } from '../models/EquipamentoMedico.model';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoMedicoService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public listarEquipamentosMedicos(): Observable<EquipamentoMedico[]>{
    return this.http.get<EquipamentoMedico[]>(`${this.apiUrl}/equipamentos`)
  }
}
