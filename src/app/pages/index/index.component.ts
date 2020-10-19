import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  propiedades = {
    titulo: 'MORAZAN SAT',
    subtitulo: 'Represents a project for the integration of the Central American Nations through the collaboration in outer space.',
    mapa: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
