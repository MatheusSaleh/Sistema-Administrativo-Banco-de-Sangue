import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doador } from '../models/Doador.model';

@Injectable({
  providedIn: 'root'
})
export class DoadorService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public listarDoadores(): Observable<Doador[]>{
    return this.http.get<Doador[]>(`${this.apiUrl}/doadores`)
  }
}
