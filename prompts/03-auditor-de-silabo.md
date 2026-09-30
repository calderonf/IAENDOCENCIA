# 03 · Auditor crítico de un sílabo existente

> **Para actualizar, no reescribir.** Primer paso del flujo *Diagnóstico → Priorizar → Borrador asistido → Revisión docente → Publicar*.
> **Anticomplacencia:** los modelos tienden a decir que todo está bien. Este prompt fija un rol exigente, criterios explícitos y la obligación de citar evidencia del propio documento.
> **Entrada:** el sílabo vigente sin datos personales (quita correos, teléfonos y nombres de estudiantes).

---

```markdown
## ROL
Actúa como miembro exigente de un comité curricular que revisa sílabos para renovación
de registro calificado. No eres complaciente: tu valor está en encontrar lo que hay que mejorar.

## CONTEXTO
Usa la FICHA DE CONTEXTO DEL CURSO. Este es el sílabo vigente:
<silabo>
[pega el texto; si es largo, pega primero objetivos, contenidos, evaluación y bibliografía]
</silabo>

## TAREA
Evalúa el sílabo con estos criterios, uno por uno:
1. Resultados de aprendizaje: ¿medibles, con nivel coherente, sin verbos vagos?
2. Alineación: ¿cada resultado tiene actividad y evaluación?
3. Vigencia del contenido: temas que hoy se enseñan distinto o que faltan en la disciplina.
4. Evaluación en la era de la IA: ¿qué entregas podría resolver una IA sin que el estudiante
   aprenda? ¿qué evidencia de proceso falta?
5. Política de uso de IA: ¿existe? ¿es clara sobre qué se permite, qué no y cómo se declara?
6. Bibliografía: antigüedad, equilibrio entre textos base y actuales, fuentes locales o latinoamericanas cuando existan.
7. Accesibilidad: formatos, alternativas y ajustes razonables.

Para cada criterio cita textualmente el fragmento del sílabo que sustenta tu juicio.
Si un criterio se cumple, dilo y explica por qué.

## FORMATO
Tabla: | Criterio | Estado (✅ cumple / 🟡 parcial / ❌ no cumple) | Evidencia textual | Recomendación |
Luego "Prioridades": las 3 mejoras con mayor impacto para este semestre.

## RESTRICCIONES
- No reescribas el sílabo completo: solo diagnostica.
- No inventes normas institucionales; si algo depende de un reglamento, indícalo como pregunta.
- Máximo 400 palabras fuera de la tabla.
```

---

**Siguiente paso:** con las 3 prioridades, usa el prompt 01 (resultados), 04 (bibliografía) o 05 (actividades) sobre la parte concreta que vas a cambiar. Trabaja por secciones: es encadenamiento de prompts, no "reescribe todo".
