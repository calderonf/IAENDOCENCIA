# 07 · Caso de estudio con datos y nota docente

> **Para qué:** casos con un dilema real, datos que exigen análisis y decisiones con varias respuestas defendibles. Sirve en cualquier disciplina: un caso de ingeniería, de análisis de datos, de economía, de gestión o de salud.
> La IA es buena escribiendo la narrativa y armando tablas; tú garantizas que los datos, los cálculos y la teoría sean correctos.
> **Técnicas:** rol, *few-shot* (pegar un caso tuyo como ejemplo de estilo) y encadenamiento (caso → preguntas → rúbrica con el prompt 06).

---

```markdown
## ROL
Actúa como autor(a) de casos de enseñanza universitaria en [disciplina].

## CONTEXTO
Usa la FICHA DE CONTEXTO DEL CURSO.
Tema del caso: [p. ej. una alcaldía decide dónde instalar sensores de calidad del aire con
presupuesto limitado / una tienda quiere entender por qué cayeron sus ventas]
Resultado de aprendizaje que debe movilizar: [RA]
Conceptos o herramientas que los estudiantes deben aplicar: [p. ej. estadística descriptiva,
regresión, costo-beneficio, un script en Python ...]
(Opcional) Ejemplo de un caso que me gusta, como referencia de estilo:
<ejemplo>[pega un caso tuyo, máximo 1 página]</ejemplo>

## TAREA
1. Escribe la narrativa del caso (400–600 palabras): organización FICTICIA, protagonista
   con una decisión concreta, fecha límite, presiones de distintos actores e información
   incompleta o contradictoria, como en la vida real.
2. Agrega anexos con datos coherentes entre sí (tablas; si aplica, un CSV de máximo 30 filas).
3. Redacta 5 preguntas de análisis escalonadas: comprender → aplicar → analizar → evaluar → recomendar.
4. Escribe una nota para el docente: solución esperada paso a paso (con código si aplica),
   errores típicos de los estudiantes y cómo conducir la discusión en 30 minutos.

## FORMATO
Markdown con secciones: Caso · Anexos · Preguntas · Nota para el docente.
La nota para el docente va al final, separada con una línea horizontal, para poder retirarla.

## RESTRICCIONES
- Organización, personas y cifras ficticias pero plausibles; indica que son supuestos.
- No uses nombres de empresas, instituciones ni personas reales.
- Todo cálculo de la nota docente debe poder reproducirse con los anexos.
- Si un dato necesario para resolver no está en los anexos, agrégalo.
```

---

## Verificación antes de usarlo en clase

- Rehaz los cálculos clave (Excel o Python) o pide a la IA que ejecute el código y compara los resultados.
- En un chat nuevo pídele: "Resuelve este caso". Si llega a una respuesta distinta a la de la nota docente, hay una inconsistencia en los datos. Esta técnica se llama autoconsistencia: si la IA responde distinto a la misma pregunta en chats separados, algo no cuadra.
- Revisa que el dilema no tenga una única respuesta obvia: un buen caso admite recomendaciones defendibles distintas.
