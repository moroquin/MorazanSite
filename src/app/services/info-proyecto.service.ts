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
    ['UNAH_Logo.jpg', 'https://www.unah.edu.hn/'],
    ['UCR_Logo.png', 'https://www.ucr.ac.cr/'],
    ['USAC_Logo.png', 'http://ingenieria.cunoc.usac.edu.gt/portal/'],
    ['CFIA-logo.jpg', 'http://cfia.or.cr/'],
    ['JAXA_Logo.png', 'https://global.jaxa.jp/'],
    ['Kyutceh-Logo.png', 'https://www.kyutech.ac.jp/english/'],
    ['SICA_Logo.png', 'https://www.sica.int/'],
    ['UNOOSA_Logo.png', 'https://www.unoosa.org/'],
  ];

  private contactos = [
    {
      institucion: 'Universidad Nacional Autónoma de Honduras ',
      logo: 'UNAH_Logo.jpg',
      miembros: [
        {
          cargo: 'Decano facultad de Ingeniería',
          rol: 'Rol en el proyecto',
          nombre: 'Prof. Eduardo Gross Muñoz',
          correo: 'eduardo.gross@unah.edu.hn',
          img: '',
        },
        {
          cargo: 'Puesto funcional',
          rol: 'Rol en el proyecto',
          nombre: 'Prof. Fernando Zorto Aguilera ',
          correo: 'fernando.zorto@unah.edu.hn',
          img: '',
        },
        {
          cargo: 'Puesto funcional',
          rol: 'Rol en el proyecto',
          nombre: 'Dr. Javier Mejuto ',
          correo: 'javier.mejuto@unah.edu.hn',
          img: '',
        },
      ],
    },
    {
      institucion: 'Universidad de San Carlos de Guatemala',
      logo: 'USAC_Logo.png',
      miembros: [
        {
          cargo: 'Director división de Ingeniería CUNOC',
          rol: 'Rol en el proyecto',
          nombre: 'Victor Carol Hernández ',
          correo: 'hernandez.victor@usac.edu.gt',
          img: '',
        },
        {
          cargo: 'Coordinador Ing. en Sistemas CUNOC',
          rol: 'Rol en el proyecto',
          nombre: 'Oliver Ernesto Sierra Pac ',
          correo: 'sierra.oe@usac.edu.gt',
          img: '',
        },
      ],
    },
    {
      institucion: 'Universidad de Costa Rica',
      logo: 'UCR_Logo.png',
      miembros: [
        {
          cargo: 'Puesto funcional',
          rol: 'Rol en el proyecto',
          nombre: 'María Jose Molina ',
          correo: 'maria.molinamontero@ucr.ac.cr',
          img: '',
        },
      ],
    },
    {
      institucion: 'Colegio Federado de Ingenieros y Arquitectos ',
      logo: 'CFIA-logo.jpg',
      miembros: [
        {
          cargo: 'Puesto funcional',
          rol: 'Rol en el proyecto',
          nombre: 'Carlos Enrique Alvarado Briseño ',
          correo: 'calvaradob@cfia.or.cr',
          img: '',
        },
        {
          cargo: 'Puesto funcional',
          rol: 'Rol en el proyecto',
          nombre: 'Moacir Fonseca Becker ',
          correo: 'mfonseca@cfia.or.cr',
          img: '',
        },
      ],
    },
    {
      institucion: 'Consultor Técnico de la Misión ',
      logo: 'astracodex_Logo.png',
      miembros: [
        {
          nombre: 'Luis Diego Monge Solano ',
          correo: 'Luis.monge@astracodex.com',
          img: '',
        },
      ],
    },
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
        return [...this.equipoGt, ...this.equipoHn, ...this.equipoCr];
    }

    return this.equipoGt;
  }

  getContact(): any[] {
    return this.contactos;
  }
}
