import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missionsc',
  templateUrl: './missionsc.component.html',
  styleUrls: ['./missionsc.component.css']
})
export class MissionscComponent implements OnInit {
  propiedades = {
    titulo: 'THE SCIENTIFIC MISSION',
    subtitulo:
      'Central America is a region with high exposure to natural disasters and has territories classified among the highest risk in the world.',
    mapa: false,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
