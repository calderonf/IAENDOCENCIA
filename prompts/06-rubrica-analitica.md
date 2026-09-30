# 06 · Rúbrica analítica y prueba de estrés

> **Dos prompts encadenados:** primero se genera la rúbrica y después se pone a prueba.
> Una rúbrica ambigua produce notas distintas con evaluadores distintos, sean humanos o IA. La prueba de estrés busca esa ambigüedad **antes** de usarla.

---

## Prompt 6A · Generar la rúbrica

```markdown
## ROL
Actúa como especialista en evaluación del aprendizaje en educación superior.

## CONTEXTO
Usa la FICHA DE CONTEXTO DEL CURSO.
Actividad a evaluar:
<actividad>[pega la consigna]</actividad>
Resultado(s) de aprendizaje que evalúa:
<ra>[pega el RA]</ra>

## TAREA
Diseña una rúbrica analítica con 4 criterios alineados con el RA y 4 niveles de desempeño:
Excelente (4) · Competente (3) · En desarrollo (2) · Insuficiente (1).

## FORMATO
1. Tabla en Markdown: | Criterio (peso %) | 4 | 3 | 2 | 1 |
2. Debajo, una versión para estudiantes en lenguaje sencillo (máximo 150 palabras)
   con lo que significa "hacerlo excelente".

## RESTRICCIONES
- Descriptores observables: di QUÉ se ve en el trabajo, no adjetivos ("bueno", "adecuado", "pertinente").
- Cada nivel debe diferenciarse del siguiente por algo verificable.
- Los pesos suman 100 %.
- Si el uso de IA está permitido, incluye un criterio o una condición sobre la declaración de uso y el juicio propio.
```

## Prompt 6B · Prueba de estrés de la rúbrica

```markdown
## ROL
Ahora actúa como dos evaluadores independientes que no se conocen, y luego como un
estudiante que quiere la nota máxima con el mínimo esfuerzo.

## TAREA
Con la rúbrica anterior:
1. Señala cada descriptor que dos docentes podrían interpretar de forma distinta y
   propone una redacción más precisa.
2. Describe dos trabajos hipotéticos muy diferentes que obtendrían la MISMA nota.
   ¿Es justo? Si no, ¿qué criterio falla?
3. Como estudiante estratégico: ¿cómo podría una respuesta generada por IA sin
   comprensión obtener 3 o 4 en cada criterio? Propón qué ajustar para evitarlo.

## FORMATO
Tabla de ajustes: | Criterio | Problema detectado | Redacción propuesta |
Y la rúbrica final corregida.
```

---

## Dos usos que vale la pena conversar

- **Compartir la rúbrica con los estudiantes:** si la usan con IA para autoevaluarse y mejorar antes de entregar, eso es retroalimentación formativa, no trampa.
- **Calificar con IA:** es tema de otro momento. Como regla, la IA puede proponer, pero la nota la pone y la firma el docente.
