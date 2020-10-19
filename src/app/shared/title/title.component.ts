import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  @Input('props') props: {titulo: '', subtitulo: '', mapa: true};
  
  constructor() {}

  ngOnInit(): void {}
}
