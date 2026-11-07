# StudentTools

[![StudentTools CI/CD](https://github.com/Kallolt2030/StudentTools/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/Kallolt2030/StudentTools/actions/workflows/ci-cd.yml)

**StudentTools** es una colección de herramientas desarrolladas en JavaScript para facilitar tareas comunes de los estudiantes, como calcular calificaciones, realizar conversiones de unidades y validar información.

El proyecto implementa un pipeline de Integración Continua y Despliegue Continuo (CI/CD) mediante GitHub Actions, con pruebas automatizadas, análisis estático de código y publicación del reporte de cobertura en GitHub Pages.

## Funcionalidades

El proyecto cuenta con tres módulos principales:

### 1. Calificaciones
- Calcular el promedio de calificaciones.
- Obtener la calificación mayor y menor.
- Determinar si un estudiante aprobó o reprobó.
- Validar calificaciones dentro del rango permitido.

### 2. Conversiones
- Convertir Celsius a Fahrenheit.
- Convertir Fahrenheit a Celsius.
- Convertir kilómetros a metros.
- Convertir metros a kilómetros.
- Convertir centímetros a metros.

### 3. Validaciones
- Validar direcciones de correo electrónico.
- Comprobar la seguridad de contraseñas.
- Validar valores numéricos.
- Comprobar mayoría de edad.
- Limpiar espacios innecesarios en textos.

## Tecnologías utilizadas

- JavaScript (ES Modules).
- Node.js.
- Vitest.
- V8 Coverage.
- ESLint.
- Git y GitHub.
- GitHub Actions.
- GitHub Pages.

## Pruebas y cobertura

El proyecto utiliza Vitest para ejecutar pruebas automatizadas en los tres módulos.

- Más de 50 pruebas automatizadas.
- Cobertura global del 100%.
- Cobertura de líneas, funciones, ramas y sentencias.
- Umbral mínimo requerido: 80%.

### Reporte de cobertura

[Consultar reporte de cobertura en GitHub Pages](https://kallolt2030.github.io/StudentTools/)

## Pipeline CI/CD

El flujo de trabajo se configura mediante GitHub Actions en el archivo `.github/workflows/ci-cd.yml`.

El pipeline contiene tres trabajos:

1. **Lint:** analiza el código mediante ESLint.
2. **Test:** ejecuta las pruebas automatizadas y verifica los porcentajes de cobertura.
3. **Deploy:** publica el reporte HTML de cobertura en GitHub Pages.

### Eventos que ejecutan el pipeline

- `push` a la rama `main`.
- `pull_request` dirigido a la rama `main`.
- `workflow_dispatch` para ejecución manual.

El despliegue se realiza únicamente cuando existe un `push` a `main` y los trabajos anteriores terminan correctamente.

## Instalación y ejecución

Clonar el repositorio:

```bash
git clone https://github.com/Kallolt2030/StudentTools.git
```

Entrar a la carpeta:

```bash
cd StudentTools
```

Instalar dependencias:

```bash
npm install
```

Ejecutar pruebas:

```bash
npm test
```

Generar reporte de cobertura:

```bash
npm run coverage
```

Ejecutar análisis de código:

```bash
npm run lint
```

## Estructura del proyecto

```text
StudentTools/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── src/
│   ├── calificaciones.js
│   ├── conversiones.js
│   └── validaciones.js
├── tests/
│   ├── calificaciones.test.js
│   ├── conversiones.test.js
│   └── validaciones.test.js
├── eslint.config.js
├── vitest.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Integrantes del equipo

| Nombre | Matrícula | GitHub |
|---|---|---|
| Christopher Esquivel Garcia | 230747 | pipokuer1 |
| Axel Ivan Feliciano Hernandez | 230538 | en3y4hurbq43 |
| Karol Teresa Bernal Gallegos | 230627 | Kallolt2030 |

## Institución

**Universidad Tecnológica de Aguascalientes**

Proyecto académico de la asignatura Gestión del Proceso de Desarrollo de Software.

---

Desarrollado como proyecto académico para implementar un proceso de Integración Continua y Despliegue Continuo utilizando GitHub Actions.