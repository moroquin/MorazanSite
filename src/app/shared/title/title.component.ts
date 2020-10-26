import { Component, Input, OnInit } from '@angular/core';
import { propiedadesTitulo } from '../interfaces/tituloInterface';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  @Input('props') props: propiedadesTitulo;

  heightlogo: 25;

  constructor() {}

  getLink(country: string) {
    return '#';
  }

  ngOnInit(): void {}
}
