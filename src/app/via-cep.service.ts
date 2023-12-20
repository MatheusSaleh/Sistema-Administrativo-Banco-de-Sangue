import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViaCepService {

  constructor(private httpClient: HttpClient) {

  }

  acharEnderecoPeloCep(): Observable<any>{
    return this.httpClient.get("http://viacep.com.br/ws/19806082/json")
  }
}
