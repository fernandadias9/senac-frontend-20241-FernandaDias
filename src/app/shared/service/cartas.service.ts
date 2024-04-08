import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carta } from '../model/carta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carta';

  constructor(private httpClient: HttpClient) { }

  listarTodas(): Observable<Array<Carta>> {
    return this.httpClient.get<Array<Carta>>(this.API + '/todas');
  }
}
