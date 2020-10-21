import { Component, OnInit } from '@angular/core';
import { InfoProyectoService } from '../../services/info-proyecto.service';

interface equipo {
  nombre: string;
  titulo: string;
  rol: string;
  img: string;
  descripcion: string;
}


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  propiedades = {
    titulo: 'TEAM',
    subtitulo:
      'The work team is made up of students and professionals from Honduras, Costa Rica and Guatemala.',
    mapa: true,
  };

  teamGt:equipo[];
  teamHn:equipo[];
  teamCr:equipo[];

  constructor(private info:InfoProyectoService) {
    this.teamGt = info.getTeam('gt');
    this.teamHn = info.getTeam('hn');
    this.teamCr = info.getTeam('cr');
   }

  ngOnInit(): void {
  }

}
