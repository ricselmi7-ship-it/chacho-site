const MESI_SHORT = [
  "GEN",
  "FEB",
  "MAR",
  "APR",
  "MAG",
  "GIU",
  "LUG",
  "AGO",
  "SET",
  "OTT",
  "NOV",
  "DIC",
];

const MESI_LONG = [
  "gennaio",
  "febbraio",
  "marzo",
  "aprile",
  "maggio",
  "giugno",
  "luglio",
  "agosto",
  "settembre",
  "ottobre",
  "novembre",
  "dicembre",
];

const GIORNI_LONG = [
  "domenica",
  "lunedì",
  "martedì",
  "mercoledì",
  "giovedì",
  "venerdì",
  "sabato",
];

export function formatDataIt(iso: string): string {
  const d = new Date(iso);
  const day = String(d.getDate()).padStart(2, "0");
  return `${day} ${MESI_SHORT[d.getMonth()]} ${d.getFullYear()}`;
}

export function formatGiorno(iso: string): string {
  return String(new Date(iso).getDate()).padStart(2, "0");
}

export function formatMese(iso: string): string {
  return MESI_SHORT[new Date(iso).getMonth()];
}

export function formatAnno(iso: string): string {
  return String(new Date(iso).getFullYear());
}

export function formatDataLunga(iso: string): string {
  const d = new Date(iso);
  return `${GIORNI_LONG[d.getDay()]} ${d.getDate()} ${MESI_LONG[d.getMonth()]} ${d.getFullYear()}`;
}

export function formatLuogo(e: { luogo: string; citta: string }): string {
  return `${e.luogo} — ${e.citta}`;
}
