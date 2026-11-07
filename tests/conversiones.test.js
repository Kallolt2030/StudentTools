
import { describe, it, expect } from 'vitest';
import {
  celsiusAFahrenheit,
  fahrenheitACelsius,
  kilometrosAMetros,
  metrosAKilometros,
  centimetrosAMetros,
  metrosACentimetros
} from '../src/conversiones.js';

describe('Módulo de conversiones', () => {
  it('convierte cero grados Celsius a Fahrenheit', () => {
    expect(celsiusAFahrenheit(0)).toBe(32);
  });

  it('convierte cien grados Celsius a Fahrenheit', () => {
    expect(celsiusAFahrenheit(100)).toBe(212);
  });

  it('convierte grados Celsius negativos', () => {
    expect(celsiusAFahrenheit(-40)).toBe(-40);
  });

  it('convierte 32 Fahrenheit a Celsius', () => {
    expect(fahrenheitACelsius(32)).toBe(0);
  });

  it('convierte 212 Fahrenheit a Celsius', () => {
    expect(fahrenheitACelsius(212)).toBe(100);
  });

  it('convierte cero kilómetros a metros', () => {
    expect(kilometrosAMetros(0)).toBe(0);
  });

  it('convierte un kilómetro a metros', () => {
    expect(kilometrosAMetros(1)).toBe(1000);
  });

  it('convierte cinco kilómetros a metros', () => {
    expect(kilometrosAMetros(5)).toBe(5000);
  });

  it('rechaza kilómetros negativos', () => {
    expect(() => kilometrosAMetros(-2)).toThrow();
  });

  it('rechaza kilómetros de tipo texto', () => {
    expect(() => kilometrosAMetros('cinco')).toThrow();
  });

  it('convierte cero metros a kilómetros', () => {
    expect(metrosAKilometros(0)).toBe(0);
  });

  it('convierte mil metros a kilómetros', () => {
    expect(metrosAKilometros(1000)).toBe(1);
  });

  it('convierte metros a kilómetros con decimales', () => {
    expect(metrosAKilometros(500)).toBe(0.5);
  });

  it('rechaza metros negativos', () => {
    expect(() => metrosAKilometros(-100)).toThrow();
  });

  it('convierte cien centímetros a metros', () => {
    expect(centimetrosAMetros(100)).toBe(1);
  });

  it('convierte cero centímetros a metros', () => {
    expect(centimetrosAMetros(0)).toBe(0);
  });

  it('rechaza centímetros negativos', () => {
    expect(() => centimetrosAMetros(-50)).toThrow();
  });

  it('convierte metros a centimetros', () => {
  expect(metrosACentimetros(2)).toBe(200);
  });

  it('convierte cero metros a centimetros', () => {
    expect(metrosACentimetros(0)).toBe(0);
  });

  it('rechaza metros negativos', () => {
    expect(() => metrosACentimetros(-2)).toThrow();
  });

  it('rechaza valores de texto', () => {
    expect(() => metrosACentimetros('dos')).toThrow();
  });
});
