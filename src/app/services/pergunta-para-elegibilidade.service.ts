import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pergunta } from '../models/Pergunta.model';

@Injectable({
  providedIn: 'root'
})
export class PerguntaParaElegibilidadeService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public listarPerguntas(): Observable<Pergunta[]>{
    return this.http.get<Pergunta[]>(`${this.apiUrl}/perguntas-para-elegibilidade`)
  }
  
}
