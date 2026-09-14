// Visuele editor voor /beheer: je typt en klikt gewoon (vet, kopjes, lijsten, links, tabellen),
// onder water wordt het opgeslagen als markdown in de gekoppelde <textarea>.
// markdown → HTML met `marked` bij het laden; HTML → markdown met `turndown` (+GFM voor tabellen) bij elke wijziging.

import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import { TableKit } from '@tiptap/extension-table';
import { marked } from 'marked';
import TurndownService from 'turndown';
// @ts-ignore – geen types
import { gfm } from 'turndown-plugin-gfm';

const turndown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced', emDelimiter: '*' });
turndown.use(gfm);
// Lege alinea's die TipTap achterlaat niet als "<p></p>" laten staan
turndown.addRule('legeAlinea', { filter: (node) => node.nodeName === 'P' && !node.textContent?.trim() && !node.querySelector('img,br'), replacement: () => '\n\n' });
// Compacte lijstitems ("- tekst", "1. tekst") in plaats van turndowns standaard met extra spaties
turndown.addRule('lijstItem', {
  filter: 'li',
  replacement: (content, node, options) => {
    content = content.replace(/^\n+/, '').replace(/\n+$/, '\n').replace(/\n/gm, '\n   ');
    const parent = node.parentNode as HTMLElement;
    let prefix = options.bulletListMarker + ' ';
    if (parent.nodeName === 'OL') {
      const start = parent.getAttribute('start');
      const index = Array.prototype.indexOf.call(parent.children, node);
      prefix = (start ? Number(start) + index : index + 1) + '. ';
    }
    return prefix + content + (node.nextSibling && !/\n$/.test(content) ? '\n' : '');
  },
});

// TipTap-HTML opschonen voordat turndown ermee aan de slag gaat:
// - <colgroup> en style-attributen weg (anders herkent de GFM-tabelregel de kopregel niet)
// - <p> binnen tabelcellen en lijstitems uitpakken (anders ontstaan "losse" lijsten en lege regels in cellen)
function schoonHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  doc.querySelectorAll('colgroup').forEach((el) => el.remove());
  doc.querySelectorAll('[style]').forEach((el) => el.removeAttribute('style'));
  doc.querySelectorAll('td, th, li').forEach((cel) => {
    const ps = Array.from(cel.children).filter((c) => c.nodeName === 'P');
    if (ps.length && ps.length === cel.children.length) {
      cel.innerHTML = ps.map((p) => p.innerHTML).join(cel.nodeName === 'LI' ? '<br>' : '<br>');
    }
  });
  // Tabel zonder kopregel: eerste rij tot kopregel maken, anders kan markdown er niets mee
  doc.querySelectorAll('table').forEach((t) => {
    const eerste = t.querySelector('tr');
    if (eerste && !eerste.querySelector('th')) eerste.querySelectorAll('td').forEach((td) => { const th = doc.createElement('th'); th.innerHTML = td.innerHTML; td.replaceWith(th); });
  });
  return doc.body.innerHTML;
}

marked.setOptions({ gfm: true, breaks: false });

type Knop = { label: string; titel: string; actie: (e: Editor) => void; actief?: (e: Editor) => boolean };

export function maakEditor(textarea: HTMLTextAreaElement) {
  const wrap = document.createElement('div');
  wrap.className = 'rte';
  const balk = document.createElement('div');
  balk.className = 'rte-balk';
  const inhoud = document.createElement('div');
  inhoud.className = 'rte-inhoud';
  wrap.append(balk, inhoud);
  textarea.insertAdjacentElement('beforebegin', wrap);
  textarea.classList.add('rte-bron');
  textarea.hidden = true;

  let sync = true; // false tijdens setContent, om lussen te voorkomen
  const editor = new Editor({
    element: inhoud,
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] }, codeBlock: false, code: false, blockquote: {}, link: { openOnClick: false, autolink: true, defaultProtocol: 'https' } }),
      TableKit.configure({ table: { resizable: false } }),
    ],
    content: naarHtml(textarea.value),
    onUpdate: ({ editor }) => {
      if (!sync) return;
      textarea.value = naarMarkdown(editor.getHTML());
    },
    onSelectionUpdate: () => updateKnoppen(),
    onTransaction: () => updateKnoppen(),
  });

  const knoppen: Knop[] = [
    { label: 'B', titel: 'Vet', actie: (e) => e.chain().focus().toggleBold().run(), actief: (e) => e.isActive('bold') },
    { label: 'I', titel: 'Cursief', actie: (e) => e.chain().focus().toggleItalic().run(), actief: (e) => e.isActive('italic') },
    { label: 'Kop', titel: 'Kopje', actie: (e) => e.chain().focus().toggleHeading({ level: 2 }).run(), actief: (e) => e.isActive('heading', { level: 2 }) },
    { label: 'Subkop', titel: 'Subkopje', actie: (e) => e.chain().focus().toggleHeading({ level: 3 }).run(), actief: (e) => e.isActive('heading', { level: 3 }) },
    { label: '• Lijst', titel: 'Opsomming', actie: (e) => e.chain().focus().toggleBulletList().run(), actief: (e) => e.isActive('bulletList') },
    { label: '1. Lijst', titel: 'Genummerde lijst', actie: (e) => e.chain().focus().toggleOrderedList().run(), actief: (e) => e.isActive('orderedList') },
    { label: 'Link', titel: 'Link invoegen of wijzigen', actie: (e) => link(e), actief: (e) => e.isActive('link') },
    { label: 'Tabel', titel: 'Tabel invoegen (2 kolommen, met kopregel)', actie: (e) => e.chain().focus().insertTable({ rows: 3, cols: 2, withHeaderRow: true }).run() },
    { label: '+ Rij', titel: 'Rij toevoegen onder de cursor', actie: (e) => e.chain().focus().addRowAfter().run() },
    { label: '+ Kolom', titel: 'Kolom toevoegen rechts van de cursor', actie: (e) => e.chain().focus().addColumnAfter().run() },
    { label: '− Rij', titel: 'Rij verwijderen', actie: (e) => e.chain().focus().deleteRow().run() },
    { label: '− Kolom', titel: 'Kolom verwijderen', actie: (e) => e.chain().focus().deleteColumn().run() },
    { label: '↶', titel: 'Ongedaan maken', actie: (e) => e.chain().focus().undo().run() },
    { label: '↷', titel: 'Opnieuw', actie: (e) => e.chain().focus().redo().run() },
  ];
  const knopEls: { k: Knop; el: HTMLButtonElement }[] = [];
  for (const k of knoppen) {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = k.label;
    b.title = k.titel;
    b.className = 'rte-knop' + (k.label.startsWith('+') || k.label.startsWith('−') ? ' rte-tabelknop' : '');
    b.addEventListener('mousedown', (ev) => ev.preventDefault()); // focus in editor houden
    b.addEventListener('click', () => k.actie(editor));
    balk.appendChild(b);
    knopEls.push({ k, el: b });
  }
  const bronKnop = document.createElement('button');
  bronKnop.type = 'button';
  bronKnop.className = 'rte-knop rte-bronknop';
  bronKnop.textContent = 'Markdown';
  bronKnop.title = 'Schakel tussen visueel bewerken en de markdown-brontekst';
  bronKnop.addEventListener('click', () => {
    const naarBron = textarea.hidden;
    if (naarBron) {
      textarea.value = naarMarkdown(editor.getHTML());
      textarea.hidden = false;
      inhoud.hidden = true;
      bronKnop.classList.add('actief');
    } else {
      sync = false;
      editor.commands.setContent(naarHtml(textarea.value));
      sync = true;
      textarea.hidden = true;
      inhoud.hidden = false;
      bronKnop.classList.remove('actief');
    }
  });
  balk.appendChild(bronKnop);

  function updateKnoppen() {
    const inTabel = editor.isActive('table');
    for (const { k, el } of knopEls) {
      el.classList.toggle('actief', !!k.actief?.(editor));
      if (el.classList.contains('rte-tabelknop')) el.hidden = !inTabel;
    }
  }
  updateKnoppen();

  return {
    /** Nieuwe markdown in de editor laden (bij openen van een ander item). */
    zet(md: string) {
      sync = false;
      textarea.value = md;
      editor.commands.setContent(naarHtml(md));
      sync = true;
      if (!textarea.hidden) { textarea.hidden = true; inhoud.hidden = false; bronKnop.classList.remove('actief'); }
    },
    /** Actuele markdown (ook als de brontekst-weergave open staat). */
    lees(): string {
      return textarea.hidden ? naarMarkdown(editor.getHTML()) : textarea.value;
    },
    editor,
  };
}

function link(e: Editor) {
  const huidig = e.getAttributes('link').href as string | undefined;
  const url = window.prompt('Webadres (https://…). Leeg laten om de link te verwijderen.', huidig ?? 'https://');
  if (url === null) return;
  if (!url.trim() || url.trim() === 'https://') { e.chain().focus().extendMarkRange('link').unsetLink().run(); return; }
  const schoon = /^(https?:\/\/|mailto:|tel:)/i.test(url) ? url.trim() : `https://${url.trim()}`;
  if (e.state.selection.empty && !huidig) {
    e.chain().focus().insertContent(`<a href="${schoon}">${schoon.replace(/^https?:\/\//, '')}</a>`).run();
  } else {
    e.chain().focus().extendMarkRange('link').setLink({ href: schoon }).run();
  }
}

function naarHtml(md: string): string {
  const s = (md ?? '').trim();
  if (!s) return '<p></p>';
  return marked.parse(s) as string;
}
function naarMarkdown(html: string): string {
  return turndown.turndown(schoonHtml(html)).replace(/\n{3,}/g, '\n\n').trim() + '\n';
}
