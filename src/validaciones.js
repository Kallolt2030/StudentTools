
export function esCorreoValido(correo) {
  if (typeof correo !== 'string') {
    return false;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

export function esContrasenaSegura(contrasena) {
  if (typeof contrasena !== 'string') {
    return false;
  }

  return contrasena.length >= 8 &&
    /[A-Z]/.test(contrasena) &&
    /[a-z]/.test(contrasena) &&
    /[0-9]/.test(contrasena);
}

export function esNumeroValido(valor) {
  return typeof valor === 'number' && Number.isFinite(valor);
}

export function esMayorDeEdad(edad) {
  return Number.isInteger(edad) && edad >= 18;
}

export function limpiarTexto(texto) {
  if (typeof texto !== 'string') {
    throw new Error('El valor debe ser texto');
  }

  return texto.trim().replace(/\s+/g, ' ');
}

export function esTextoValido(texto) {
  return typeof texto === 'string' &&
    texto.trim().length > 0;
}
