/**
 * A continuación se describe la forma de imprimir los strings
 *
 * Para tipo texto un order list
 *     texto1 parrafo normal
 *     lista  se imprime una ul
 *     texto2 parrafo normal
 * Para tipo imagen
 *     texto1 es el nombre de la imagen
 *     texto2 es el alt
 * Para tipo cita
 *     texto1 es el texto de la cita
 *     texto2 es el nombre del autor
 * * Para tipo orderlist order list
 *     texto1 parrafo normal
 *     lista  se imprime una ol
 *     texto2 parrafo normal
 * Para subtitulo
 *     texto1 subtitulo 
 *     texto2 parrafo
 * Para lista 
 *   el primer array es un texto en negrita
 *   el segundo array es un texto normal
 * 
 *
 *
 */
export interface postContenido {
  tipo: 'texto' | 'imagen' | 'cita' | 'orderlist' | 'subtitulo';
  texto1: string;
  lista: string[][];
  texto2: string;
}

export interface postEstructura {
  titulo: string;
  imagen: string;
  fecha: string;
  contenido: postContenido[];
}

export interface postData{
    data: postEstructura[]
}