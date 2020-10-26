import { Component, OnInit } from '@angular/core';
import {propiedadesTitulo }  from '../../shared/interfaces/tituloInterface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  propiedades:propiedadesTitulo = {
    titulo: 'MORAZAN SAT',
    subtitulo:
      'Project for the integration of the Central American Nations through the collaboration in outer space.',
    mapa: true,
  };

  heightlogo: 90;

  constructor() {
  }

  ngOnInit(): void {}
}
