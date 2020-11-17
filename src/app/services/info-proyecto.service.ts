import { Injectable } from '@angular/core';
import { infoEquipo, miembro } from '../shared/interfaces/teamInterface';

@Injectable({
  providedIn: 'root',
})
export class InfoProyectoService {
  private logos: string[][];

  private infoEquipo: infoEquipo[];

  private getMemberCountry(ct: string): miembro[] {
    if (ct !== 'gt' && ct !== 'hn' && ct !== 'cr') {
      return this.infoEquipo
        .filter((item) => item.pais !== 'all')
        .flatMap((item) => item.instituciones.flatMap((item) => item.miembros));
    } else {
      return this.infoEquipo
        .filter((item) => item.pais === ct)
        .flatMap((item) => item.instituciones.flatMap((item) => item.miembros));
    }
  }

  getLogos(): string[][] {
    return this.logos;
  }

  getTeam(pais: string): miembro[] {
    return this.getMemberCountry(pais);
  }

  getContact(): infoEquipo[] {
    return this.infoEquipo;
  }

  constructor() {
    this.logos = [
      ['UNAH_Logo.jpg', 'https://www.unah.edu.hn/'],
      ['UCR_Logo.png', 'https://www.ucr.ac.cr/'],
      ['USAC_Logo.png', 'http://ingenieria.cunoc.usac.edu.gt/portal/'],
      ['CFIA-logo.jpg', 'http://cfia.or.cr/'],
      ['JAXA_Logo.png', 'https://global.jaxa.jp/'],
      ['Kyutceh-Logo.png', 'https://www.kyutech.ac.jp/english/'],
      ['SICA_Logo.png', 'https://www.sica.int/'],
      ['UNOOSA_Logo.png', 'https://www.unoosa.org/'],
      [
        'astracodex_Logo.png',
        'https://sites.google.com/astracodex.com/astra-codex/',
      ],
    ];

    this.infoEquipo = [
      {
        pais: 'hn',
        bandera: '',
        instituciones: [
          {
            nombre: 'Universidad Nacional Autónoma de Honduras ',
            logo: 'UNAH_Logo.jpg',

            miembros: [
              {
                cargo: 'Decano facultad de Ingeniería',
                rol: '  ',
                nombre: 'Eduardo Gross Muñoz',
                correo: 'eduardo.gross@unah.edu.hn',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
                descripcionresumen: '',
                representante: true,
                id: 1,
              },
              {
                cargo: 'Puesto funcional',
                rol: '  ',
                nombre: 'Prof. Fernando Zorto Aguilera ',
                correo: 'fernando.zorto@unah.edu.hn',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
                descripcionresumen: '',
                representante: true,
                id: 2,
              },

              {
                nombre: 'Javier Mejuto González',
                titulo: 'PhD.',
                correo: 'javier.mejuto@unah.edu.hn',
                descripcionresumen:
                  'Astrofísico y Astrónomo cultural. Jefe del Dpto. de Arqueoastronomía y Astronomía cultural, FACES-UNAH',
                descripcion: `▪Jefe del Departamento de Arqueoastronomía y Astronomía Cultural de la Facultad de Ciencias Espaciales de la Universidad Nacional Autónoma de Honduras.
▪Presidente del National Committee for Astronomy in Honduras
▪Co-Chair del IAU Working Group for Archaeoastronomy and Astronomy in Culture
▪Miembro de la International Society for Archaeoastronomy and Astronomy in Culture (ISAAC)
▪Miembro de la Sociedad Interamericana de Astronomía en la Cultura (SIAC)
▪Fellow de la European Society of Astronomy in Culture (SEAC)
▪Miembro de International Council on Monuments and Sites (ICOMOS) - Honduras`,
                rol: 'Scientific Mission',
                img: 'Javier-Mejuto.jpg',
                cargo: '',
                representante: true,
                id: 9,
              },
              {
                nombre: 'José Ernesto Wainwright Rueda',
                titulo: 'Estudiante de Ingenieria Mecanica Industrial',
                correo: 'josewainwright99@gmail.com',
                descripcionresumen:
                  '!Hola! Mi nombre es José Ernesto Wainwright Rueda, tengo 21 años. Soy estudiante de la carrera de Ingenieria Mecanica Industrial. Soy muy curioso con respecto a como funcionan las cosas.  Me gustan los motores, cohetes y temas relacionados con el Espacio. ',
                descripcion: ``,
                rol: 'Ground Station - ME-5',
                img: 'jose-wrainwright.jpg',
                cargo: '',
                representante: false,
                id: 21,
              },
              {
                nombre: 'Cristian Jeanluc Boquin Suazo',
                titulo: 'Pasante de ingeniería en sistemas',
                correo: 'cristianboquin@unah.hn',
                descripcionresumen: '',
                descripcion: `Cristian Jeanluc Boquin Suazo, nació el 23 de septiembre de 1996 en Tegucigalpa M.D.C
En el 2016 obtuve un titulo de técnico de sistemas automatizados y actualmente soy pasante de la carrera de ingeniería en sistemas.`,
                rol: 'Cubesat - SWE-4',
                img: 'jean-boquin.jpg',
                cargo: '',
                representante: false,
                id: 22,
              },
              {
                nombre: 'Ángel René Álvarez Banegas',
                titulo: 'Estudiante universitario',
                correo: 'anrealba9@gmail.com',
                descripcionresumen:
                  'Hondureño por nacimiento, 20 años de edad, estudiante de ingeniería en sistemas. Amante de la ciencia, la música y los deportes; disfruto divertirme y vivir la vida de una manera sana. ',
                descripcion: `Nací el 20 de julio del 2000 en Tegucigalpa, Francisco Morazán, pero viví en el municipio de El Porvenir, en el mismo departamento, hasta los 14 años, que fue cuando me mudé a la ciudad que me vio nacer para culminar mis estudios en el Instituto Salesiano San Miguel. Crecí en un hogar donde siempre se me inculcó la honestidad, el respeto y la integridad. Desde pequeño desarrollé un gusto por aprender cosas nuevas, lo que se vio reflejado en mi obtención temprana de la capacidad de leer, escribir y hacer operaciones aritméticas básicas, a los 4 años de edad. Actualmente, estoy culminando el cuarto año de ingeniería en sistemas, el gusto por las matemáticas y por crear “cosas” despertaron en mí el interés por la carrera que escogí. De no haber estudiado lo que estudio, hubiese optado por medicina. Me interesa despertar en cada joven centroamericando el deseo de ver más allá del horizonte, para que todos se planteen metas altas, y que además, las cumplan; ver a la región centroamericana siendo de primer mundo en unos años es uno de mis mayores anhelos, cosa que se puede lograr mediante la educación y la ciencia. Mis hobbies son: programar, resolver acertijos, jugar fútbol, jugar volleyball, ir al gym, tocar guitarra, bailar, y cualquier otro que implique la actividad física o mental. Me gustan las películas de ciencia-ficción y comedia; detesto las de terror. Sin más que decir, ¡Per áspera ad astra!`,
                rol: 'Cubesat - SWE-7',
                img: 'angel-alvarez.jpg',
                cargo: '',
                representante: false,
                id: 23,
              },
              {
                nombre: 'Misael Alberto Landero Martinez',
                titulo: 'Estudiante de Ingeniería en Sistemas',
                correo: 'misael.landero@unah.hn',
                descripcionresumen:
                  'Soy un estudiante de ingeniería en sistemas. Me gusta el diseño de sistemas, inteligencia artificial y la ciencia de datos.',
                descripcion: ``,
                rol: 'Cubesat - SWE-8',
                img: '',
                cargo: '',
                representante: false,
                id: 25,
              },
              {
                nombre: 'María José Anderson Solórzano',
                titulo: 'Estudiante de ingeniería civil',
                correo: 'maria.anderson@unah.hn',
                descripcionresumen: '',
                descripcion: ``,
                rol: 'Ground Station - CVE-2',
                img: 'maria-anderson.jpg',
                cargo: '',
                representante: false,
                id: 26,
              },
              {
                nombre: 'María Fernanda Pineda Reyes',
                titulo: 'Pasante de Ingeniería en Sistemas',
                correo: 'mfpineda@unah.hn',
                descripcionresumen:
                  'Soy originaria del departamento de Santa Bárbara, Honduras, tengo 22 años y soy pasante de la carrera de Ingeniería en Sistemas. ',
                descripcion: `Soy originaria del departamento de Santa Bárbara, Honduras, tengo 22 años y soy pasante de la carrera de Ingeniería en Sistemas. Entusiasta del desarrollo de software y la ciberseguridad. Trato de mantenerme aprendiendo cosas nuevas siempre, ya sea con cursos o leyendo. `,
                rol: 'Space-Ground - SWE-5',
                img: 'maria-pineda.jpg',
                cargo: '',
                representante: false,
                id: 29,
              },
              {
                nombre: 'Gabriela Nicolle Muñoz Enamorado',
                titulo: 'Pasante de ingeniería eléctrica ',
                correo: 'gmunoz@unah.hn',
                descripcionresumen:
                  'Mi nombre es Gabriela Muñoz, nací el 10 de febrero de 1997 en Tegucigalpa, Honduras. Soy técnico industrial en electricidad, soy estudiante de ingeniería eléctrica en la universidad nacional autónoma de Honduras, pertenezco a la selección universitaria de taekwondo, fui parte del circulo de creatividad de la facultad de ingeniería.  ',
                descripcion: `Mi nombre es Gabriela Nicolle Muñoz Enamorado, nací el 10 de febrero de 1997 en Tegucigalpa, Honduras. Soy egresada del instituto Técnico Honduras como técnico industrial en electricidad, actualmente estudio ingeniería eléctrica en la universidad nacional autónoma de Honduras, formo parte de la selección universitaria de taekwondo, llevo cinco años entrenado, he participado en varios eventos de taekwondo a nivel nacional y a nivel internacional como ser XVII juegos deportivos universitarios centroamericanos y del caribe en el 2019 realizados en Colombia, también participe  en una base de entrenamiento y seminario de taekwondo en UNAN-Managua a través de la facultad regional FAREM-Estelí en el 2019, Fui integrante del Circulo de creatividad de la facultad de ingeniería de la UNAH donde participe y fui voluntaria de muchas actividades como ser parte de  la comisión de edecanes del comité organizador del XXV congreso panamericano de ingeniería mecánica, eléctrica, industrial y ramas afines (COPIMERA) llevado a cabo en Honduras en el 2015, voluntariado que me dio la oportunidad de conocer grandes ingenieros que han llevado a cabo grandes proyectos y tener la oportunidad de conversar con ellos y ser parte de algunas de sus conferencias. También como miembro del circulo de creatividad se me dio la oportunidad de recibir talleres y cursos sobre innovación y creatividad. En el 2018 participe en la feria de experimentos de física general con un proyecto demostrativo sobre la transferencia de calor por convección. `,
                rol: 'Ground Station - EL-4',
                img: 'gabriela-munoz.jpg',
                cargo: '',
                representante: false,
                id: 31,
              },
              {
                nombre: 'Oscar Ronaldo Garcia Melgar',
                titulo: 'Universitario ',
                correo: 'oscaronaldo007@gmail.com ',
                descripcionresumen:
                  '-19/08/1999 -Estudiante de Astrofisica UNAH -Astrofisico por convicción, futbolista por pasión. -Amante de la física de altas energías  y el deporte. ',
                descripcion: `Nombre: Oscar Ronaldo Garcia Melgar
Nacimiento: 19 de agosto de 1999, en la ciudad de la Ceiba, Honduras.
Pasante de la Licenciatura en Astronomía y Astrofisica por la UNAH.
Ingrese a la universidad en 2016  a los 16 años de edad, apasionado por la Ciencia y los deportes, más en específico por la física de altas energías y el fútbol. Mi orientación en astrofisica es la Astrofisica extra-galactica y cosmologia. Actualmente Miembro del PROYECTO MORAZAN, y cursando las últimas clases de la carrera.


`,
                rol: 'Remote System 1 - AST-2',
                img: 'oscar-melgar.jpg',
                cargo: '',
                representante: false,
                id: 32,
              },
              {
                nombre: 'Christopher Gary Castillo Corrales',
                titulo:
                  'Estudiante de Licenciatura en Astronomía y Astrofísica ',
                correo: 'garycastilloc8@gmail.com ',
                descripcionresumen:
                  'Nací en Orocuina, Choluteca, el 8 de junio de 1998. Culminé el bachillerato en Tegucigalpa el 2014 y en 2015 entré a la UNAH, de 15 años. Resido en Tegucigalpa. ',
                descripcion: `Nací en Orocuina, Choluteca, el 8 de junio de 1998. Terminé la escuela en Tegucigalpa en la Lisandro Quesada el 2009. Culminé el bachillerato en Tegucigalpa en el colegio Héctor Pineda Ugarte en el 2014 y en 2015 entré a la UNAH, de 15 años, a estudiar la Licenciatura en Astronomía y Astrofísica (LAAF). En el año 2021 culminaré las clases de LAAF. Tengo 4 hermanos. Vivo con mis padres en Tegucigalpa. Toco la guitarra. Y tengo pasión por las matemáticas y la física. `,
                rol: 'Ground Station - AST-1',
                img: 'gary-castillo.jpg',
                cargo: '',
                representante: false,
                id: 33,
              },
              {
                nombre: 'Fabricio Alejandro Ortíz Morales',
                titulo: 'M.Sc. Ingeniería Estructural',
                correo:
                  'fabricio.ortiz@unah.edu.hn/moralesfabricio89@gmail.com',
                descripcionresumen:
                  'Docente en UNAH. Ingeniero Civil Máster en Ingeniería Estructural con 8 años de experiencia en la industria y 4 en docencia.',
                descripcion: `Docente Universitario en UNAH. Ingeniero Civil por la Universidad Católica de Honduras, Máster en Ingeniería Estructural por la Universidade Federal de Ouro Preto en Brasil, Auditor de Seguridad Vial por la Asociación Española de la Carretera, Diplomado en Emprendedurismo por el Departamento de Estado de los Estados Unidos, Diplomado en Gestión de la Calidad Total ISO 9001:2008. Profesional con 7 años de experiencia combinada en: gestión de proyectos, diseño, supervisión y construcción de obras y 4 años de experiencia en docencia universitaria a nivel de pre grado y pos grado. Lengua materna español y dominio total de los idiomas inglés y portugués, miembro de la American Society of Civil Engineers (ASCE SEI Institute), miembro del American Institute of Steel Construction (AISC), miembro del American Concrete Institute (ACI). Ex becario de la Organización de Estados Americanos (OEA), Ex becario del Departamento de Estado de los EEUU en el programa de Jóvenes Líderes de las Américas (YLAI), apasionado por la ciencia, el emprendedurismo, la investigación, la innovación, actividades al aire libre y el baile.`,
                rol: '',
                img: 'fabricio-ortiz.jpg',
                cargo: '',
                representante: false,
                id: 36,
              },
              {
                nombre: 'Diana Sofia Rosales Izaguirre',
                titulo: 'Estudiante de Ingenieria Mecanica Industrial',
                correo: 'diana.rosales@unah.hn',
                descripcionresumen:
                  'Estudiante de Ingeniería Mecánica Industrial de la Universidad Nacional Autónoma de Honduras.  Amante del área aeroespacial.',
                descripcion: `Estudiante de Ingeniería Mecánica Industrial de la Universidad Nacional Autónoma de Honduras.  Amante del área aeroespacial. Apasionada por la naturaleza, el arte y la lectura. Mi objetivo como ingeniera es hacer uso de la ciencia y de la tecnología para crear proyectos que beneficien a la sociedad e impacten positivamente la vida de las personas. `,
                rol: 'Cubesat - ME-6',
                img: 'diana-rosales.jpg',
                cargo: '',
                representante: false,
                id: 47,
              },
            ],
          },
        ],
      },

      {
        pais: 'gt',
        bandera: '',
        instituciones: [
          {
            nombre:
              'Universidad de San Carlos de Guatemala / Centro Universitario de Occidente ',
            logo: 'USAC_Logo.png',

            miembros: [
              {
                cargo: 'Rector Universidad de San Carlos',
                rol: ' ',
                nombre: 'Murphy Olympo Paíz Recinos',
                correo: '',
                img: 'murphy-paiz.jpg',
                titulo: 'Msc. ',
                descripcion: '  ',
                descripcionresumen: '',
                representante: true,
                id: 3,
              },
              {
                cargo: 'Director división de Ingeniería',
                rol: '  ',
                nombre: 'Victor Carol Hernández ',
                correo: 'hernandez.victor@usac.edu.gt',
                img: 'victor-hernandez.jpg',
                titulo: 'Prof. ',
                descripcion: '  ',
                descripcionresumen: '',
                representante: true,
                id: 3,
              },
              {
                cargo: 'Coordinador Ing. en Sistemas',
                rol: '  ',
                nombre: 'Oliver Ernesto Sierra Pac ',
                correo: 'sierra.oe@usac.edu.gt',
                img: 'oliver-sierra.jpg',
                titulo: 'Prof. ',
                descripcion: '  ',
                descripcionresumen:
                  'Ing. en ciencias y sistemas. Originario de Quetzaltenango, Guatemala. Le gusta aprender',
                representante: true,
                id: 4,
              },

              {
                nombre: 'Edgar Estuardo Escobar Alonzo',
                titulo: 'Pensum cerrado - Ingeniería mecánica',
                correo: 'edgarescobar201530269@cunoc.edu.gt',
                descripcionresumen:
                  'Estudiante de la carrera de Ingeniería Mecánica. Apasionado del diseño mecánico y de las tecnologías disruptivas.',
                descripcion: `Edgar es un joven que se encuentra en la etapa final de la carrera universitaria de Ingeniería Mecánica, posee gran capacidad de razonamiento para la solución de problemas, optimizando los recursos y buscando la mejora continua permanente. Considera el trabajo en equipo como vital en el logro de objetivos que propicien
el desarrollo. Co-fundador de la primera sección estudiantil ASME (The American Society of Mechanical Engineers) en Guatemala y Representante de Guatemala en ASME Student Regional Team Caribbean & Latin America. `,
                rol: 'CubeSat - ME-8',
                img: 'edgar-escobar.jpg',
                cargo: '',
                representante: false,
                id: 24,
              },
              {
                nombre: 'Christian Andrés Acajabón Rivera',
                titulo: 'Pensum cerrado ingeniería electrónica ',
                correo: 'christianacajabon@gmail.com',
                descripcionresumen:
                  'Soy originario de Santo Tomas Milpas Altas, Sacatepéquez. Tengo 26 años. Premio al liderazgo universitario en 2019. ',
                descripcion: `Nací el 12 de mayo de 1994 en Antigua Guatemala, actualmente tengo 26 años. Apasionado desde niño a buscar el -por qué- de las cosas, con una curiosidad por tratar de entender como funciona el mundo que me rodea. Desde los 14 años empiezo a relacionarme con el mundo de la electrónica, donde mi principal área de interés fue la programación y la electrónica digital. Trabaje en una empresa de Telecomunicaciones que me permitió desarrollarme en programación de equipos de esa rama de la ingeniería. Dentro de la universidad participe en proyectos que obtuvieron reconocimientos y quizás el mas importante fue el diseño, programación y fabricación de un robot explorador que me permitió junto con mi equipo a ganar el primero lugar de la competencia dentro de la facultad y el espacio para representar a la Facultad de ingeniería y a Guatemala en el Mercury Robotic Challenge 2019 realizado en Bogotá, Colombia. Donde obtuvimos el sexto puesto frente a mas de 15 equipos de diferentes paises. Creyente cristiano católico. `,
                rol: 'Space-Ground - TE-1',
                img: 'christian-acajabon.jpg',
                cargo: '',
                representante: false,
                id: 27,
              },
              {
                nombre: 'Nery Iván Pérez Morales',
                titulo: 'Licenciatura',
                correo: 'neryperezm@hotmail.com',
                descripcionresumen:
                  'Docente de La División de Ciencias de La Ingeniería desde el año 2000,  Especialista en Ingeniería Vial, Geotécnia y Topografía, colaborador en varios poryectos de La Universidad de San Carlos de Guatemala.',
                descripcion: `Nacido en la Ciudad de Guatemala, Dibujante Calculista a nivel medio,  Ingeniero con espacialidad en Vías terrestres, Mecánica de Suelos, Geología, Hidrología y topografía, Graduado de La Universidad  de San Carlos de Guatemala, con La Maestria de Ingeniería Vial pendiente de graduación, con un psot grado en GIRH, Gestión Integral de Recurso Hídrico.  Actuelmente docente de La Divisón de Ciencias de La Ingeniería, desempeñando el puesto operativo de Coordinador de Carrera de Ingeniería Civil.`,
                rol: '',
                img: 'nery-perez.jpg',
                cargo: '',
                representante: false,
                id: 28,
              },
              {
                nombre: 'Gerardo Alexander Batz Poroj',
                titulo: 'Bachiller industrial y Perito en electrónica Digital',
                correo: 'gerardoalexander-batzporoj@cunoc.edu.gt',
                descripcionresumen:
                  'Gerardo A. Batz P. estudiante de la carrera de Ingeniería Mecánica en USAC-CUNOC, nacido del 1 de septiembre de 1998 en la ciudad de Quetzaltenango, Guatemala. ',
                descripcion: `Gerardo Alexander Batz Poroj  actualmente estudiante de la carrera de Ingeniería Mecánica en USAC-CUNOC, nacido el 1 de septiembre de 1998 en la ciudad de Quetzaltenango, Guatemala. Desde muy pequeño le llamó la atención la ingeniería por lo mismo se inclino por estudiar una de ellas, estudió bachiller industrial y perito en electrónica digital en la etapa de diversificado, fue participante de competencias entre colegios realizadas por distintas organizaciones en la cuales median las habilidades que a lo largo de la carrera se obtenían. En la etapa universitaria se inclinó por la carrera de ingeniería mecánica por el complemento que puede tener con la electrónica digital, miembro del equipo ganador del primer concurso de misiones espaciales CANSAT de la división de ciencias de la ingeniería, fue colaborador en Proyectos USAC - CUNOC contra el covid-19 en el año 2020.`,
                rol: 'Remote System 1 - ME-2',
                img: 'gerardo-batz.jpg',
                cargo: '',
                representante: false,
                id: 30,
              },
              {
                nombre: 'Abraham Josué Fuentes López. ',
                titulo: 'pensum cerrado de ingeniería Civil. ',
                correo: '',
                descripcionresumen: '',
                descripcion: ``,
                rol: 'Scientific Mission',
                img: 'abraham-fuentes.jpg',
                cargo: '',
                representante: false,
                id: 35,
              },
              {
                nombre: 'Jose Daniel Antón',
                titulo:
                  'Bachiller en ciencias y letras con orientación en computación',
                correo: 'jdanton2598@gmail.com',
                descripcionresumen:
                  'Daniel Antón, Estudiante de Ingeniería en ciencias y sistemas en CUNOC-USAC.........................',
                descripcion: `Jose Daniel Antón Estudiante de ingeniería en ciencias y sistemas, en el Centro Universitario de Occidente de la Universidad San Carlos de Guatemala. Nació el 25 de octubre de 1,998 en la ciudad de Quetzaltenango, Guatemala. Se graduó de bachiller en ciencias y letras con orientación en computación. 
Proyectos realizados:
- Codesarrollador de lenguaje -Koky-, como herramienta educativa con enfoque a escuelas públicas en donde niños cuya lengua materna es el idioma K-iche- 
  tengan acceso al aprendizaje básico sobre programación, utilzando idiomas K-iche-, español e inglés.
- Coordinador del equipo -Luftwaffe- el cual participó en el concurso de misiones espaciales CanSat 2019, el cual consistió en el desarrollo de un CanSat, cumpliendo con parámetros establecidos y la misión específica para el cual fue creado. Obteniendo el primer lugar.
- Perteneció al equipo de proyectos CUNOC-USAC contra Covid-19 como programador de sensores para un sistema de alarma audio-visual para informar al médico encargado cuando la temperatura o el pulso del paciente fueran anormales.
Proyectos Actuales:
- Participante en el desarrollo de dispositivos hidrometeorológicos para el proyecto -Morazan-`,
                rol: 'Remote System 1 - SWE-1',
                img: 'daniel-anton.jpg',
                cargo: '',
                representante: false,
                id: 37,
              },
              {
                nombre: 'Helmuth Alexander Luther Montejo',
                titulo: 'Bachiller',
                correo: 'alexanderluther08@gmail.com',
                descripcionresumen:
                  'Bachiller Industrial y Perito en Electrónica. Estudiante de Ingeniería en Ciencias y Sistemas en el CUNOC-USAC.',
                descripcion: `Nació un 8 de junio de 1998 en el municipio de Quetzaltenango, ilustremente denominado -La Cuna de la Cultura-, perteneciente al departamento de Quetzaltenango, Guatemala.  Hijo de Helmuth Luther y Guillermina Montejo, es el primogénito de este núcleo familiar.  

Desde pequeño demostraba tener gran interés acerca funcionamiento de las cosas, era un niño parlanchin y lleno de preguntas acerca del mundo, ningún juguete tardaba demasiado tiempo puesto que siempre los desarmaba para ver que tenían por dentro. 

A la edad de 5 años ingresa al colegio Santo Domingo Savio(2003) y empieza su vida estudiantil en el nivel pre-primario, específicamente en el Kinder, siendo un alumno destacado, aunque bastante travieso.

En el año 2009 ingresa al colegio Juan Francisco Alfaro Mijangos para continuar con sus estudios respectivos a 5to año del nivel primario.

En el año 2012 ingresa al colegio San Francisco de Asis, donde curso desde el 2do año de educación del ciclo básico hasta el 3ro, posteriormente  se gradúa del nivel Básico.

Durante los años previos al ingreso al nivel de educación diversificado nació en el un gran interés acerca de la electrónica por lo cual en el año 2014 ingresa al colegio Tecnológico Don Bosco a la carrera de Electrónica. Siendo un estudiante consistente, aplicado y destacado obtiene el titulo de Bachiller Industrial y Perito en Electrónica en el año 2016.

Con mucho esfuerzo y dificultades en el camino ingresa en el año 2017 a la carrera de Ingeniería en Ciencias y Sistemas de la División de Ciencias de la Ingeniería del Centro Universitario de Occidente(CUNOC) de la Universidad de San Carlos de Guatemala(USAC).

Actualmente ha cerrado el 6to semestre de la carrera. `,
                rol: 'Remote System 1 - SWE-2',
                img: 'helmuth-luther.jpg',
                cargo: '',
                representante: false,
                id: 38,
              },
              {
                nombre: 'José Rodolfo Zuñiga Barillas',
                titulo: '',
                correo: 'Jrzelectronics@gmail.com',
                descripcionresumen:
                  'Estudiante de octavo semestre de ingeniería electrónica e ingeniería eléctrica. Entusiasta, comprometido, perseverante y un aficionado del campo espacial. ',
                descripcion: `Actualmente es estudiante de ingenieria electrónica y eléctrica, en el octavo semestre. Ha sido auxiliar de cursos de la escuela de mecánica eléctrica tales como: introducción a la programación y computación, electricidad y electrónica básica y eléctrica 2. Bilingüe y actualmente aprendiendo el idioma coreano. Desde pequeño siempre ha sido un admirador del espacio y proyecto Morazán será una ayuda para cumplir uno de sus más grandes sueños. `,
                rol: 'Ground Station - EL-3',
                img: 'jose-zuniga.jpg',
                cargo: '',
                representante: false,
                id: 39,
              },
              {
                nombre: 'Walter Gabriel Alexander Estupinian Cifuentes',
                titulo: 'Bachiller en computación con orientación científica ',
                correo: 'wgabalexander@ieee.org',
                descripcionresumen:
                  'Gabriel Estupinian, estudiante con pénsum cerrado de la carrera de Ingeniería Electrónica en la USAC',
                descripcion: `Walter Gabriel Alexander Estupinian Cifuentes, nacido en la Antigua Guatemala el 29 de junio de 1996, hijo de Angelica Cifuentes y Walter Estupinian. Graduado de bachiller en computación con orientación científica en el Colegio Bilingüe San Lucas, estudiante de Ingeniería Electrónica de la Universidad de San Carlos de Guatemala USAC con cierre de pénsum. En sus años de estudiante de la carrera universitaria ha participado en diversas competencias de robótica tanto a nivel nacional como internacional, entre las cuales se puede mencionar el Mercury Robotics Challenge Colombia en la que junto a su equipo obtuvieron el primer puesto en el 2018 con el robot XplorerGT. Miembro activo del Instituto de Ingenieros Eléctricos y Electrónicos IEEE, participando como voluntario en la rama estudiantil de IEEE de la USAC, dentro de la organización colaboro en diversos proyectos y actividades humanitarias como lo son el proyecto Smart Seed Bed y Comapa Water Well, ademas ejerció el cargo de presidente del comité organizador de la XIV feria de la tecnología de IEEE en el 2017, presidente la rama estudiantil en el año 2018 y presidente del capitulo estudiantil de robótica y automatización en el año 2019. Ha participado en diversos congresos y seminarios en Guatemala, Honduras, Costa Rica y Panamá, así como haber ejercido el puesto de vice presidente del comité organizador del congreso estudiantil conmemorativo por los 50 años de la Escuela de Ingeniería Mecánica Eléctrica EIME de la USAC en el 2018. En los años 2018 y 2019 laboro como auxiliar en la Universidad  para el curso de Instrumentación Eléctrica y de los laboratorios de Comunicaciones 1 y Robótica, también formo parte del equipo organizador de Expolab, exposición que busca mostrar los mejores proyectos de los laboratorios de electrónica de la facultad de ingeniería, así como de la competencia de vehículos exploradores en la que se seleccionan a los equipos representantes de la Universidad en el Mercury Robotics Challenge Colombia del siguiente año. En la facultad de ingeniería participo en diversas ocasiones impartiendo talleres de introducción a redes de computadoras para los estudiantes de el curso de practicas iniciales de la carrera de ingeniería en sistemas, colaboro en diversas ocasiones en la feria INFOUSAC y en el 2019 obtuvo el reconocimiento al liderazgo universitario. Aficionado al deporte extremo 4x4, los jeeps las actividades recreativas en la naturaleza, así como el cielo y el espacio.  Integrante del equipo multidisciplinario que desarrollara el primer satélite centroamericano, conocido como el proyecto Morazan. `,
                rol: 'Remote System 1 - EL-1',
                img: 'gabriel-stupinian.jpg',
                cargo: '',
                representante: false,
                id: 40,
              },
              {
                nombre: 'Brayam Steven García Tirado',
                titulo:
                  'Pensum cerrado de Ingeniería Civil y Séptimo Semestre de Ingeniería Mecánica  ',
                correo: 'brayam3.d@gmail.com',
                descripcionresumen:
                  'Soy Brayam Steven García Tirado de 22 años, Tengo pensum cerrado en ingeniería civil y estudio la carrera de Ingeniería Mecánica cursando el 7mo. semestre en la universidad CUNOC/USAC. Uno de mis objetos es ser un emprendedor en el futuro y así poder ayudar a muchas personas.',
                descripcion: `Mi nombre es Brayam Steven García Tirado tengo 22 años, nací en Quetzaltenango, Guatemala el 7 de agosto del año 1998. Desde la niñez vivo en Aldea Agua Tibia, San Juan Ostuncalco, Quetzaltenango. Realice mis estudios de nivel primaria en los colegios:  Fátima, Nueva Era y Kairos en el municipio de San Juan Ostuncalco, el nivel básico y diversificado lo estudie en la cabecera departamental de Quetzaltenango en el Colegio DR. Rodolfo Robles, graduándome y obteniendo el título de Bachillerato en Ciencias y Letras. Inicie mis estudios universitarios en el año 2016 en el Centro Universitario de Occidente (CUNOC) extensión de la Universidad San Carlos de Guatemala, en la División de Ciencia de la Ingeniería, en la carrera de Ingeniería Civil obteniendo el pensum cerrado en el año 2020 y en este momento sigo estudiando la carrera de Ingeniería Mecánica cursando el séptimo semestre. Me gusta el profesionalizarme en diferentes áreas, en el año 2019 obtuve el certificado de técnico en Reparador de electrodomésticos y receptores de radio y televisión, en el Instituto Técnico de Capacitación (INTECAP).
Mis objetivos actuales es obtener mi titulo de Ingeniero Civil y seguir profesionalizándome en la División de Ciencias de la Ingeniería para obtener mi titulo de Ingeniero Mecánico. Para desempeñarme en mi vida propia profesionalmente, consiguiendo así ser una persona coherente logrando lo que deseo para estar entre los mejores siguiendo los pasos de mis padres, siendo un emprendedor en el futuro y así poder ayudar a muchas personas.
Me considero una persona participativa, ingenioso y exigente. Me gusta investigar sobre acontecimientos históricos científicos y tecnológicos; estudiar diferentes programas de diseño para estructuras civiles y de máquinas. 
`,
                rol: 'Scientific Mission',
                img: 'bryan-garcia.jpg',
                cargo: '',
                representante: false,
                id: 41,
              },
              {
                nombre: 'Orlando César Enrique Ramos Castañón',
                titulo: 'Bachiller en Ciencias y Letras',
                correo: 'orlando.ram37@gmail.com',
                descripcionresumen:
                  'Estudiante del décimo semestre de la carrera de Ingeniería Mecánica y sexto semestre de Ingeniería Industrial',
                descripcion: ``,
                rol: 'Ground Station - ME-4',
                img: 'orlando-castanon.jpg',
                cargo: '',
                representante: false,
                id: 42,
              },
              {
                nombre: 'Lilizbeth Amayrany Salpor López',
                titulo: 'Decimo semestre ingenieria civil',
                correo: 'amayranysalporlopez@gmail.com',
                descripcionresumen:
                  'Amayrany Salpor de 24 años de edad originaria del municipio de Panajachel del departamento de Sololá, es estudiante del décimo semestre de ingeniería civil en el Centro Universitario de Occidente (CUNOC – USAC). En el transcurso de la carrera ha desarrollado gran interés por el área de aguas que ofrece el pensum, siendo así como ha ido incursionado en el tema de gestión integral de cuencas hidrográficas. Ha sido parte de agrupaciones estudiantiles representando a la División de Ciencias de la Ingeniería; demostrando gran entusiasmo, dedicación y compromiso por el trabajo en equipo y por el aprendizaje constante. ',
                descripcion: `Lilizbeth Amayrany Salpor López nació el 31 de mayo de 1996, Sololá, Guatemala.
Realizando sus estudios a nivel primario en la Escuela Oficial Urbana Mixta “Central”, nivel básico en el Instituto Nacional de Educación Básica “Abraham Lincoln” y el nivel diversificado en la Escuela en Ciencias de la Computación, graduándose de Bachiller en Computación con Orientación Científica.  

En el ámbito deportivo fue reconocida como atleta destacada del departamento de Sololá en natación competitiva, así mismo participante de la travesía al Lago Atitlán en diferentes ocasiones.

El vivir en Panajachel fue de gran influencia al querer buscar la preservación y cuidado del lago Atitlán, participando en voluntariados en reciclaje y reforestación. Este municipio es evaluado de alto riesgo por los fenómenos naturales que se han presentado en el transcurso del tiempo, la suma de estos factores hizo que buscará cursar una carrera científica para en un futuro apoyar ante estas amenazas.

Dando inicio a su carrera universitaria en el 2015, ingresando a la carrera de ingeniería civil en el Centro Universitario de Occidente, demostrando entusiasmo por el área de aguas del pensum, buscando forjar conocimientos acerca de cuencas hidrográficas. 

Estuvo involucrada en la organización de congresos y talleres en la división de ciencias de la ingeniería. En el 2019 formó parte de la directiva del Capitulo estudiantil ACI- CUNOC, siendo reconocidos por ACI Internacional con el premio Excellent University 2019.
`,
                rol: 'Scientific Mission',
                img: 'lilizbeth-salpor.jpg',
                cargo: '',
                representante: false,
                id: 43,
              },
              {
                nombre: 'Jaime Salvador Pineda Paz',
                titulo: 'Estudiante de ingeniería electrónica',
                correo: 'Jspp1995@gmail.com',
                descripcionresumen:
                  'Un apasionado por la electrónica, la automatización y actuadores de potencia, entre otras cosas, me gusta fusionar mis conocimientos de la electrónica con distintas areas de trabajo, entre mas contrastante sea el area mas llamara mi atencion.',
                descripcion: `Desde muy pequeño me llamaba la atención la ingeniería, empezando mi exploración con la mecánica, dado a mi corta edad en ese momento, mis proyectos empezaron con legos alentando mi creatividad para resolver y aprender, con forme fui creciendo los legos cambiaron por herramientas mas grandes, poco a poco fui descubriendo el mundo de la electrónica, adquiriendo nuevos conocimientos y posteriormente aplicándolos en proyectos personales y de investigación en campos demasiado contrastantes a mi carrera, como lo es la agricultura, la educación, salud, y el diseño mecánico de distintos actuadores, con el fin de apoyar un poco en el ámbito social y promover la curiosidad científica en otras personas, de esta manera hacer crecer el área de investigación y desarrollo de proyectos en mi comunidad.`,
                rol: 'CubeSat - EL-5',
                img: 'jaime-pineda.jpg',
                cargo: '',
                representante: false,
                id: 44,
              },
              {
                nombre: 'Sofía Alejandra Quintana Gutiérrez ',
                titulo: 'Bachiller',
                correo: 'sofiaquintana2@gmail.com',
                descripcionresumen:
                  'Apasionada por los animales, la naturaleza, el cosmos, los videojuegos, la tecnología, y sobre todo por aprender.',
                descripcion: `Nacida en el departamento de San Marcos un 20 de abril de 1998, una pequeña niña que durante su crecimiento aprendió a amar y respetar la naturaleza y el cosmos. Desde pequeña se acostumbró a participar en actividades de todo tipo, pasando desde el canto, dibujo y baile, hasta competencias de conocimiento en matemática e historia.

Siempre demostró tener habilidades e interés por la tecnología, lo cual hizo que soñara algún día con crear sus propios videojuegos pero sobre todo por estudiar y entender el funcionamiento del espacio exterior. Sin embargo, estos sueños la convirtieron en un bicho raro ante los ojos del resto de personas, por lo que en su adolescencia se volvió introvertida y misteriosa, lo que la hizo tomar decisiones equivocadas y caminos peligrosos con tal de recibir aceptación de la sociedad.

Al momento de iniciar la carrera de ingeniería en ciencias y sistemas, en el Centro Universitario de Occidente de la Universidad de San Carlos su vida dio un giro de 180 grados, cambiando de una manera radical su forma de pensar y actuar. Se dio cuenta de que las opiniones y prejuicios no debían interferir en sus sueños, y le dio gracias al cosmos por lo que fue, ya que si algo ínfimo no hubiera ocurrido durante todo el proceso nunca se hubiese convertido en la mujer que es. Y es así como surge un nuevo objetivo, el ser una inspiración e incentivo para otras mujeres que por los prejuicios de la sociedad han hecho a un lado sus más locos sueños.`,
                rol: 'Space-Ground - SWE-3',
                img: 'sofia-quintana.jpg',
                cargo: '',
                representante: false,
                id: 45,
              },
              {
                nombre: 'Jefrey René Hipp Méndez',
                titulo: 'Estudiante de Ingeniería Electrónica',
                correo: 'jefreyhipp@gmail.com',
                descripcionresumen:
                  'Jefrey Hipp es un estudiante de la carrera de Ingeniería Electrónica en la Universidad de San Carlos de Guatemala, USAC.',
                descripcion: `Jefrey René Hipp Méndez nació en la Ciudad de Guatemala el 29 de abril de 1997. La historia de su infancia, adolescencia y parte de su juventud tuvo lugar en la Ciudad de Guatemala, ya que a sus 20 años de edad se trasladó hacia San Lucas, Sacatepéquez, donde reside actualmente. Desde muy temprana edad se ha caracterizado por ser una persona muy curiosa, creativa y soñadora. Realizó sus estudios escolares, desde la educación pre-primaria hasta la educación media, en el Colegio Lehnsen Roosevelt, donde obtuvo el título de “Bachillerato en Ciencias y Letras con orientación en Computación”, periodo durante el cual recibió premios como “Galardón de la Riva a la Excelencia Estudiantil”, otorgada por Industrias de la Riva, y la medalla “Más allá del Deber”, otorgada por la Municipalidad de Guatemala. Su alto interés por la investigación, experimentación y tecnología, lo condujo a continuar sus estudios en el campo de la ingeniería, específicamente en la carrera de ingeniería electrónica, en la Universidad de San Carlos de Guatemala (USAC). Actualmente es estudiante de dicha carrera, con pensum cerrado y desarrollando su trabajo final de grado. Durante su trayectoria universitaria, recibió por cuatro años consecutivos el “Premio a la excelencia académica” en la rama de Ingeniería Electrónica, USAC. Además ha tenido la oportunidad de trabajar en diversos proyectos y programas dentro de que lo que se destaca el desarrollo del proyecto “Cama de prueba de estrés para estructuras”, en la Escuela de Ciencias Físicas y Matemáticas (ECFM), USAC, participación al “XXV Programa de Verano de la Ciencia” de la Universidad de Guanajuato, México y participación al programa “Seeds For the Future”, organizado por Huawei. Por último, ha tenido la oportunidad de expandir sus conocimientos en el campo laboral en el área de automatización de sistemas de audio y video (AVS) en Isertec, Guatemala. `,
                rol: 'CubeSat - EL-6',
                img: 'jeffry-hipp.jpg',
                cargo: '',
                representante: false,
                id: 46,
              },
              {
                nombre: 'Cinthia Gabriela Barreno Rojas',
                titulo:
                  'Bachiller en Ciencias y Letras con Orientación en Computación y Énfasis en Ciencias Exactas',
                correo: 'cgabriela.br@gmail.com',
                descripcionresumen:
                  'Cinthia Gabriela Barreno Rojas, guatemalteca, nací en la ciudad de Quetzaltenango el 5 de abril de 1999. Estudiante de ingeniería industrial e ingeniería mecánica.',
                descripcion: `Mi nombre es Cinthia Gabriela Barreno Rojas, soy guatemalteca, nací en la ciudad de Quetzaltenango el 5 de abril de 1999. Soy Bachiller en Ciencias y Letras con Orientación en Computación y Énfasis en Ciencias Exactas, egresada del Instituto de Estudios Avanzados de Occidente (IEA), Quetzaltenango. Actualmente soy estudiante de la carrera de Ingeniería Industrial y estudiante de la carrera de Ingeniería mecánica de la Universidad de San Carlos de Guatemala, Centro Universitario de Occidente. Me gusta participar en múltiples actividades académicas y extracurriculares que me hagan crecer como persona y profesional. Soy una persona comunicativa que trata de mantener relaciones interpersonales estables, procurando a su vez que todo lo hecho sea exitoso y a la perfección. Me gusta pasar tiempo con mi familia y amigos, considero ser una persona a la que le gusta contribuir con el crecimiento de las personas que me rodean. 
Desde 2017, año en el que ingresé a la universidad, participé en la organización de los diferentes congresos llevados a cabo por la División de Ciencias de la Ingeniería del Centro Universitario de Occidente. En el periodo 2018-2019 formé parte de la Junta Directiva y Ejecutiva de la Asociación de Estudiantes de Ingeniería de Occidente (AEIO), desempeñando el puesto de Secretaria de Relaciones Públicas. En el año del 2019 fui parte del equipo organizativo del congreso llamado 4ta Revolución Industrial CUNOC 2019 y de la Jornada Académica CUNOC 2019. En el año 2020 tuve colaboración en el Proyecto USAC-CUNOC contra el COVID-19, participando en el armado de cajas de intubación y en el desarrollo del respirador artificial K’aslemal que sigue en proceso. Además de estar en proceso también la creación del primer capítulo Estudiantil IISE –Instituto de Ingenieros Industriales y de Sistemas de Guatemala- de Guatemala, donde desempeñare el cargo de vicepresidenta. Actualmente tengo participación en el proyecto Morazán que consta del lanzamiento del primer satélite en colaboración centroamericana, con la finalidad de alerta temprana a desastres naturales en países Centro Americanos –Guatemala, Costa Rica y Honduras-. `,
                rol: 'Remote System 1 - ME-1',
                img: 'cinthia-barreno.jpg',
                cargo: '',
                representante: false,
                id: 48,
              },
              {
                nombre: 'Luis Angel Lopez Cardenas',
                titulo: 'Bachiller',
                correo: 'luiscar2000000@gmail.com',
                descripcionresumen:
                  'Estudiante de ingeniería mecánica en CUNOC/USAC. Apasionado por la tecnología y la ciencia aplicada.',
                descripcion: `Nací el 10 de abril del año 2000. Soy estudiante de ingeniería mecánica, fiel creyente de que la ingeniería tiene un gran potencial para cambiar la vida de muchas personas y que es la herramienta perfecta para convertir ideas en realidad.

He participado en distintos proyectos a lo largo de mi vida estudiantil. En el año 2019 participé en el concurso de misiones espaciales de occidente junto a un equipo multidisciplinario con el proposito de crear un -CanSat-.
En el año 2020, ante la pandemia provocada por el virus COVID-19, trabajé junto a varios compañeros universitarios en el desarrollo de dos proyectos para combatir la pandemia; específicamente el desarrollo de cajas para el proceso de intubación a afectados por el virus así como un ventilador mecánico bajo el nombre de -K´aslemal-.

Actualmente participo en el proyecto morazán, colaborando con el desarrollo de los dispositivos en tierra para lectura de datos relevantes a la prevención de desastres naturales.`,
                rol: 'Remote System 1 - ME-3',
                img: 'luis-lopez.jpg',
                cargo: '',
                representante: false,
                id: 49,
              },
            ],
          },
        ],
      },
      {
        pais: 'cr',
        bandera: '',
        instituciones: [
          {
            nombre: 'Universidad de Costa Rica ',
            logo: 'UCR_Logo.png',

            miembros: [
              {
                cargo: 'Puesto funcional',
                rol: '  ',
                nombre: 'María Jose Molina ',
                correo: 'maria.molinamontero@ucr.ac.cr',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
                descripcionresumen: '',
                representante: true,
                id: 5,
              },

              {
                nombre: 'Valeria Sánchez Varela',
                titulo: 'Inge',
                correo: 'valeria.sanchezvarela@ucr.ac.cr',
                descripcionresumen:
                  '¡Hola a todos! Mi nombre es Valeria Sánchez Varela, soy una joven apasionada por la ciencia y tecnología. Actualmente soy estudiante avanzada de la carrera Licenciatura en Ingeniería Química en la Universidad de Costa Rica. Allí me desempeño como asistente de investigación en el Centro de Electroquímica y Energía Química y en la Regencia Química. En el año 2016, fui invitada honorífica al lanzamiento del satélite GOES-R bajo la dirección de Sandra Cauffman, ingeniera costarricense en NASA. En el Proyecto Morazán, colaboro en el área del análisis térmico del CubeSat. Espero que mi aporte en este proyecto tan bello, no sea únicamente desde un aspecto académico, sino que muchas niñas me vean y se motiven a seguir esforzándose por lograr sus metas y sus sueños, por más locos que estos suenen. ',
                descripcion: `(sería mejor adjuntar el CV)`,
                rol: 'CubeSat - CE-1',
                img: 'valeria-sanchez.jpg',
                cargo: '',
                representante: false,
                id: 34,
              },
            ],
          },
          {
            nombre: 'Colegio Federado de Ingenieros y Arquitectos ',
            logo: 'CFIA-logo.jpg',

            miembros: [
              {
                cargo: 'Puesto funcional',
                rol: '  ',
                nombre: 'Carlos Enrique Alvarado Briseño ',
                correo: 'calvaradob@cfia.or.cr',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
                descripcionresumen: '',
                representante: true,
                id: 6,
              },
              {
                cargo: 'Puesto funcional',
                rol: '  ',
                nombre: 'Moacir Fonseca Becker ',
                correo: 'mfonseca@cfia.or.cr',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
                descripcionresumen: '',
                representante: true,
                id: 7,
              },
            ],
          },
          {
            nombre: 'Astra Codex ',
            logo: 'astracodex_Logo.png',

            miembros: [
              {
                cargo: 'Puesto funcional',
                rol: 'Consultor Técnico de la Misión',
                nombre: 'Luis Diego Monge Solano ',
                correo: 'Luis.monge@astracodex.com',
                img: '',
                titulo: 'Prof. ',
                descripcion: '  ',
                descripcionresumen: '',
                representante: true,
                id: 8,
              },
            ],
          },
        ],
      },
    ];
  }
}
