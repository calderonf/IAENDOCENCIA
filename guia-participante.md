# Sesión 4 · Prompts para diseñar tu curso — guía del participante

**Aula Aumentada: Fundamentos de IA Generativa para la Docencia Universitaria** · FCEA, Pontificia Universidad Javeriana
Miércoles 30 de septiembre de 2026 · Francisco Carlos Calderón, Ph.D.

---

## La idea en una frase

Un prompt docente es la anatomía de un buen prompt (**rol · contexto · tarea · formato · restricciones**) más un **contexto pedagógico** que se escribe una vez y se reutiliza: el contexto del curso.

## De las técnicas de prompting a tu curso

| Técnica de prompting | Uso docente |
|---|---|
| Rol + contexto | Contexto del curso, pegado al inicio o guardado en un Proyecto o Gem |
| Few-shot (dar ejemplos) | Pegar un caso o ejercicio tuyo para que imite estilo y dificultad |
| Cadena de pensamiento por pasos | Diagnosticar un RA antes de reescribirlo |
| Encadenamiento de prompts | Auditor → resultados → alineación → actividad → rúbrica |
| *Tree of thought* | Una actividad en tres variantes (sin IA / IA declarada / IA como objeto) |
| Autoconsistencia | Resolver el mismo caso en chats nuevos para detectar datos incoherentes |
| "Pregúntame antes" | Que la IA pida la información que falta en vez de inventarla |

## Resultados de aprendizaje medibles

**Estructura:** VERBO observable + OBJETO + CONDICIÓN o contexto + CRITERIO.

- ❌ *Entender la estadística descriptiva.*
- ✅ *Interpretar medidas de tendencia central, dispersión y correlación de un conjunto de datos, distinguiendo lo que los datos permiten afirmar de lo que no.*
- ❌ *Comprender la oferta y la demanda.*
- ✅ *Predecir con un modelo gráfico de oferta y demanda el efecto de un impuesto sobre el precio y la cantidad de equilibrio.*

Más ejemplos de varias áreas en `ejemplos/resultados-antes-despues.md`.

[Alineación constructiva](https://es.wikipedia.org/wiki/Constructive_alignment) (Biggs): tres piezas deben apuntar a lo mismo, el resultado de aprendizaje, la actividad que lo prepara y la evaluación que lo evidencia. Si falta una, o no coinciden, hay un hueco en el curso. Los verbos por nivel vienen de la [taxonomía de Bloom](https://en.wikipedia.org/wiki/Bloom%27s_taxonomy).

## Actualizar un sílabo en 5 pasos

1. **Diagnóstico** con un auditor crítico (prompt 03).
2. **Priorizar** 3 cambios (resultados, evaluación, política de IA o bibliografía).
3. **Borrador asistido** por secciones (prompts 01, 02, 04 y 05).
4. **Revisión docente:** coherencia, viabilidad y verificación de fuentes.
5. **Publicar y comunicar** el primer día de clase.

## Reglas de cuidado

1. No pongas datos de estudiantes (nombres, códigos, notas) en herramientas públicas.
2. Verifica toda referencia (DOI, Crossref, catálogo de la Biblioteca) y todo número.
3. Pide a la IA que no sea complaciente y que cite evidencia del documento.
4. Declara el uso de IA en tus propios materiales: modela lo que pides a tus estudiantes.
5. La responsabilidad del material y de la nota es tuya.

## Taller en clase (15 min)

1. Abre la plantilla **00 · Contexto del curso** y llénala para un curso tuyo. Bastan las secciones de identificación, estudiantes y resultados de aprendizaje.
2. Úsala con el prompt **01 · Resultados de aprendizaje** sobre **uno** de tus resultados.
3. Comparte en el chat el antes y el después de ese resultado.

## Tarea para la Sesión 5 (lunes 5 de octubre)

Con la cadena de prompts del kit, actualiza **un fragmento** de tu sílabo: resultados de aprendizaje, una actividad con su rúbrica o la bibliografía.
Trae el **antes y el después**: en la Sesión 5 lo convertiremos a Markdown y de ahí a Word, PDF o presentación.

## Kit de prompts

Descárgalo en la carpeta `prompts/` del sitio: <https://calderonf.github.io/IAENDOCENCIA/>

## Para profundizar

- Calderón, F., Gerlein, E. y Parra, C. (2026, en preparación). *Inteligencia artificial generativa en la educación: una guía para estudiantes, docentes e instituciones*. Pontificia Universidad Javeriana. Capítulos 9 (sílabos) y 10 (materiales y actividades). Materiales abiertos: <https://github.com/calderonf/IA_GENERATIVA_EN_LA_EDUCACION>
- Biggs, J. (1996). Enhancing teaching through constructive alignment. *Higher Education, 32*, 347–364.
- Anderson, L. W. y Krathwohl, D. R. (2001). *A taxonomy for learning, teaching, and assessing*. Longman.
- CAST (2024). *Universal Design for Learning Guidelines 3.0*. <https://udlguidelines.cast.org/>
