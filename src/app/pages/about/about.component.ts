import { Component, OnInit } from '@angular/core';
import {propiedadesTitulo }  from '../../shared/interfaces/tituloInterface';
import { postEstructura } from '../../shared/interfaces/postInterface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  propiedades:propiedadesTitulo = {
    titulo: 'The Morazán Project',
    subtitulo:
      'is an initiative to place the first Honduran satellite and the first Central American satellite jointly developed by three sister nations (Costa Rica, Guatemala and Honduras).',
    mapa: false,
  };

  infopostt: postEstructura[]=[{
    titulo:'Morazan Sat',
    imagen: '',
    fecha: 'August, 2019',
    contenido:[{
      tipo:'texto', 
      texto1: 'Our work team and the name of this project are inspired by the ideals of the great visionary and integrationist Francisco Morazán, the last president of the Republic of Central America. We believe in the importance of facing together the greatest challenges that the region shares through cooperation, development of new capacities and transfer of knowledge between nations. To enter the field of aerospace development is essential for the future and the integral development of our nations. The academic, technological, scientific and social benefits of aerospace development are hard to underestimate.',
      texto2: 'This joint effort and a new chapter in the history that we are writing, supported by the Central American Integration System, lays the initial foundations so that future generations of Central Americans can be born with tangible opportunities to fulfill their dreams of reaching space.',
      lista:[],
    },{
      tipo:'imagen', 
      texto1: 'morazanca.png',
      texto2: '',
      lista:[],
    },
  ]
  },];

  constructor() { }

  ngOnInit(): void {
  }

}
