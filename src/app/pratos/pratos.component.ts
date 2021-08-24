import { PratosService } from './pratos.service';
import { Prato } from './prato/prato.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.component.html',
  styleUrls: ['./pratos.component.css']
})
export class PratosComponent implements OnInit {

  pratos : Prato[] = [];

  constructor(private pratosService: PratosService) { }

  ngOnInit(): void {
    this.pratosService.pratos().subscribe(pratos => {
      this.pratos = pratos;
    });

  }

}
