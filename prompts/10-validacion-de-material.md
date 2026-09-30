# 10 · Validar el material antes de llevarlo al aula

> Ningún material generado con IA llega a los estudiantes sin pasar por aquí. La responsabilidad siempre es de quien lo firma y lo entrega, no de la IA.
> Rúbrica adaptada del capítulo 10 del libro *IA generativa en la educación* (Calderón, Gerlein y Parra, 2026).

## Rúbrica de validación

| Criterio | ✅ Listo para usar | 🟡 Requiere ajustes | ❌ No usar sin rehacer |
|---|---|---|---|
| Corrección disciplinar | Datos, fórmulas y conceptos verificados contra una fuente confiable | Imprecisiones aisladas, corregibles | Errores conceptuales que cambian lo que se enseña |
| Alineación | Corresponde directamente a un RA del sílabo | Relación indirecta o parcial | Sin relación clara con ningún RA |
| Fuentes y derechos | Contenido propio o con licencia verificada, fuentes existentes y atribuidas | Falta atribución o verificar una fuente | Referencias inexistentes u obra protegida sin permiso |
| Sesgos | Ejemplos diversos, sin estereotipos | Sesgos aislados, corregibles | Estereotipos o exclusiones sistemáticas |
| Accesibilidad | Texto alternativo, buen contraste, formatos legibles | Falta alguna alternativa | Sin ninguna adaptación |

**Los criterios no se promedian:** un material impecable en lo disciplinar pero con referencias inventadas no está listo.

---

## Prompt de segunda opinión (en un chat NUEVO, idealmente con otro modelo)

```markdown
## ROL
Actúa como revisor(a) académico(a) exigente de materiales didácticos de [disciplina].

## CONTEXTO
Este material fue generado con ayuda de IA para estudiantes de [nivel] de [programa]:
<material>[pega el material]</material>

## TAREA
Revísalo con estos criterios: corrección disciplinar, coherencia interna de cifras,
referencias verificables, sesgos, claridad para el nivel y accesibilidad.
Para cada problema: cita el fragmento, explica el error y propone la corrección.

## FORMATO
Tabla: | Fragmento | Problema | Gravedad (alta / media / baja) | Corrección |
Veredicto final: Listo / Requiere ajustes / Rehacer.

## RESTRICCIONES
- No seas complaciente. Si no encuentras problemas en un criterio, explica cómo lo verificaste.
- No reescribas todo el material; señala y corrige puntualmente.
```

---

## Nota de transparencia sugerida para tus materiales

> Material elaborado por [nombre], [institución], con asistencia de [herramienta] para [uso: estructura, redacción de borradores, generación de ejercicios]. El contenido fue revisado y verificado por el docente, quien responde por su exactitud. [Licencia, p. ej. CC BY-NC 4.0].
