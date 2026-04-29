// Single source of truth fuer alle Inhalte der Seite.
// Texte hier aendern → werden automatisch in den Komponenten verwendet.

export const company = {
  name: 'Gonsior Gebäudereinigung',
  shortName: 'Gonsior',
  ownerFirst: 'Manuel',
  ownerLast: 'Gonsior',
  city: 'Essen',
  district: 'Bocholder',
  street: 'Bocholder Straße 23',
  zip: '45355',
  phone: '0152 29149388',
  phoneIntl: '+4915229149388',
  email: 'dienstleistung-gonsior@web.de',
  instagram: 'ggd_gebaeudereinigung',
  instagramUrl: 'https://www.instagram.com/ggd_gebaeudereinigung',
  whatsappBase:
    'https://wa.me/4915229149388?text=Hallo%20Herr%20Gonsior%2C%20ich%20interessiere%20mich%20f%C3%BCr%20...',
  hwk: 'Mitglied der Handwerkskammer Düsseldorf',
};

export const nav = [
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'meister',    label: 'Inhaber' },
  { id: 'ablauf',     label: 'Ablauf' },
  { id: 'gebiet',     label: 'Gebiet' },
  { id: 'insta',      label: 'Instagram' },
  { id: 'kontakt',    label: 'Kontakt' },
];

export const services = [
  {
    num: '01',
    title: 'Glasreinigung',
    desc: 'Fenster, Rahmen, Fensterbänke innen und außen, Vordächer und Schaufenster. Streifenfrei, gründlich, sichtbar besser als die Lösung mit Eimer und Spüli.',
    items: [
      'Fenster & Glasflächen',
      'Rahmen & Fensterbänke',
      'Schaufenster & Eingangstüren',
      'Vordächer & Wintergärten',
    ],
    icon: 'window',
  },
  {
    num: '02',
    title: 'Unterhaltsreinigung',
    desc: 'Die regelmäßige Pflege von Wohnungen, Praxen und Büros — in Frequenz und Umfang nach Ihrem Takt. Plus Grundreinigung, wenn der Boden mehr braucht als ein Wisch.',
    items: [
      'Wohnungs- & Hausreinigung',
      'Büro- & Praxisreinigung',
      'Grundreinigung',
      'Täglich, wöchentlich, 14-tägig',
    ],
    icon: 'house',
  },
  {
    num: '03',
    title: 'Treppenhausreinigung',
    desc: 'Der Hauseingang ist das Aushängeschild der Immobilie. Wir kümmern uns um Treppenhäuser, Gemeinschaftsflächen und Nebenräume — vom Dach bis zum Keller, im festen Turnus.',
    items: [
      'Wöchentliche Reinigung',
      '14-tägige Reinigung',
      'Aufzug, Briefkasten, Lichtschacht',
      'Speziell für Hausverwaltungen & WEG',
    ],
    icon: 'stairs',
  },
  {
    num: '04',
    title: 'Sonderleistungen',
    desc: 'Was nicht in eine Schublade passt, planen wir auf Zuruf — von der einmaligen Terrassenreinigung bis zum Winterdienst vor der Saison. Sprechen Sie uns an.',
    items: [
      'Terrassen- & Balkonreinigung',
      'Winterdienst',
      'Bauend- & Renovierungsreinigung',
      'Einzug, Auszug, Übergabe',
    ],
    icon: 'circle',
  },
];

export const steps = [
  { num: '01', title: 'Anfragen',          text: 'Anruf, WhatsApp oder Formular. Sie sagen, worum es geht — ich melde mich innerhalb eines Werktags zurück.' },
  { num: '02', title: 'Termin & Angebot',  text: 'Wir schauen vor Ort vorbei, klären den Bedarf und machen ein verbindliches Angebot — schriftlich, klar, ohne Kleingedrucktes.' },
  { num: '03', title: 'Reinigen',          text: 'Im vereinbarten Turnus erscheinen wir pünktlich, mit eigenem Material — und dem klaren Anspruch, dass es Ihnen auffällt, dass wir da waren.' },
];

export const districts = [
  'Bocholder Heide','Altenessen','Borbeck','Bedingrade','Frohnhausen','Holsterhausen','Schönebeck','Bochold','Vogelheim','Stoppenberg','Gerschede','Dellwig','Essen-Innenstadt','Mülheim a. d. Ruhr','Oberhausen-Süd','Gelsenkirchen-Süd',
];

// Instagram-Posts (manuell pflegbar).
// Wenn ihr spaeter Behold.so anbindet, ueberschreibt das Widget diese Liste.
// Bis dahin: Stadtteil/Service-Tags + Datum sind ehrlich, kein Fake-Like-Counter.
export const instagramPosts = [
  { tag: 'Treppenhaus',     date: 'Vor kurzem',         tone: 'deep'   },
  { tag: 'Glasreinigung',   date: 'Letzte Woche',       tone: 'mid'    },
  { tag: 'Hausverwaltung',  date: 'Vor 2 Wochen',       tone: 'ink'    },
  { tag: 'Sonderauftrag',   date: 'Vor 3 Wochen',       tone: 'deep'   },
  { tag: 'Schaufenster',    date: 'Vor einem Monat',    tone: 'mid'    },
];
