import { Component, Input, OnInit } from '@angular/core';
import { InfoProyectoService } from '../../services/info-proyecto.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  @Input('props') props: {titulo: '', subtitulo: '', mapa: true};

  heightlogos: 80;
  
  constructor() {
    
  }

  ngOnInit(): void {}
}
