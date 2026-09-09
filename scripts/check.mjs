// QA do portfolio. Roda sem dependencia: node scripts/check.mjs
import { profile, cases } from '../data/cases.js';
import { projects, projectsNote } from '../data/projects.js';

const errors = [];
const todos = [];
const LANGS = ['en', 'pt'];
const TEXT = ['headline', 'hero', 'context', 'challenge', 'learning'];
const LISTS = ['actions', 'outcome'];

function checkI18n(obj, path) {
  if (!obj || typeof obj !== 'object') return errors.push(`${path}: esperado objeto {en, pt}`);
  for (const l of LANGS) {
    if (!obj[l] || !String(obj[l]).trim()) errors.push(`${path}.${l}: vazio ou ausente`);
  }
  if (obj.en && obj.pt && obj.en === obj.pt && obj.en.split(' ').length > 4) {
    errors.push(`${path}: EN e PT identicos, escreva nativo em cada idioma`);
  }
  for (const l of LANGS) {
    const v = String(obj[l] || '');
    if (v.includes('—') || v.includes('–')) errors.push(`${path}.${l}: contem em dash, proibido pelo CLAUDE.md`);
    if (v.startsWith('TODO')) todos.push(`${path}.${l}: ${v}`);
  }
}

for (const f of ['headline', 'pitch', 'location', 'languages']) checkI18n(profile[f], `profile.${f}`);
if (!/^https:\/\/(www\.)?linkedin\.com\//.test(profile.linkedin)) errors.push('profile.linkedin invalido');
if (!/@/.test(profile.email)) errors.push('profile.email invalido');

const ids = new Set();
for (const c of cases) {
  const p = `case[${c.id}]`;
  if (!c.id || ids.has(c.id)) errors.push(`${p}: id ausente ou duplicado`);
  ids.add(c.id);
  for (const f of ['company', 'period']) if (!c[f]) errors.push(`${p}.${f}: ausente`);
  for (const f of ['role', 'location']) checkI18n(c[f], `${p}.${f}`);
  for (const f of TEXT) checkI18n(c[f], `${p}.${f}`);
  for (const f of LISTS) {
    if (!Array.isArray(c[f]) || c[f].length < 2) errors.push(`${p}.${f}: precisa de ao menos 2 itens`);
    else c[f].forEach((it, i) => checkI18n(it, `${p}.${f}[${i}]`));
  }
  if (!Array.isArray(c.tags) || !c.tags.length) errors.push(`${p}.tags: ausente`);
  if (!Array.isArray(c.metrics) || c.metrics.length > 3) errors.push(`${p}.metrics: use de 1 a 3 metricas`);
  else c.metrics.forEach((m, i) => {
    checkI18n(m.label, `${p}.metrics[${i}].label`);
    if (!m.value) errors.push(`${p}.metrics[${i}].value: ausente`);
    else if (String(m.value).startsWith('TODO')) todos.push(`${p}.metrics[${i}]: ${m.value}`);
  });
  const words = String(c.hero?.en || '').split(/\s+/).length;
  if (words > 18) errors.push(`${p}.hero.en: ${words} palavras, limite 18`);
  const hw = String(c.headline?.en || '').split(/\s+/).length;
  if (hw > 9) errors.push(`${p}.headline.en: ${hw} palavras, limite 9`);
  if (c.actions?.length > 5) errors.push(`${p}.actions: maximo 5 bullets`);
}

// projetos autorais migrados do portfolio anterior
checkI18n(projectsNote, 'projectsNote');
for (const pr of projects) {
  const q = `project[${pr.id}]`;
  checkI18n(pr.kicker, `${q}.kicker`);
  checkI18n(pr.summary, `${q}.summary`);
  if (!pr.title) errors.push(`${q}.title: ausente`);
  if (!pr.cover) errors.push(`${q}.cover: ausente`);
  for (const l of LANGS) if (!pr.pdf?.[l]) errors.push(`${q}.pdf.${l}: ausente`);
  for (const l of LANGS) if (!Array.isArray(pr.tags?.[l]) || !pr.tags[l].length) errors.push(`${q}.tags.${l}: ausente`);
}

if (cases.length < 5) console.log(`aviso: ${cases.length} de 5 cases escritos`);
if (todos.length) {
  console.log(`\n${todos.length} TODO(s) para o Felipe confirmar:`);
  todos.forEach(t => console.log('  - ' + t));
}
if (errors.length) {
  console.error(`\n${errors.length} erro(s):`);
  errors.forEach(e => console.error('  x ' + e));
  process.exit(1);
}
console.log('\nQA limpo: estrutura, paridade EN/PT e limites de texto ok.');
