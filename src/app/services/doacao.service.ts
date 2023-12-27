import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doacao } from '../models/Doacao.model';

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public listarDoacoes(): Observable<Doacao[]>{
    return this.http.get<Doacao[]>(`${this.apiUrl}/doacoes`)
  }
}
