import { ReceitasService } from './receitas.service';
import { Receita } from './receita/receita.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  receitas : Receita[];

  constructor(private receitasService: ReceitasService) { }

  ngOnInit(): void {
    this.receitas = this.receitasService.receitas();

  }

}
