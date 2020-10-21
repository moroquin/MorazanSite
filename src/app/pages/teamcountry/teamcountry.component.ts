import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teamcountry',
  templateUrl: './teamcountry.component.html',
  styleUrls: ['./teamcountry.component.css']
})
export class TeamcountryComponent implements OnInit {
  propiedades = {
    titulo: 'TEAM',
    subtitulo:
      'The work team is made up of students and professionals from Honduras, Costa Rica and Guatemala.',
    mapa: true,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
