import { Injectable } from '@angular/core';
import { Receita } from './receita/receita.model';

@Injectable({
  providedIn: 'root',
})
export class ReceitasService {
  rests: Receita[] = [
    {
      id: 'kibe',
      nome: 'Kibe',
      desc: 'Salgado adorado por todos',
      tempoPreparo: '60m',
      nota: 4.0,
      imagem: 'assets/img/receitas/kibe.jpg',
    },

    {
      id: 'macarronada',
      nome: 'Macarronada',
      desc: 'Macarronada de domingo pra família',
      tempoPreparo: '60m',
      nota: 4.5,
      imagem: 'assets/img/receitas/macarronada.jpg',
    },

    {
      id: 'dadinho',
      nome: 'Dadinho de Tapioca',
      desc: 'Quem diria que uma mistura de Leite e Tapioca seria tão boa?!',
      tempoPreparo: '90m',
      nota: 4.5,
      imagem: 'assets/img/receitas/dadinho.jpg',
    },

  ];

  constructor() {}

  receitas() : Receita[]{
    return this.rests;
  }
}
