import { CastExpr } from '@angular/compiler';
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
    ['./assets/img/logos/UNAH_Logo.jpg', 'https://www.unah.edu.hn/'],
    ['./assets/img/logos/UCR_Logo.png', 'https://www.ucr.ac.cr/'],
    [
      './assets/img/logos/USAC_Logo.png',
      'http://ingenieria.cunoc.usac.edu.gt/portal/',
    ],
    ['./assets/img/logos/CFIA-logo.jpg', 'http://cfia.or.cr/'],
    ['./assets/img/logos/JAXA_Logo.png', 'https://global.jaxa.jp/'],
    ['./assets/img/logos/Kyutceh-Logo.png', 'https://www.kyutech.ac.jp/english/'],
    ['./assets/img/logos/SICA_Logo.png', 'https://www.sica.int/'],
    ['./assets/img/logos/UNOOSA_Logo.png', 'https://www.unoosa.org/'],
  ];

  private equipoGt: equipo[] = [
    {
      nombre: 'Guate',
      titulo: 'Ing. ',
      rol: 'mi rol',
      img: '',
      descripcion: ' ',
    },
  ];

  private equipoHn: equipo[] = [
    {
      nombre: 'Honduras',
      titulo: 'Ing. ',
      rol: 'mi rol',
      img: '',
      descripcion: ' ',
    },
  ];

  private equipoCr: equipo[] = [
    {
      nombre: 'Costa Rica',
      titulo: 'Ing. ',
      rol: 'mi rol',
      img: '',
      descripcion: ' ',
    },
  ];
 
  constructor() {}

  getLogos(): string[][] {
    return this.logos;
  }

  getTeam(pais: string): equipo[] {
    
    switch (pais) {
      case 'gt':
        return this.equipoGt;
        break;
      case 'hn':
        return this.equipoHn;
        break;
      case 'cr':
        return this.equipoCr;
        break;
      default:
        return [...this.equipoGt, ...this.equipoHn, ...this.equipoCr] ;
    }

    return this.equipoGt;
  }
}
