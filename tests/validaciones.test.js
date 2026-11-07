
import { describe, it, expect } from 'vitest';
import {
  esCorreoValido,
  esContrasenaSegura,
  esNumeroValido,
  esMayorDeEdad,
  limpiarTexto, 
  esTextoValido
} from '../src/validaciones.js';

describe('Módulo de validaciones', () => {
  it('acepta un correo válido', () => {
    expect(esCorreoValido('usuario@gmail.com')).toBe(true);
  });

  it('rechaza un correo sin arroba', () => {
    expect(esCorreoValido('usuariogmail.com')).toBe(false);
  });

  it('rechaza un correo sin dominio', () => {
    expect(esCorreoValido('usuario@')).toBe(false);
  });

  it('rechaza un correo vacío', () => {
    expect(esCorreoValido('')).toBe(false);
  });

  it('rechaza un correo que no sea texto', () => {
    expect(esCorreoValido(123)).toBe(false);
  });

  it('acepta una contraseña segura', () => {
    expect(esContrasenaSegura('Clave123')).toBe(true);
  });

  it('rechaza una contraseña corta', () => {
    expect(esContrasenaSegura('Abc123')).toBe(false);
  });

  it('rechaza una contraseña sin mayúsculas', () => {
    expect(esContrasenaSegura('clave123')).toBe(false);
  });

  it('rechaza una contraseña sin minúsculas', () => {
    expect(esContrasenaSegura('CLAVE123')).toBe(false);
  });

  it('rechaza una contraseña sin números', () => {
    expect(esContrasenaSegura('ClaveSegura')).toBe(false);
  });

  it('rechaza una contraseña que no sea texto', () => {
    expect(esContrasenaSegura(12345678)).toBe(false);
  });

  it('acepta un número entero', () => {
    expect(esNumeroValido(25)).toBe(true);
  });

  it('acepta un número decimal', () => {
    expect(esNumeroValido(3.14)).toBe(true);
  });

  it('rechaza texto como número', () => {
    expect(esNumeroValido('veinte')).toBe(false);
  });

  it('rechaza NaN', () => {
    expect(esNumeroValido(NaN)).toBe(false);
  });

  it('determina que una persona de 18 años es mayor de edad', () => {
    expect(esMayorDeEdad(18)).toBe(true);
  });

  it('rechaza edades menores de 18 años', () => {
    expect(esMayorDeEdad(17)).toBe(false);
  });

  it('limpia espacios al inicio y al final', () => {
    expect(limpiarTexto('  Hola mundo  ')).toBe('Hola mundo');
  });

  it('reemplaza espacios repetidos', () => {
    expect(limpiarTexto('Hola    mundo')).toBe('Hola mundo');
  });

  it('rechaza valores que no sean texto al limpiar', () => {
    expect(() => limpiarTexto(123)).toThrow();
  });

  it('acepta un texto valido', () => {
  expect(esTextoValido('Hola')).toBe(true);
  });

  it('rechaza un texto vacio', () => {
    expect(esTextoValido('')).toBe(false);
  });

  it('rechaza un texto con solo espacios', () => {
    expect(esTextoValido('   ')).toBe(false);
  });

  it('rechaza valores numericos', () => {
    expect(esTextoValido(123)).toBe(false);
  });
});
