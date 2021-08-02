import { Injectable } from '@angular/core';
import { Sobremesa } from './sobremesa/sobremesa.model';

@Injectable({
  providedIn: 'root',
})
export class SobremesasService {
  rests: Sobremesa[] = [
    {
      id: 'pudim',
      nome: 'Pudim',
      desc: 'O clássico e famoso pudim',
      tempoPreparo: '40 min',
      nota: 4.5,
      imagem: 'assets/img/sobremesas/pudinho.jpg',
    },

    {
      id: 'paveDeBis',
      nome: 'Pavê de Bis',
      desc: 'É pavê ou é "pá cume"?',
      tempoPreparo: '50 min',
      nota: 4.0,
      imagem: 'assets/img/sobremesas/pavebis.jpg',
    },

    {
      id: 'tortaMaracuja',
      nome: 'Torta de Mousse de Maracujá',
      desc: 'Uma incrível e deliciosa torta de mousse de maracujá',
      tempoPreparo: '20 min',
      nota: 4.5,
      imagem: 'assets/img/sobremesas/tortacuja.jpg',
    },

    {
      id: 'boloSorvete',
      nome: 'Bolo de Sorvete',
      desc: 'A incrível combinação de duas delicias: Sorvete e Bolo!',
      tempoPreparo: '144 min',
      nota: 4.5,
      imagem: 'assets/img/sobremesas/boloSorvete.jpg',
    },

    {
      id: 'florestaBranca',
      nome: 'Bolo Floresta Branca',
      desc: 'Um delioso bolo de chocolate branco',
      tempoPreparo: '90 min',
      nota: 4.5,
      imagem: 'assets/img/sobremesas/floresta.jpg',
    },

    {
      id: 'tortaLimao',
      nome: 'Torta de Limão',
      desc: 'Uma deliciosa torta de Limão',
      tempoPreparo: '25 min',
      nota: 4.5,
      imagem: 'assets/img/sobremesas/tortaLimao.jpg',
    },
  ];

  constructor() {}

  sobremesas() : Sobremesa[]{
    return this.rests;
  }
}
