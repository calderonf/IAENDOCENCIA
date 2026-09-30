# 09 · De una lectura a una guía de clase y una presentación

> **Encadenamiento de 3 prompts** (tomado del flujo del capítulo 10 del libro *IA generativa en la educación*): síntesis → guía para el estudiante → esquema de diapositivas.
> **Mejor herramienta:** NotebookLM o un Proyecto con el PDF cargado, porque la respuesta queda anclada a la lectura y no a la "memoria" del modelo.
> **Derechos de autor:** usa lecturas que tus estudiantes ya tienen legalmente (biblioteca, acceso abierto). No subas libros completos a servicios públicos.

---

## Paso 1 · Síntesis anclada en la lectura

```markdown
Usa el CONTEXTO DEL CURSO y SOLO el documento adjunto [título, autor, año].
Objetivo de la sesión: que los estudiantes puedan [RA o propósito].
1. Identifica las 5–7 ideas centrales. Para cada una: explicación en 2–3 oraciones,
   un ejemplo del contexto local y la página o sección de la lectura donde aparece.
2. Señala qué conceptos previos necesitan los estudiantes para entenderla.
3. Propón una progresión para presentarlas en [40] minutos.
Si algo no está en el documento, dilo; no completes con conocimiento externo.
```

## Paso 2 · Guía de trabajo para el estudiante

```markdown
Con la síntesis anterior, elabora una guía de 2 páginas para el estudiante con:
- Propósito de la sesión (1 frase) y lo que debe saber antes.
- 5 preguntas de lectura guiada (de comprender a analizar).
- Un ejercicio de aplicación breve con datos reales o locales.
- Una pregunta de reflexión que no se pueda responder sin haber leído el texto
  (que exija citar una página o un argumento específico).
- Glosario de 6–8 términos.
Formato: Markdown, lenguaje claro, en segunda persona.
```

## Paso 3 · Esquema de presentación

```markdown
Ahora propone un esquema de [12] diapositivas para la clase:
- 1: título y lo que sabrán al final.
- 2–3: motivación (por qué importa en su vida profesional).
- Una idea principal por diapositiva, con máximo 3 viñetas y una sugerencia visual
  (gráfico, diagrama o tabla) que no sea decorativa.
- Una diapositiva de actividad en clase a la mitad.
- Cierre: síntesis y pregunta puente a la próxima sesión.
Incluye notas del orador de 2–3 frases por diapositiva.
Entrega el resultado en Markdown (en la Sesión 5 lo convertiremos en presentación).
```

---

**Criterio de diseño:** una idea por diapositiva no es una preferencia estética. Responde a la carga cognitiva (Sweller): la memoria de trabajo es limitada y el texto sobrante compite con lo importante.
