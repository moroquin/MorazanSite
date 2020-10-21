import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoProyectoService } from '../../services/info-proyecto.service';

interface equipo {
  nombre: string;
  titulo: string;
  rol: string;
  img: string;
  descripcion: string;
}

@Component({
  selector: 'app-teamcountry',
  templateUrl: './teamcountry.component.html',
  styleUrls: ['./teamcountry.component.css'],
})
export class TeamcountryComponent implements OnInit {
  propiedades = {
    titulo: 'MORAZAN WORK TEAM',
    subtitulo:
      'The work team is made up of students and professionals from Honduras, Costa Rica and Guatemala.',
    mapa: false,
  };
  team: equipo[];
  country: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private info: InfoProyectoService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (
        params['id'] === 'gt' ||
        params['id'] === 'hn' ||
        params['id'] === 'cr'
      ) {
        this.team = this.info.getTeam(params['id']);
        this.country = (params['id'] === 'gt')? 'GUATEMALA ':(params['id'] === 'hn')? 'HONDURAS ': 'COSTA RICA ';
        this.propiedades.titulo = this.country + ' WORK TEAM';
      } else {
        this.team = this.info.getTeam('all');
        this.country = "MORAZAN "
      }
    });
  }

  ngOnInit(): void {}
}
