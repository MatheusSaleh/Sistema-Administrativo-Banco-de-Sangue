import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receptor } from '../models/Receptor.model';

@Injectable({
  providedIn: 'root'
})
export class ReceptorService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public listarReceptores(): Observable<Receptor[]>{
    return this.http.get<Receptor[]>(`${this.apiUrl}/receptores`)
  }
}
