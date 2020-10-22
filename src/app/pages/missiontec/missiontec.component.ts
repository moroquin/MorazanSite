import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missiontec',
  templateUrl: './missiontec.component.html',
  styleUrls: ['./missiontec.component.css']
})
export class MissiontecComponent implements OnInit {
  propiedades = {
    titulo: 'TECHNOLOGICAL MISSION',
    subtitulo:
      'The project will follow the project life cycle established by the NASA Systems Engineering Manual.',
    mapa: false,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
