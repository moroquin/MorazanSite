import { Component, OnInit } from '@angular/core';
import { propiedadesTitulo } from '../../shared/interfaces/tituloInterface';
import { postEstructura } from '../../shared/interfaces/postInterface';

@Component({
  selector: 'app-missionsc',
  templateUrl: './missionsc.component.html',
  styleUrls: ['./missionsc.component.css'],
})
export class MissionscComponent implements OnInit {
  propiedades: propiedadesTitulo = {
    titulo: 'THE SCIENTIFIC MISSION',
    subtitulo:
      'Central America is a region with high exposure to natural disasters and has territories classified among the highest risk in the world.',
    mapa: false,
  };

  infopostt: postEstructura[] = [
    {
      titulo: 'The Morazán Project mission has two main fronts:',
      imagen: 'riskca.jpg',
      fecha: 'August, 2019',
      contenido: [
        {
          tipo: 'subtitulo',
          texto1: '1) Provide support on issues of natural disasters caused by hydrometeorological events through prevention and mitigation of these events.',
          texto2:'',
          lista: [],
        },
        {
          tipo: 'subtitulo',
          texto1: 'Monitoring and prevention:',
          texto2:'',
          lista: [],
        },
        {
          tipo: 'imagen',
          texto1: 'missiongeneralca.jpg',
          texto2: '',
          lista: [],
        },
        {
          tipo: 'texto',
          texto1:
            'Monitoring of the hydrometeorological variables of high risk watersheds, which are analyzed in almost real time to generate early warnings before and during extreme weather events.',
          texto2: '',
          lista: [],
        },
        {
          tipo: 'subtitulo',
          texto1: 'Mitigation:',
          texto2:'',
          lista: [],
        },
        {
          tipo: 'imagen',
          texto1: 'missionduringeventca.jpg',
          texto2: '',
          lista: [],
        },
        {
          tipo: 'texto',
          texto1:
            'Once an event has occurred that inflicts considerable damage to the communication infrastructure, the proposed satellite should function as an additional communication system between communities and authorities to attend to the event.',
          texto2: '',
          lista: [],
        },
        {
          tipo: 'subtitulo',
          texto1: '2) Space education and inspiration for future generations through access to data and images provided by the satellite.:',
          texto2:'',
          lista: [],
        },
        {
          tipo: 'imagen',
          texto1: 'missionimagecapturetca.jpg',
          texto2: '',
          lista: [],
        },
        {
          tipo: 'texto',
          texto1:
            'The satellite will carry on board a low resolution camera which will transmit images to Earth using simple communication protocols for image transmission within the amateur radio band. Through STEM education programs, students from Central American schools will learn to download these images freely every time the satellite is in range of visibility, using yaggi-type antennas, radios, and their smart devices.',
          texto2: '',
          lista: [],
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
