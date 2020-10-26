import { Injectable } from '@angular/core';
import {
  infoEquipo,
  miembro,
} from '../shared/interfaces/teamInterface';

@Injectable({
  providedIn: 'root',
})
export class InfoProyectoService {
  private logos: string[][];

  private infoEquipo: infoEquipo[];

  private getMemberCountry(ct: string): miembro[] {
    if (ct !== 'gt' && ct !== 'hn' && ct !== 'cr') {
      return this.infoEquipo
        .filter((item) => item.pais !== 'all')
        .flatMap((item) => item.instituciones.flatMap((item) => item.miembros));
    } else {
      return this.infoEquipo
        .filter((item) => item.pais === ct)
        .flatMap((item) => item.instituciones.flatMap((item) => item.miembros));
    }
  }

  getLogos(): string[][] {
    return this.logos;
  }

  getTeam(pais: string): miembro[] {
    return this.getMemberCountry(pais);
  }

  getContact(): infoEquipo[] {
    return this.infoEquipo;
  }

  constructor() {
    this.logos = [
      ['UNAH_Logo.jpg', 'https://www.unah.edu.hn/'],
      ['UCR_Logo.png', 'https://www.ucr.ac.cr/'],
      ['USAC_Logo.png', 'http://ingenieria.cunoc.usac.edu.gt/portal/'],
      ['CFIA-logo.jpg', 'http://cfia.or.cr/'],
      ['JAXA_Logo.png', 'https://global.jaxa.jp/'],
      ['Kyutceh-Logo.png', 'https://www.kyutech.ac.jp/english/'],
      ['SICA_Logo.png', 'https://www.sica.int/'],
      ['UNOOSA_Logo.png', 'https://www.unoosa.org/'],
      [
        'astracodex_Logo.png',
        'https://sites.google.com/astracodex.com/astra-codex/',
      ],
    ];

    this.infoEquipo = [
      {
        pais: 'hn',
        bandera: '',
        instituciones: [
          {
            nombre: 'Universidad Nacional Autónoma de Honduras ',
            logo: 'UNAH_Logo.jpg',

            miembros: [
              {
                cargo: 'Decano facultad de Ingeniería',
                rol: 'Rol en el proyecto',
                nombre: 'Eduardo Gross Muñoz',
                correo: 'eduardo.gross@unah.edu.hn',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
              },
              {
                cargo: 'Puesto funcional',
                rol: 'Rol en el proyecto',
                nombre: 'Prof. Fernando Zorto Aguilera ',
                correo: 'fernando.zorto@unah.edu.hn',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
              },
              {
                cargo: 'Puesto funcional',
                rol: 'Rol en el proyecto',
                nombre: 'Dr. Javier Mejuto ',
                correo: 'javier.mejuto@unah.edu.hn',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
              },
            ],
          },
        ],
      },

      {
        pais: 'gt',
        bandera: '',
        instituciones: [
          {
            nombre:
              'Universidad de San Carlos de Guatemala / Centro Universitario de Occidente ',
            logo: 'USAC_Logo.png',

            miembros: [
              {
                cargo: 'Director división de Ingeniería',
                rol: 'Rol en el proyecto',
                nombre: 'Victor Carol Hernández ',
                correo: 'hernandez.victor@usac.edu.gt',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
              },
              {
                cargo: 'Coordinador Ing. en Sistemas',
                rol: 'Rol en el proyecto',
                nombre: 'Oliver Ernesto Sierra Pac ',
                correo: 'sierra.oe@usac.edu.gt',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
              },
            ],
          },
        ],
      },
      {
        pais: 'cr',
        bandera: '',
        instituciones: [
          {
            nombre: 'Universidad de Costa Rica ',
            logo: 'UCR_Logo.png',

            miembros: [
              {
                cargo: 'Puesto funcional',
                rol: 'Rol en el proyecto',
                nombre: 'María Jose Molina ',
                correo: 'maria.molinamontero@ucr.ac.cr',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
              },
            ],
          },
          {
            nombre: 'Colegio Federado de Ingenieros y Arquitectos ',
            logo: 'CFIA-logo.jpg',

            miembros: [
              {
                cargo: 'Puesto funcional',
                rol: 'Rol en el proyecto',
                nombre: 'Carlos Enrique Alvarado Briseño ',
                correo: 'calvaradob@cfia.or.cr',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
              },
              {
                cargo: 'Puesto funcional',
                rol: 'Rol en el proyecto',
                nombre: 'Moacir Fonseca Becker ',
                correo: 'mfonseca@cfia.or.cr',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
              },
            ],
          },
          {
            nombre: 'Astra Codex ',
            logo: 'astracodex_Logo.png',

            miembros: [
              {
                cargo: 'Puesto funcional',
                rol: 'Consultor Técnico de la Misión',
                nombre: 'Luis Diego Monge Solano ',
                correo: 'Luis.monge@astracodex.com',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
              },
            ],
          },
        ],
      },
    ];
  }
}
