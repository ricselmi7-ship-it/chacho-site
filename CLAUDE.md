# Progetto: Sito Vetrina Musicale

## Stack
- Astro (static site generator)
- Tailwind CSS
- TypeScript dove utile

## Stile visivo
- Dark minimal moderno — non esagerato, non "heavy metal"
- Palette: nero profondo #0C0C0C, bianco sporco #F0EDE8, 
  accento caldo #C8A97E (oro opaco) o #A78BFA (viola soft)
- Font titoli: qualcosa di editoriale (es. Playfair Display o DM Serif)
- Font corpo: Inter o DM Sans
- Tanto spazio bianco (anzi: nero), pochi elementi, grande impatto
- Ispirazione: resident advisor, boiler room, fabric london

## Struttura dati evento (eventi.json)
- slug (stringa unica)
- titolo
- data (ISO format)
- orario (es. "23:00 - 05:00")
- luogo (nome + città)
- descrizione (testo libero)
- artisti (array di nomi)
- immagine (path locale)
- linkTicket (opzionale)
- tags (es. ["techno", "club", "live"])

## Convenzioni
- Componenti in PascalCase
- Niente animazioni esagerate, solo transizioni sottili
- Mobile-first sempre
- Accessibilità: contrasti leggibili anche su dark
- Il sito deve essere aggiungibile facilmente da JSON
