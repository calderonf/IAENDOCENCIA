(() => {
  // --- Almacenamiento seguro (puede no estar disponible) ---
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* sin almacenamiento */ } },
    del(k) { try { localStorage.removeItem(k); } catch { /* sin almacenamiento */ } }
  };

  // --- Navegación por capítulos ---
  const chapters = [...document.querySelectorAll('.chapter')];
  const previous = document.querySelector('#previous-chapter');
  const next = document.querySelector('#next-chapter');
  const counter = document.querySelector('#chapter-counter');
  const progress = document.querySelector('#progress-bar');
  let current = 0;

  const setCurrent = (index, scroll = false) => {
    current = Math.max(0, Math.min(index, chapters.length - 1));
    counter.textContent = String(current + 1).padStart(2, '0') + ' / ' + String(chapters.length).padStart(2, '0');
    progress.style.width = (((current + 1) / chapters.length) * 100) + '%';
    previous.disabled = current === 0;
    next.disabled = current === chapters.length - 1;
    if (scroll) chapters[current].scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  previous.addEventListener('click', () => setCurrent(current - 1, true));
  next.addEventListener('click', () => setCurrent(current + 1, true));
  document.addEventListener('keydown', e => {
    if (e.target.closest('input, textarea, select')) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); setCurrent(current + 1, true); }
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); setCurrent(current - 1, true); }
  });
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
    const index = chapters.indexOf(document.querySelector(link.getAttribute('href')));
    if (index >= 0) setCurrent(index);
  }));
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setCurrent(chapters.indexOf(visible.target));
  }, { threshold: [.3, .6] });
  chapters.forEach(c => observer.observe(c));

  // --- Copiar al portapapeles ---
  const flash = (button, text) => {
    const original = button.textContent;
    button.textContent = text;
    setTimeout(() => { button.textContent = original; }, 1600);
  };
  const copyText = async (text, button) => {
    try { await navigator.clipboard.writeText(text); flash(button, '¡Copiado!'); }
    catch { window.prompt('Copia este contenido:', text); }
  };
  document.querySelectorAll('[data-copy-target]').forEach(button => button.addEventListener('click', () => {
    const target = document.querySelector('#' + button.dataset.copyTarget);
    if (target) copyText(target.innerText.trim(), button);
  }));

  // Copia los bloques ```markdown de una plantilla del kit (requiere servirse por http/https)
  document.querySelectorAll('[data-copy-file]').forEach(button => button.addEventListener('click', async () => {
    const file = button.dataset.copyFile;
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(response.status);
      const text = await response.text();
      const blocks = [...text.matchAll(/```markdown\n([\s\S]*?)```/g)].map(m => m[1].trim());
      await copyText(blocks.length ? blocks.join('\n\n---\n\n') : text, button);
    } catch {
      window.open(file, '_blank', 'noopener');
    }
  }));

  // --- Pestañas de Bloom ---
  const tabs = [...document.querySelectorAll('.bloom-tabs [role="tab"]')];
  const selectTab = tab => {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault(); e.stopPropagation();
        const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        selectTab(n); n.focus();
      }
    });
  });
  if (tabs.length) selectTab(tabs[0]);

  // --- Generador del contexto del curso ---
  const form = document.querySelector('#contexto-form');
  const output = document.querySelector('#contexto-output code');
  const KEY = 'iaendocencia-contexto';
  const example = {
    asignatura: 'Introducción a la Analítica de Datos con Python',
    programa: 'Ingeniería (electiva abierta a otras carreras)',
    nivel: 'pregrado, 4.º semestre', creditos: '3', semanas: '16', modalidad: 'presencial', n: '30',
    saben: 'Variables, condicionales, ciclos y funciones en Python; media, varianza y correlación.',
    dificultades: 'No revisan la calidad de los datos antes de analizar; confunden correlación con causalidad; gráficos sin títulos ni unidades.',
    ra: 'Conocer las librerías de Python para análisis de datos.\nEntender la estadística descriptiva.\nFamiliarizarse con la visualización de datos.',
    evaluacion: 'Parcial 1 (30 %), Parcial 2 (30 %), Proyecto final en Jupyter (40 %).',
    recursos: 'Python con pandas y matplotlib en Google Colab; datos abiertos (datos.gov.co). Ninguna evaluación puede superar el 40 %.',
    postura: 'intermedia (permitida con declaración, excepto en evaluaciones en clase)'
  };
  const v = (x, ph) => (x && x.trim()) ? x.trim() : ph;
  const render = () => {
    const d = Object.fromEntries(new FormData(form).entries());
    const ra = v(d.ra, '[RA1]\n[RA2]\n[RA3]').split('\n').filter(Boolean).map((r, i) => `${i + 1}. ${r.trim()}`).join('\n');
    output.textContent =
`# CONTEXTO DEL CURSO

## Identificación
- Asignatura: ${v(d.asignatura, '[nombre]')}
- Programa: ${v(d.programa, '[programa]')}
- Nivel: ${v(d.nivel, '[nivel]')}
- Créditos: ${v(d.creditos, '[n]')} · Semanas: ${v(d.semanas, '[n]')} · Modalidad: ${d.modalidad || 'presencial'}

## Estudiantes
- Número aproximado: ${v(d.n, '[n]')}
- Lo que ya saben: ${v(d.saben, '[conceptos y herramientas previas]')}
- Dificultades frecuentes: ${v(d.dificultades, '[errores o vacíos frecuentes]')}

## Resultados de aprendizaje vigentes
${ra}

## Evaluación actual
${v(d.evaluacion, '[instrumentos y pesos]')}

## Recursos y reglas institucionales
${v(d.recursos, '[software, datos, bibliografía base, reglas]')}

## Uso de IA por parte de estudiantes
Postura: ${d.postura}

> Usa este contexto en todas tus respuestas sobre este curso.
> Si necesitas información que no está aquí, pregúntame antes de suponerla.`;
    store.set(KEY, JSON.stringify(d));
  };
  const fill = data => {
    [...form.elements].forEach(el => { if (el.name && data[el.name] !== undefined) el.value = data[el.name]; });
    render();
  };
  if (form) {
    form.addEventListener('input', render);
    document.querySelector('#contexto-ejemplo').addEventListener('click', () => fill(example));
    document.querySelector('#contexto-limpiar').addEventListener('click', () => { form.reset(); store.del(KEY); render(); });
    document.querySelector('#contexto-descargar').addEventListener('click', () => {
      const blob = new Blob([output.textContent], { type: 'text/markdown;charset=utf-8' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'contexto-del-curso.md';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    });
    let saved = null;
    try { saved = JSON.parse(store.get(KEY) || 'null'); } catch { saved = null; }
    saved ? fill(saved) : render();
  }

  // --- Lista de verificación del taller ---
  document.querySelectorAll('[data-check]').forEach(box => {
    const k = 'iaendocencia-' + box.dataset.check;
    box.checked = store.get(k) === '1';
    box.addEventListener('change', () => store.set(k, box.checked ? '1' : '0'));
  });

  // --- Tema ---
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = store.get('iaendocencia-theme');
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) document.body.classList.add('dark');
  document.querySelector('#theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    store.set('iaendocencia-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  setCurrent(0);
})();
