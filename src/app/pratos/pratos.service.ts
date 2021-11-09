import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MEAT_API } from '../app.api';
import { Prato } from './prato/prato.model';

@Injectable({
  providedIn: 'root',
})
export class PratosService {


  constructor(private http: HttpClient,
    private toastr: ToastrService) {}

    pratos(): Observable<Prato[]>{
      return this.http.get<Prato[]>(`${MEAT_API}/pratos`).pipe(
        map(pratos => pratos),
        catchError(erro => this,exibeErro(erro))
      );
    }

    pratoById(id: String): Observable<Prato>{
      return this.http.get<Prato>(`${MEAT_API}/pratos/${id}`).pipe(
        map(pratos => pratos),
        catchError(erro => this,exibeErro(erro))
      );
    }

    exibeErro(e: any): Observable<any> {
      this.exibirMensagem('ERRO!', 'Não foi possível executar essa operação', 'toast-error');
      return EMPTY
    }

    exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
      this.toastr.show(mensagem, titulo, {closeButton:true, progressBar: true}, tipo)
    }
}
