import { Injectable } from '@angular/core';

interface equipo {
  nombre: string;
  titulo: string;
  rol: string;
  img: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root',
})
export class InfoProyectoService {
  private logos = [
    ['./assets/img/logos/UNAH_Logo.jpg', '#'],
    ['./assets/img/logos/UCR_Logo.png', '#'],
    [
      './assets/img/logos/USAC_Logo.png',
      'http://ingenieria.cunoc.usac.edu.gt/portal/',
    ],
    ['./assets/img/logos/CFIA-logo.jpg', '#'],
    ['./assets/img/logos/JAXA_Logo.png', '#'],
    ['./assets/img/logos/Kyutceh-Logo.png', '#'],
    ['./assets/img/logos/SICA_Logo.png', '#'],
    ['./assets/img/logos/UNOOSA_Logo.png', '#'],
  ];

  private equipoGt: equipo[] = [
    {
      nombre: 'Oliver Ernesto Sierra Pac',
      titulo: 'Ing. ',
      rol: 'mi rol',
      img: 'oliver.jpg',
      descripcion: ' ',
    },
    {
      nombre: 'Oliver Ernesto Sierra Pac',
      titulo: 'Ing. ',
      rol: 'mi rol',
      img: 'oliver.jpg',
      descripcion: ' ',
    },
    {
      nombre: 'Oliver Ernesto Sierra Pac',
      titulo: 'Ing. ',
      rol: 'mi rol',
      img: 'oliver.jpg',
      descripcion: ' ',
    },
  ];
 
  constructor() {}

  getLogos(): string[][] {
    return this.logos;
  }

  getTeam(pais: string): equipo[] {
    return this.equipoGt;
  }
}
