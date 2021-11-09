import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prato } from '../pratos/prato/prato.model';
import { PratosService } from '../pratos/pratos.service';

@Component({
  selector: 'app-pratos-detail',
  templateUrl: './pratos-detail.component.html',
  styleUrls: ['./pratos-detail.component.css']
})
export class PratosDetailComponent implements OnInit {

  pratos: Prato;

  constructor(private pratosService: PratosService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pratosService.pratosById(this.route.snapshot.params['id'])
    .subscribe(pratos => {
      this.pratos - pratos;
    })
  }

}
