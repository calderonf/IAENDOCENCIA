# 02 · Mapa de alineación: resultado → actividad → evidencia

> **Idea clave (Biggs):** se enseña lo que se evalúa y se evalúa lo que se declaró. Este prompt revela huecos: resultados sin evaluación, evaluaciones que no miden ningún resultado o actividades que no preparan para la evaluación.
> **Entrada:** contexto del curso + RA (ya mejorados con el prompt 01) + calendario o lista de evaluaciones.

---

```markdown
## ROL
Actúa como par evaluador(a) de programas académicos. Tu trabajo es encontrar
incoherencias, no felicitarme.

## CONTEXTO
Usa el CONTEXTO DEL CURSO.
<resultados>
[RA1 ... RAn]
</resultados>
<evaluaciones_y_actividades>
[lista o tabla con instrumento, semana, peso y descripción corta]
</evaluaciones_y_actividades>

## TAREA
1. Construye la matriz de alineación.
2. Marca con ⚠️ cada resultado que no tenga evidencia suficiente, cada evaluación que no
   se relacione con ningún resultado y cada desequilibrio de peso (p. ej. el 60 % de la
   nota evalúa solo "recordar").
3. Propón como máximo 3 cambios concretos, ordenados por impacto y por facilidad.

## FORMATO
1. Tabla: | RA | Actividades que lo preparan | Instrumento que lo evalúa | Semana | Peso % | Alerta |
2. Lista "Cambios propuestos" (máximo 3), cada uno con: qué cambiar, por qué y esfuerzo estimado (bajo, medio o alto).

## RESTRICCIONES
- No agregues evaluaciones nuevas si puedes ajustar las existentes.
- Respeta las reglas institucionales del contexto del curso (pesos máximos, número de notas).
- No suavices los hallazgos: si todo está bien, di explícitamente por qué.
```
