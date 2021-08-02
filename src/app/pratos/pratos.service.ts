import { Injectable } from '@angular/core';
import { Prato } from './prato/prato.model';

@Injectable({
  providedIn: 'root',
})
export class PratosService {
  rests: Prato[] = [
    {
      id: 'couveflor',
      nome: 'Couve Flor Gratinada',
      desc: 'Uma boa opção para quem não é muito fã de verduras',
      tempoPreparo: '30 min',
      nota: 4.5,
      imagem: 'assets/img/pratos/couveFlor.png',
    },

    {
      id: 'macarronada',
      nome: 'Macarronada',
      desc: 'Macarronada de domingo pra família',
      tempoPreparo: '60 min',
      nota: 4.5,
      imagem: 'assets/img/pratos/macarronada.jpg',
    },

    {
      id: 'strogonoff',
      nome: 'Strogonoff De Salsicha',
      desc: 'Ninguém resiste á um delicioso strogonoff',
      tempoPreparo: '20 min',
      nota: 4.5,
      imagem: 'assets/img/pratos/strogosicha.jpg',
    },

    {
      id: 'rondelli',
      nome: 'Rondelli De Presunto & Queijo',
      desc: 'Rondelli, em italiano, "redondo, perfeito e completo" ',
      tempoPreparo: '45 min',
      nota: 4.5,
      imagem: 'assets/img/pratos/rondelli.jpg',
    },

    {
      id: 'nhoque',
      nome: 'Nhoque',
      desc: 'Quem diria que uma bolinha de massa seria tão saborosa',
      tempoPreparo: '30 min',
      nota: 4.5,
      imagem: 'assets/img/pratos/inhoque.jpg',
    },

    {
      id: 'feijoada',
      nome: 'Feijoada',
      desc: 'A famosa feijoada que todo mundo gosta',
      tempoPreparo: '140 min',
      nota: 4.0,
      imagem: 'assets/img/pratos/feijoada.jpg',
    },
  ];

  constructor() {}

  pratos() : Prato[]{
    return this.rests;
  }
}
