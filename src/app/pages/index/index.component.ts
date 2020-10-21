import { Component, OnInit } from '@angular/core';
import { InfoProyectoService } from '../../services/info-proyecto.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  propiedades = {
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
