import { Component, Input, OnInit } from '@angular/core';
import { InfoProyectoService } from '../../services/info-proyecto.service';

@Component({
  selector: 'app-logosinstituciones',
  templateUrl: './logosinstituciones.component.html',
  styleUrls: ['./logosinstituciones.component.css'],
})
export class LogosinstitucionesComponent implements OnInit {
  @Input() heightlogo: number;

  logos: string[][];

  constructor(private info: InfoProyectoService) {
    this.logos = info.getLogos();
  }

  ngOnInit(): void {
    //console.log(this.heightlogo);
    if (!this.heightlogo) {
      this.heightlogo = 30;
      
    }
    this.heightlogo = 30;
  }
}
