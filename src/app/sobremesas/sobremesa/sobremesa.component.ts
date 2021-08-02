import { Component, Input, OnInit } from '@angular/core';
import { Sobremesa } from './sobremesa.model';

@Component({
  selector: 'app-sobremesa',
  templateUrl: './sobremesa.component.html',
  styleUrls: ['./sobremesa.component.css']
})
export class SobremesaComponent implements OnInit {

  @Input() sobremesa: Sobremesa;

  constructor() { }

  ngOnInit(): void {
  }

}
