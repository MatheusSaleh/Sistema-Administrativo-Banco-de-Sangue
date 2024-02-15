import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfusao } from '../models/Transfusao.model';

@Injectable({
  providedIn: 'root'
})
export class TransfusaoService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public listarTransfusoes(): Observable<Transfusao[]>{
    return this.http.get<Transfusao[]>(`${this.apiUrl}/transfusoes`)
  }
}
