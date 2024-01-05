import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questao } from '../models/Questao.model';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public listarQuestoes(): Observable<Questao[]>{
    return this.http.get<Questao[]>(`${this.apiUrl}/questoes`)
  }
}
