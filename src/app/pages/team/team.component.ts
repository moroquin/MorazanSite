import { Component, OnInit } from '@angular/core';
import { InfoProyectoService } from '../../services/info-proyecto.service';
import {  miembro } from '../../shared/interfaces/teamInterface';
import {propiedadesTitulo }  from '../../shared/interfaces/tituloInterface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  propiedades:propiedadesTitulo = {
    titulo: 'TEAM',
    subtitulo:
      'The work team is made up of students and professionals from Honduras, Costa Rica and Guatemala.',
    mapa: false,
  };

  teamGt:miembro[];
  teamHn:miembro[];
  teamCr:miembro[];

  constructor(private info:InfoProyectoService) {
    this.teamGt = info.getTeam('gt');
    this.teamHn = info.getTeam('hn');
    this.teamCr = info.getTeam('cr');
   }

  ngOnInit(): void {
  }

}
