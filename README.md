# ECBD_9b_equipo_dinamita

Proyecto de clase con las prácticas realizadas en equipo para la materia de **Extracción de Conocimiento de Bases de Datos (ECBD)**.

---

# Práctica 07: Generación de Dataset Clínico Simulado de Diabetes

## Autor

- Jesús Antonio Estrada Jiménez - 220076

---

# Objetivo General

Generar un dataset clínico simulado con información de **5,000 pacientes del estado de Puebla**, enfocado en factores relacionados con la diabetes, con el propósito de utilizarlo en prácticas posteriores de análisis exploratorio de datos, visualización y aplicación de modelos de aprendizaje automático.

---

# Descripción del Proyecto

Este proyecto consiste en la creación de un conjunto de datos ficticio con información clínica y demográfica de pacientes.

Los datos fueron generados de manera sintética con fines exclusivamente académicos, evitando el uso de información real o sensible de pacientes.

El dataset incluye variables relacionadas con:

- Datos demográficos
- Indicadores clínicos
- Factores de riesgo asociados a diabetes
- Hábitos y estilo de vida
- Información geográfica por municipio del estado de Puebla

---

# Contexto del Dataset

El dataset representa pacientes simulados pertenecientes al estado de Puebla, México.

Los registros fueron generados utilizando reglas estadísticas y rangos clínicos aproximados con el objetivo de simular escenarios similares a los encontrados en ambientes médicos reales.

La información generada no corresponde a personas reales.

---

# Atributos del Dataset

Las principales variables incluidas son:

## Datos personales

- ID del paciente
- Edad
- Sexo
- Municipio

## Información relacionada con diabetes

- Tiene diabetes
- Tipo de diabetes
- Años desde el diagnóstico
- Tratamiento actual

## Indicadores físicos

- Peso
- Estatura
- Índice de Masa Corporal (IMC)
- Clasificación de obesidad

## Indicadores clínicos

- Glucosa en ayuno
- HbA1c
- Presión arterial sistólica
- Presión arterial diastólica
- Colesterol
- Triglicéridos

## Factores de riesgo

- Actividad física
- Consumo de tabaco
- Hipertensión

## Información temporal

- Fecha de consulta

---

# Reglas de Generación de Datos

Los valores fueron generados utilizando rangos clínicos aproximados:

| Variable | Rango |
|---|---|
| Edad | 18 - 90 años |
| Peso | 48 - 125 kg |
| Estatura | 1.45 - 1.90 m |
| IMC | Calculado mediante peso y estatura |
| Glucosa en ayuno | 70 - 280 mg/dL |
| HbA1c | 4.8 - 12 % |
| Presión sistólica | 105 - 180 mmHg |
| Presión diastólica | 60 - 110 mmHg |
| Colesterol | 140 - 260 mg/dL |
| Triglicéridos | 50 - 300 mg/dL |

Además, se establecieron reglas de dependencia entre variables:

- Los pacientes con diabetes pueden presentar valores elevados de glucosa y HbA1c.
- El tratamiento depende del tipo de diabetes.
- La hipertensión tiene mayor probabilidad en pacientes con edad avanzada, obesidad o diabetes.
- La obesidad se determina mediante el cálculo del IMC.

---

# Variable Objetivo

La variable principal del dataset es:


Clasificación binaria:

- Sí
- No

Esta variable puede utilizarse posteriormente para modelos de aprendizaje supervisado.

Ejemplos:

- Regresión logística
- Árboles de decisión
- Random Forest
- Redes neuronales

---

# Generación del Dataset

El dataset fue generado mediante **Node.js**, utilizando JavaScript para crear registros clínicos simulados.

Se utilizaron:

- Generación aleatoria de valores
- Catálogos clínicos
- Municipios del estado de Puebla
- Reglas de validación entre variables

Se construyó un total de:


---

# Formato de Almacenamiento

El dataset generado se encuentra en formato:



---

# Validación del Dataset

Se realizaron verificaciones para asegurar la calidad de los datos:

✔ Dimensiones correctas (5,000 registros)  
✔ Nombres de columnas consistentes  
✔ Validación de tipos de datos  
✔ Revisión de valores nulos  
✔ Revisión de rangos clínicos  
✔ Validación de municipios del estado de Puebla  
✔ Verificación de consistencia entre variables relacionadas  

---

# Análisis Exploratorio (EDA)

El análisis del dataset se realizará mediante un Notebook de Jupyter.

Incluye:

- Estadísticas descriptivas
- Distribución de variables clínicas
- Análisis de pacientes con y sin diabetes
- Relación entre IMC, glucosa y diabetes
- Visualización mediante gráficas
- Identificación de patrones en los datos

---

# Estructura del Proyecto
```
.
├── dataset
│ └── pacientes_diabetes_puebla.csv
│
├── notebook
│ └── Practica07.ipynb
│
├── src
│ ├── catalogos.js
│ ├── generateCSV.js
│ ├── helpers.js
│ └── municipios.js
│
├── package.json
├── pnpm-lock.yaml
└── README.md
```


---

# Tecnologías Utilizadas

## Generación de datos

- Node.js
- JavaScript
- XLSX

## Análisis

- Python
- Jupyter Notebook
- Pandas
- NumPy
- Matplotlib

---

# Evidencias del Proyecto

El repositorio incluye:

- Dataset clínico simulado en formato CSV
- Notebook de análisis
- Código fuente para generación de datos
- Catálogos utilizados
- Documentación del proyecto
- Historial de commits

---

# Nota Importante

Este dataset es completamente simulado y fue creado únicamente con fines educativos.

No representa información real de pacientes ni debe utilizarse para diagnósticos médicos.

---

# Integrantes

| Integrante | Matrícula | Roles asignados | Responsabilidades |
|---|---|---|---|
| Jesús Antonio Estrada Jiménez | 220076 | Responsable de generación de datos y documentación | Desarrollo del generador del dataset clínico simulado, creación de reglas de generación de variables, organización del proyecto, documentación técnica y preparación del conjunto de datos para análisis posteriores. |
| Antonio Ocpaco Dolores | 230642 | Responsable de análisis y visualización | Realización del análisis exploratorio de datos (EDA), generación de visualizaciones, interpretación de resultados y apoyo en la evaluación de patrones encontrados dentro del dataset. |