
import { describe, it, expect } from 'vitest';
import {
  contarAprobados,contarReprobados,ordenarCalificaciones,
  calcularPromedio,
  obtenerCalificacionMayor,
  obtenerCalificacionMenor,
  aprobo,
  obtenerEstado
} from '../src/calificaciones.js';

describe('Módulo de calificaciones', () => {
  it('calcula el promedio de tres calificaciones', () => {
    expect(calcularPromedio([8, 9, 10])).toBe(9);
  });

  it('calcula un promedio decimal', () => {
    expect(calcularPromedio([8, 9, 9])).toBeCloseTo(8.67, 2);
  });

  it('calcula el promedio de una sola calificación', () => {
    expect(calcularPromedio([8])).toBe(8);
  });

  it('calcula el promedio cuando todas son cero', () => {
    expect(calcularPromedio([0, 0, 0])).toBe(0);
  });

  it('calcula el promedio cuando todas son diez', () => {
    expect(calcularPromedio([10, 10, 10])).toBe(10);
  });

  it('rechaza una lista vacía', () => {
    expect(() => calcularPromedio([])).toThrow();
  });

  it('rechaza un valor que no sea una lista', () => {
    expect(() => calcularPromedio(8)).toThrow();
  });

  it('rechaza calificaciones mayores a diez', () => {
    expect(() => calcularPromedio([8, 11])).toThrow();
  });

  it('rechaza calificaciones negativas', () => {
    expect(() => calcularPromedio([8, -1])).toThrow();
  });

  it('rechaza calificaciones de texto', () => {
    expect(() => calcularPromedio([8, 'nueve'])).toThrow();
  });

  it('rechaza valores NaN', () => {
    expect(() => calcularPromedio([8, NaN])).toThrow();
  });

  it('obtiene la calificación mayor', () => {
    expect(obtenerCalificacionMayor([7, 9, 8])).toBe(9);
  });

  it('obtiene la calificación menor', () => {
    expect(obtenerCalificacionMenor([7, 9, 8])).toBe(7);
  });

  it('rechaza una lista vacía al buscar la mayor', () => {
    expect(() => obtenerCalificacionMayor([])).toThrow();
  });

  it('rechaza una lista vacía al buscar la menor', () => {
    expect(() => obtenerCalificacionMenor([])).toThrow();
  });

  it('determina que un estudiante aprobó', () => {
    expect(aprobo(8)).toBe(true);
  });

  it('determina que un estudiante reprobó', () => {
    expect(aprobo(6)).toBe(false);
  });
  it('rechaza una lista que no sea un arreglo al buscar la mayor', () => {
  expect(() => obtenerCalificacionMayor(8)).toThrow();
});

it('rechaza una lista que no sea un arreglo al buscar la menor', () => {
  expect(() => obtenerCalificacionMenor(8)).toThrow();
});

it('rechaza calificaciones inválidas al buscar la mayor', () => {
  expect(() => obtenerCalificacionMayor([8, 11])).toThrow();
});

it('rechaza calificaciones inválidas al buscar la menor', () => {
  expect(() => obtenerCalificacionMenor([8, -1])).toThrow();
});

it('determina el estado de un estudiante aprobado', () => {
  expect(obtenerEstado(8)).toBe('Aprobado');
});

it('determina el estado de un estudiante reprobado', () => {
  expect(obtenerEstado(6)).toBe('Reprobado');
});

it('rechaza una calificación inválida al determinar el estado', () => {
  expect(() => obtenerEstado(11)).toThrow();
});

});


//pipillo 


  it('cuenta las calificaciones aprobadas', () => {
    expect(contarAprobados([8, 5, 9, 6, 10])).toBe(3);
  });

  it('rechaza una lista vacía al contar aprobados', () => {
    expect(() => contarAprobados([])).toThrow();
  });

  it('rechaza calificaciones inválidas al contar aprobados', () => {
    expect(() => contarAprobados([8, 11])).toThrow();
  });

  it('cuenta las calificaciones reprobadas', () => {
    expect(contarReprobados([8, 5, 9, 6, 10])).toBe(2);
  });

  it('rechaza una lista vacía al contar reprobados', () => {
    expect(() => contarReprobados([])).toThrow();
  });

  it('rechaza calificaciones inválidas al contar reprobados', () => {
    expect(() => contarReprobados([8, -1])).toThrow();
  });

  it('ordena las calificaciones de menor a mayor', () => {
    expect(ordenarCalificaciones([8, 5, 10, 6, 9]))
      .toEqual([5, 6, 8, 9, 10]);
  });

  it('rechaza una lista vacía al ordenar', () => {
    expect(() => ordenarCalificaciones([])).toThrow();
  });

  it('rechaza calificaciones inválidas al ordenar', () => {
    expect(() => ordenarCalificaciones([8, 11])).toThrow();
  });
