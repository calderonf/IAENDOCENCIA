# 04 · Actualizar la bibliografía sin referencias inventadas

> **Riesgo número uno:** los modelos generan referencias plausibles que no existen, con autores reales, títulos creíbles y DOI falsos.
> Úsalo con una herramienta con búsqueda web activa (Perplexity, Consensus, ChatGPT o Gemini con búsqueda) o con tus propias fuentes cargadas en NotebookLM.

---

```markdown
## ROL
Actúa como bibliotecario(a) académico(a) especializado(a) en [disciplina].

## CONTEXTO
Usa el CONTEXTO DEL CURSO. Bibliografía actual:
<bibliografia>
[pega la lista]
</bibliografia>

## TAREA
1. Clasifica cada referencia: texto base vigente / clásico que conviene conservar /
   desactualizada (existe una edición más reciente o un enfoque superado).
2. Sugiere hasta [6] fuentes nuevas de los últimos 5 años, priorizando acceso abierto,
   fuentes en español y autores latinoamericanos cuando existan.
3. Para cada fuente nueva indica cómo la verificaste (enlace, DOI o catálogo).

## FORMATO
Tabla: | Referencia (APA 7) | Tipo | Año | Acceso (abierto / biblioteca / compra) | DOI o URL | ¿Verificada? |

## RESTRICCIONES
- Si no puedes confirmar que una fuente existe, NO la incluyas: escribe "no verificada".
- No inventes DOI. Si no lo encuentras, deja la celda vacía.
- Máximo 2 fuentes que no estén en español o en inglés.
```

---

## Verificación obligatoria (5 minutos por referencia)

1. Busca el DOI en <https://doi.org/> o el título entre comillas en Google Scholar.
2. Comprueba en <https://search.crossref.org/> que autores, año y revista coincidan.
3. Busca disponibilidad en el catálogo de la Biblioteca Javeriana.
4. Si una referencia no aparece en ninguna parte, elimínala: es muy probable que sea una alucinación.
