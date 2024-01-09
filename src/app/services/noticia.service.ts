import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/Noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public listarNoticias(): Observable<Noticia[]>{
    return this.http.get<Noticia[]>(`${this.apiUrl}/noticias`);
  }
}
