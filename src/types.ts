export type Evento = {
  slug: string;
  titolo: string;
  sottotitolo?: string;
  data: string;
  orario: string;
  luogo: string;
  citta: string;
  descrizione: string;
  artisti: string[];
  partner?: string[];
  immagine: string | null;
  linkTicket: string | null;
  tags?: string[];
  storico: boolean;
};

export type Artista = {
  slug: string;
  nome: string;
  ruolo: string;
  bio: string;
  immagine: string;
  link?: string;
};

export type GalleryItem = {
  id: string;
  evento: string;
  data: string;
  luogo: string;
  descrizione: string;
  tipo: "foto" | "video";
  src: string;
  cover?: boolean;
};

export type GalleryEvent = {
  evento: string;
  data: string;
  luogo: string;
  descrizione: string;
  cover: GalleryItem;
  items: GalleryItem[];
};
