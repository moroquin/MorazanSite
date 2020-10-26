export interface miembro {
  cargo: string;
  rol: string;
  nombre: string;
  correo: string;
  img: string;
  titulo: string;
  descripcion: string;
}

export interface institucion {
  nombre: string;
  logo: string;
  miembros: miembro[];
}

export interface infoEquipo {
  pais: string;
  bandera: string;
  instituciones: institucion[];
}
