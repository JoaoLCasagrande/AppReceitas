import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prato } from './prato/prato.model';

@Injectable({
  providedIn: 'root',
})
export class PratosService {


  constructor(private http: HttpClient) {}

  pratos(): Observable<Prato[]> {
    return this.http.get<Prato[]>(`http://localhost:3000/pratos`);
  }
}
