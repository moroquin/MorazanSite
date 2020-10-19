import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoProyectoService {

  private logos = [
    ['./assets/img/logos/UNAH_Logo.jpg','#'],
    ['./assets/img/logos/UCR_Logo.png','#'],
    ['./assets/img/logos/USAC_Logo.png','http://ingenieria.cunoc.usac.edu.gt/portal/'],
    ['./assets/img/logos/CFIA-logo.jpg','#'],
    ['./assets/img/logos/JAXA_Logo.png','#'],
    ['./assets/img/logos/Kyutceh-Logo.png','#'],
    ['./assets/img/logos/SICA_Logo.png','#'],
    ['./assets/img/logos/UNOOSA_Logo.png','#'],
  ];

  constructor() { }

  getLogos():string[][]{
    return this.logos;
  }
}
