const fmtLang = new Intl.DateTimeFormat('nl-NL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Amsterdam' });
export function datumLang(d: Date | string | undefined): string {
  if (!d) return '';
  return fmtLang.format(new Date(d));
}
export function isoDatum(d: Date | string): string {
  return new Date(d).toISOString().slice(0, 10);
}
