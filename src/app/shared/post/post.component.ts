import { Component, Input, OnInit } from '@angular/core';
import { postEstructura, postContenido } from '../interfaces/postInterface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() infopost: postEstructura[];

  constructor() {
   }

  ngOnInit(): void {
  }

}
