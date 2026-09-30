# IA en docencia · Prompts para diseñar tu curso

Material autocontenido para un taller de 2 horas con docentes universitarios: cómo usar IA generativa para diseñar y actualizar sílabos, redactar resultados de aprendizaje, crear actividades, rúbricas y material de clase, y validar todo antes de llevarlo al aula.

Sesión 4 del curso *Aula Aumentada: Fundamentos de IA Generativa para la Docencia Universitaria* (Pontificia Universidad Javeriana, 2026). Docente: Francisco Carlos Calderón, Ph.D.

**Sitio publicado:** <https://calderonf.github.io/IAENDOCENCIA/>

## Contenido

| Sección | Tema |
|---|---|
| 01 | Anatomía de un buen prompt (rol · contexto · tarea · formato · restricciones) y técnicas aplicadas a tareas docentes |
| 02 | Contexto del curso, con generador interactivo |
| 03 | Resultados de aprendizaje medibles: taxonomía de Bloom y alineación constructiva |
| 04 | Actualizar un sílabo en 5 pasos: auditor crítico, bibliografía verificable y cláusula de uso de IA |
| 05 | Una actividad en tres variantes: sin IA, IA declarada, IA como objeto de análisis |
| 06 | Rúbricas analíticas y su prueba de estrés |
| 07 | Material de clase: casos, ejercicios, lectura → guía → presentación |
| 08 | Validación de material generado con IA |
| 09 | Taller y tarea |
| 10 | Kit de prompts y recursos |

## Estructura del repositorio

```
index.html                  Sitio del taller (una sola página)
assets/css/style.css        Estilos (colores institucionales, modo oscuro, móvil)
assets/js/app.js            Navegación, copiar prompts, generador del contexto del curso, pestañas
prompts/                    Kit de 11 plantillas en Markdown (00–10) + índice
ejemplos/                   Contexto de ejemplo, resultados antes/después, actividad con datos (CSV)
guia-participante.md        Resumen de una página para los asistentes
```

Los ejemplos provienen de analítica de datos con Python y de conceptos básicos de economía; las plantillas son generalistas y sirven para cualquier disciplina.

## Uso local

Abre `index.html` en un navegador. Todo funciona sin conexión, salvo los botones **Copiar** de las plantillas completas (usan `fetch`). Si abres el archivo directamente, esos botones abren la plantilla en otra pestaña. Para probarlos localmente:

```bash
python3 -m http.server 8000
# y abre http://localhost:8000
```

## Publicación en GitHub Pages

1. Crea el repositorio público `IAENDOCENCIA` en la cuenta `calderonf`.
2. Sube el contenido a la rama `main`:
   ```bash
   git remote add origin https://github.com/calderonf/IAENDOCENCIA.git
   git push -u origin main
   ```
3. En **Settings → Pages**, elige **Deploy from a branch**, rama `main`, carpeta `/(root)`.
4. La dirección será `https://calderonf.github.io/IAENDOCENCIA/`.

El archivo `.nojekyll` hace que GitHub Pages sirva los `.md` tal cual, lo necesario para que los botones de copiar lean las plantillas.

## Privacidad

No cargues nombres, códigos, correos ni notas de estudiantes, ni información institucional reservada, en herramientas de IA públicas. El generador del contexto del curso funciona solo en el navegador y no envía datos a ningún servidor.

## Créditos y licencia

Contenidos basados en los capítulos 9 y 10 del libro *Inteligencia artificial generativa en la educación: una guía para estudiantes, docentes e instituciones* (Calderón, Gerlein y Parra, Pontificia Universidad Javeriana, en preparación). Materiales complementarios del libro: <https://github.com/calderonf/IA_GENERATIVA_EN_LA_EDUCACION>.

Material con fines formativos. Se sugiere la licencia [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.es).
