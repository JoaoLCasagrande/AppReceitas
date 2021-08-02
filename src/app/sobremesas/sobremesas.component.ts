import { SobremesasService } from './sobremesas.service';
import { Sobremesa } from './sobremesa/sobremesa.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.component.html',
  styleUrls: ['./sobremesas.component.css']
})
export class SobremesasComponent implements OnInit {

  sobremesas : Sobremesa[];

  constructor(private sobremesasService: SobremesasService) { }

  ngOnInit(): void {
    this.sobremesas = this.sobremesasService.sobremesas();

  }

}
