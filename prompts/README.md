# Kit de prompts docentes · Sesión 4

Cada plantilla sigue la anatomía de un buen prompt: **ROL · CONTEXTO · TAREA · FORMATO · RESTRICCIONES**.
Todas empiezan con la misma pieza, la **ficha de contexto del curso**, para no volver a explicar tu curso en cada conversación.

| # | Plantilla | Para qué | Técnica de prompting |
|---|---|---|---|
| 00 | [Ficha de contexto del curso](00-ficha-contexto-curso.md) | Contexto reutilizable | Contexto |
| 01 | [Resultados de aprendizaje](01-resultados-de-aprendizaje.md) | Redactar o mejorar RA medibles | Cadena de pensamiento guiada + "pregúntame" |
| 02 | [Mapa de alineación](02-mapa-de-alineacion.md) | RA → actividad → evidencia | Formato tabla + rol crítico |
| 03 | [Auditor de sílabo](03-auditor-de-silabo.md) | Diagnóstico de un sílabo vigente | Rol exigente, anticomplacencia |
| 04 | [Bibliografía verificable](04-bibliografia-verificable.md) | Actualizar referencias sin alucinaciones | Restricciones + verificación |
| 05 | [Actividad en tres variantes](05-actividad-tres-variantes.md) | Sin IA / IA declarada / IA como objeto | *Tree of thought* |
| 06 | [Rúbrica + prueba de estrés](06-rubrica-analitica.md) | Rúbrica analítica sin ambigüedades | Encadenamiento + múltiples roles |
| 07 | [Caso de estudio](07-caso-de-estudio.md) | Caso con datos, preguntas y nota docente | Few-shot + encadenamiento |
| 08 | [Ejercicios con solución](08-ejercicios-con-solucion.md) | Talleres y variantes | Few-shot + autoconsistencia |
| 09 | [Lectura → guía → presentación](09-lectura-a-guia-y-presentacion.md) | Material de clase a partir de una lectura | Encadenamiento |
| 10 | [Validación de material](10-validacion-de-material.md) | Control de calidad antes del aula | Segunda opinión |

## Cadena sugerida para actualizar un curso

```
00 Ficha  →  03 Auditor  →  01 Resultados  →  02 Alineación  →  05 Actividad  →  06 Rúbrica  →  10 Validación
                              ↘ 04 Bibliografía                    ↘ 07 Caso / 08 Ejercicios / 09 Guía
```

## Tres reglas

1. **Nada de datos de estudiantes** (nombres, códigos, notas, correos) en herramientas públicas.
2. **Todo se verifica:** cifras, referencias y afirmaciones disciplinares.
3. **Itera:** si la respuesta no sirve, ajusta una sola sección del prompt (rol, contexto, formato...) y vuelve a intentar.
