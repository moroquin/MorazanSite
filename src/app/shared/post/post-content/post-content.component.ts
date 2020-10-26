import { Component, Input, OnInit } from '@angular/core';
import { postContenido, postEstructura } from '../../interfaces/postInterface';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent implements OnInit {
  @Input() contenido: postContenido[];

  constructor() { }

  ngOnInit(): void {
    //console.log(this.contenido[0]);
  }

}
