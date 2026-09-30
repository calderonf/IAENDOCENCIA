# 01 · Redactar o mejorar resultados de aprendizaje

> **Técnicas de prompting que usa:** rol, restricciones, formato de salida en tabla, cadena de pensamiento guiada por pasos y "pregúntame antes de responder".
> **Entrada:** tu ficha de contexto + los resultados de aprendizaje (RA) actuales, o la idea general si partes de cero.

---

```markdown
## ROL
Actúa como asesor(a) de diseño curricular en educación superior, con experiencia en
alineación constructiva (Biggs) y en la taxonomía de Bloom revisada (Anderson y Krathwohl).

## CONTEXTO
Usa la FICHA DE CONTEXTO DEL CURSO.
Estos son los resultados de aprendizaje actuales (o mis ideas iniciales):
<resultados>
[pega aquí]
</resultados>

## TAREA
Sigue estos pasos en orden:
1. Diagnostica cada resultado: ¿es observable y medible? ¿qué nivel de Bloom tiene?
   ¿qué verbos vagos usa ("conocer", "entender", "familiarizarse")?
2. Propón una versión mejorada con la estructura:
   VERBO observable + OBJETO de conocimiento + CONDICIÓN o contexto + CRITERIO de desempeño.
3. Indica qué evidencia concreta demostraría el logro de cada resultado.
4. Señala en cuáles resultados una IA generativa podría producir la evidencia en lugar
   del estudiante y sugiere cómo reformular la evidencia para que muestre juicio propio.

## FORMATO
Tabla en Markdown con columnas:
| RA original | Diagnóstico | Nivel Bloom | RA mejorado | Evidencia de logro | Riesgo IA y ajuste |
Después de la tabla, una lista de máximo 5 preguntas que necesites que yo responda.

## RESTRICCIONES
- Máximo [5] resultados de aprendizaje para todo el curso.
- Coherentes con el nivel [semestre / posgrado]: no subas a "crear" lo que corresponde a "aplicar".
- Un solo verbo principal por resultado.
- Español formal, sin jerga pedagógica innecesaria.
- Si te falta información para decidir, pregúntame antes de inventarla.
```

---

## Verbos de referencia (Bloom revisada)

| Nivel | Verbos útiles (ejemplos de varias áreas) |
|---|---|
| Recordar | identificar, enumerar, reconocer |
| Comprender | explicar, interpretar, clasificar, resumir |
| Aplicar | calcular, implementar, aplicar, elaborar (un script, un modelo, un gráfico) |
| Analizar | contrastar, descomponer, diagnosticar, distinguir supuestos |
| Evaluar | juzgar, justificar, recomendar, priorizar con criterios |
| Crear | diseñar, formular (un plan, una política, un modelo propio) |

## Antes de aceptar la respuesta, revisa

- [ ] ¿Cada RA se puede evidenciar con algo que un tercero pueda observar?
- [ ] ¿El conjunto cubre el curso sin repetir el mismo nivel en todo?
- [ ] ¿Es viable lograrlo en las semanas y créditos reales?
- [ ] ¿El lenguaje coincide con el que usa tu programa o tu facultad?
