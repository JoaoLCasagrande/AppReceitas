import { Component, Input, OnInit } from '@angular/core';
import { Prato } from './prato.model';

@Component({
  selector: 'app-prato',
  templateUrl: './prato.component.html',
  styleUrls: ['./prato.component.css']
})
export class PratoComponent implements OnInit {

  @Input() prato: Prato;

  constructor() { }

  ngOnInit(): void {
  }

}
