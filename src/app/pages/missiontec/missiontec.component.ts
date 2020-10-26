import { Component, OnInit } from '@angular/core';
import { propiedadesTitulo } from '../../shared/interfaces/tituloInterface';
import { postEstructura } from '../../shared/interfaces/postInterface';

@Component({
  selector: 'app-missiontec',
  templateUrl: './missiontec.component.html',
  styleUrls: ['./missiontec.component.css'],
})
export class MissiontecComponent implements OnInit {
  propiedades: propiedadesTitulo = {
    titulo: 'TECHNOLOGICAL MISSION',
    subtitulo:
      'The project will follow the project life cycle established by the NASA Systems Engineering Manual.',
    mapa: false,
  };
  infopostt: postEstructura[] = [
    {
      titulo: '',
      imagen: '',
      fecha: 'August, 2019',
      contenido: [
        {
          tipo: 'subtitulo',
          texto1: 'Monitoring and prevention:',
          texto2:
            'The project will follow the project life cycle established by the NASA Systems Engineering Manual. For each stage, there are multiple tasks and as the project progresses, different teams from different countries will get involved while the CFIA acts as the project management organization.',
          lista: [],
        },
        {
          tipo: 'imagen',
          texto1: 'cronograma.jpg',
          texto2: '',
          lista: [],
        },
        {
          tipo: 'texto',
          texto1:
            'Each institution involved will have a role according to the corresponding phase of the project, as shown in the diagram below.',
          texto2: '',
          lista: [],
        },
        {
          tipo: 'imagen',
          texto1: 'cronogramainstitution.jpg',
          texto2: '',
          lista: [],
        },
        {
          tipo: 'subtitulo',
          texto1: 'System-level design of the CubeSat',
          texto2:
            '',
          lista: [],
        },
        {
          tipo: 'imagen',
          texto1: 'missionpayloadsat.jpg',
          texto2: '',
          lista: [],
        },
        {
          tipo: 'orderlist',
          texto1:
            'From a systems architecture point of view, the satellite consists of 5 main subsystems.',
          texto2: '',
          lista: [
            [
              'Satellite bus, power and command:',
              'System dedicated to providing all the energy necessary for the operation of CubeSat, the mechanical structure that maintains the components and the command and telemetry functions that come from Earth.',
            ],
            [
              'Attitude control:',
              'this system necessary for the operation of the communication link; the satellite is configured to have an antenna that points at nadir.',
            ],
            [
              'Data transmission system:',
              'this is the system that will receive the information from the remote location and send it to the ground station in operation.',
            ],
            [
              'General Payload Management System:',
              'includes the on-board computer whose main task is the operation of the payload and communication system to receive the information from the remote stations, store it and send it to the ground stations.',
            ],
            [
              'Payload:',
              'The payload will be an SDR system capable of different communication experiments and a small camera for educational purposes.',
            ],
          ],
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
