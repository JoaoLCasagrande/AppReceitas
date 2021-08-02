import { Injectable } from '@angular/core';
import { Receita } from './prato/prato.model';

@Injectable({
  providedIn: 'root',
})
export class ReceitasService {
  rests: Receita[] = [
    {
      id: 'couveflor',
      nome: 'Couve Flor Gratinada',
      desc: 'Uma boa opção para quem não é muito fã de verduras',
      tempoPreparo: '30 min',
      nota: 4.5,
      imagem: 'assets/img/receitas/couveFlor.png',
    },

    {
      id: 'macarronada',
      nome: 'Macarronada',
      desc: 'Macarronada de domingo pra família',
      tempoPreparo: '60 min',
      nota: 4.5,
      imagem: 'assets/img/receitas/macarronada.jpg',
    },

    {
      id: 'strogonoff',
      nome: 'Strogonoff De Salsicha',
      desc: 'Ninguém resiste á um delicioso strogonoff',
      tempoPreparo: '20 min',
      nota: 4.5,
      imagem: 'assets/img/receitas/strogosicha.jpg',
    },

    {
      id: 'rondelli',
      nome: 'Rondelli De Presunto & Queijo',
      desc: 'Rondelli, em italiano, "redondo, perfeito e completo" ',
      tempoPreparo: '45 min',
      nota: 4.5,
      imagem: 'assets/img/receitas/rondelli.jpg',
    },

    {
      id: 'nhoque',
      nome: 'Nhoque',
      desc: 'Quem diria que uma bolinha de massa seria tão saborosa',
      tempoPreparo: '30 min',
      nota: 4.5,
      imagem: 'assets/img/receitas/inhoque.jpg',
    },

    {
      id: 'feijoada',
      nome: 'Feijoada',
      desc: 'A famosa feijoada que todo mundo gosta',
      tempoPreparo: '140 min',
      nota: 4.0,
      imagem: 'assets/img/receitas/feijoada.jpg',
    },
  ];

  constructor() {}

  receitas() : Prato[]{
    return this.rests;
  }
}
