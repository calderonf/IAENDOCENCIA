# Actividad: "Audita al analista artificial"

> Ejemplo listo para usar de la **variante C** (la IA como objeto de análisis) del prompt 05.
> Áreas: analítica de datos con Python + un concepto básico de economía (la ley de Engel).
> Resultado de aprendizaje: *Analizar un conjunto de datos con Python, detectando problemas de calidad de datos y justificando conclusiones que los datos sí permiten afirmar.*
> Datos ficticios, en millones de pesos por mes: [`hogares.csv`](hogares.csv).

---

## Consigna para el estudiante

Una fundación recogió datos de 10 hogares y le pidió a una IA que los analizara. En el diccionario de datos dice: **`ingreso = 0` significa "el hogar no respondió"**.
La respuesta de la IA tiene **tres errores**: uno de datos, uno de interpretación económica y uno de razonamiento.

1. Encuentra los tres errores y explica cada uno en una o dos frases.
2. Corrige el código y rehaz el análisis.
3. En máximo 150 palabras, escribe la conclusión correcta que los datos sí permiten.
4. Declara si usaste IA en tu revisión y para qué.

### Respuesta de la "IA analista" (con errores)

```python
import pandas as pd
df = pd.read_csv("hogares.csv")
print(df["ingreso"].mean())                         # 3.54
print(df["ingreso"].corr(df["gasto_alimentos"]))    # 0.87
```

> El ingreso promedio de los hogares es **3,54 millones**. Existe una correlación positiva de **0,87** entre ingreso y gasto en alimentos: **los hogares con más ingresos destinan una mayor proporción de su dinero a la comida**.
> Por lo tanto, **aumentar el ingreso de los hogares causa que dediquen una parte mayor de su presupuesto a alimentarse**, y esta conclusión aplica a los hogares colombianos en general.

---

## Nota para el docente (retirar antes de entregar)

| # | Error | Corrección |
|---|---|---|
| 1 · Datos | Trata el código `0` ("no respondió") como un ingreso real. | Filtrar ese hogar: ingreso promedio **3,93** (no 3,54); correlación **0,98** (no 0,87). |
| 2 · Economía | Confunde gasto **absoluto** con **proporción** del ingreso. El gasto en alimentos sube con el ingreso, pero su participación **baja**: de 42 % a 17 % (ley de Engel). | Calcular `participación = gasto / ingreso × 100`; su correlación con el ingreso es **−0,95**. |
| 3 · Razonamiento | Afirma causalidad y generaliza a todo el país con 9 hogares que no son una muestra aleatoria. | Correlación no implica causalidad; la muestra no es representativa. Solo describe estos hogares. |

**Código corregido**

```python
import pandas as pd
df = pd.read_csv("hogares.csv")
d = df[df["ingreso"] > 0].copy()                          # 0 = no respondió
d["participacion"] = d["gasto_alimentos"] / d["ingreso"] * 100

print(round(d["ingreso"].mean(), 2))                             # 3.93
print(round(d["ingreso"].corr(d["gasto_alimentos"]), 2))         # 0.98
print(round(d["ingreso"].corr(d["participacion"]), 2))           # -0.95
print(d[["hogar", "ingreso", "participacion"]].round(1))
```

**Conclusión esperada:** en estos 9 hogares, el gasto en alimentos aumenta con el ingreso, pero la proporción del ingreso destinada a alimentos disminuye (de alrededor del 42 % al 17 %), un patrón consistente con la ley de Engel. Con estos datos no se puede afirmar causalidad ni generalizar al país.

**Para discutir en clase**
- ¿Por qué el error 1 no se ve a simple vista? ¿Qué hábito lo habría detectado (`describe()`, revisar el diccionario de datos)?
- ¿Qué parte de la respuesta sonaba más convincente y por qué?
- ¿Cómo le habrías escrito el prompt a la IA para reducir estos errores? (Piensa en rol, contexto, tarea, formato y restricciones.)

*Cifras verificadas ejecutando el código con pandas.*
