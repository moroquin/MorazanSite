import { Component, OnInit } from '@angular/core';
import { InfoProyectoService } from '../../services/info-proyecto.service';
import {propiedadesTitulo }  from '../../shared/interfaces/tituloInterface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  propiedades:propiedadesTitulo = {
    titulo: 'CONTACT MORAZAN SAT',
    subtitulo:
      'Project for the integration of the Central American Nations through the collaboration in outer space.',
    mapa: false,
  };

  contactos:any[];

  constructor(private info:InfoProyectoService) { 
    this.contactos = info.getContact();
    console.log(this.contactos);
  }

  ngOnInit(): void {
  }

}
