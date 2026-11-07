
export function calcularPromedio(calificaciones) {
  if (!Array.isArray(calificaciones) || calificaciones.length === 0) {
    throw new Error('Debes proporcionar una lista de calificaciones');
  }

  if (calificaciones.some(nota =>
    typeof nota !== 'number' || !Number.isFinite(nota) || nota < 0 || nota > 10
  )) {
    throw new Error('Las calificaciones deben estar entre 0 y 10');
  }

  const suma = calificaciones.reduce((total, nota) => total + nota, 0);
  return suma / calificaciones.length;
}

export function obtenerCalificacionMayor(calificaciones) {
  validarLista(calificaciones);
  return Math.max(...calificaciones);
}

export function obtenerCalificacionMenor(calificaciones) {
  validarLista(calificaciones);
  return Math.min(...calificaciones);
}

export function aprobo(calificacion, minima = 7) {
  validarNota(calificacion);
  validarNota(minima);
  return calificacion >= minima;
}

export function obtenerEstado(calificacion) {
  validarNota(calificacion);
  return calificacion >= 7 ? 'Aprobado' : 'Reprobado';
}

function validarLista(calificaciones) {
  if (!Array.isArray(calificaciones) || calificaciones.length === 0) {
    throw new Error('La lista no puede estar vacía');
  }

  calificaciones.forEach(validarNota);
}

function validarNota(nota) {
  if (typeof nota !== 'number' || !Number.isFinite(nota) || nota < 0 || nota > 10) {
    throw new Error('La calificación debe estar entre 0 y 10');
  }
}
