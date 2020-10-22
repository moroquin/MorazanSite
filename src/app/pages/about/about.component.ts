import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  propiedades = {
    titulo: 'The Morazán Project',
    subtitulo:
      'is an initiative to place the first Honduran satellite and the first Central American satellite jointly developed by three sister nations (Costa Rica, Guatemala and Honduras).',
    mapa: false,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
