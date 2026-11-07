
function validarNumero(valor) {
  if (typeof valor !== 'number' || !Number.isFinite(valor)) {
    throw new Error('Debes ingresar un número válido');
  }
}

export function celsiusAFahrenheit(celsius) {
  validarNumero(celsius);
  return (celsius * 9 / 5) + 32;
}

export function fahrenheitACelsius(fahrenheit) {
  validarNumero(fahrenheit);
  return (fahrenheit - 32) * 5 / 9;
}

export function kilometrosAMetros(kilometros) {
  validarNumero(kilometros);

  if (kilometros < 0) {
    throw new Error('La distancia no puede ser negativa');
  }

  return kilometros * 1000;
}

export function metrosAKilometros(metros) {
  validarNumero(metros);

  if (metros < 0) {
    throw new Error('La distancia no puede ser negativa');
  }

  return metros / 1000;
}

export function centimetrosAMetros(centimetros) {
  validarNumero(centimetros);

  if (centimetros < 0) {
    throw new Error('La distancia no puede ser negativa');
  }

  return centimetros / 100;
}

export function metrosACentimetros(metros) {
  validarNumero(metros);

  if (metros < 0) {
    throw new Error('La distancia no puede ser negativa');
  }

  return metros * 100;
}

export function calcularAsistencia(asistencias, totalClases) {
  if (!Number.isInteger(asistencias) ||
      !Number.isInteger(totalClases) ||
      totalClases <= 0 ||
      asistencias < 0 ||
      asistencias > totalClases) {
    throw new Error('Datos de asistencia invalidos');
  }

  return (asistencias / totalClases) * 100;
}