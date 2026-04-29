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
  { id: 'meister',    label: 'Über uns' },
  { id: 'ablauf',     label: 'Ablauf' },
  { id: 'gebiet',     label: 'Gebiet' },
  { id: 'insta',      label: 'Instagram' },
  { id: 'kontakt',    label: 'Kontakt' },
];

export const services = [
  {
    num: '01',
    title: 'Glasreinigung',
    desc: 'Fenster, Rahmen und Fensterbänke — innen und außen. Vordächer, Schaufenster und Wintergärten. Wir sorgen für den richtigen Durchblick.',
    items: [
      'Fensterreinigung innen & außen',
      'Rahmen & Fensterbänke',
      'Schaufenster & Eingangstüren',
      'Vordächer & Wintergärten',
    ],
    icon: 'window',
  },
  {
    num: '02',
    title: 'Unterhaltsreinigung',
    desc: 'Haus- und Wohnungsreinigung nach Hausfrauenart — professionell ausgeführt. Plus Grundreinigung, wenn der Boden mehr braucht als einen Wisch.',
    items: [
      'Haus- & Wohnungsreinigung',
      'Büro- & Praxisreinigung',
      'Grundreinigung',
      'Wöchentlich, 14-tägig oder nach Absprache',
    ],
    icon: 'house',
  },
  {
    num: '03',
    title: 'Treppenhausreinigung',
    desc: 'Der Hauseingang und das Treppenhaus sind das Aushängeschild Ihrer Immobilie. Wir übernehmen die professionelle Reinigung von Treppenhäusern und Gemeinschaftsflächen — vom Dach bis zum Keller.',
    items: [
      'Wöchentliche Reinigung',
      '14-tägige Reinigung',
      'Vom Dach bis zum Keller',
      'Für Hausverwaltungen, WEG & Privatkunden',
    ],
    icon: 'stairs',
  },
  {
    num: '04',
    title: 'Sonderleistungen & Winterdienst',
    desc: 'Auf Anfrage und je nach Bedarf — von der einmaligen Terrassenreinigung bis zum Winterdienst vor der Saison. Sprechen Sie uns an.',
    items: [
      'Terrassen- & Balkonreinigung',
      'Winterdienst',
      'Bauend- & Renovierungsreinigung',
      'Einzugs- & Auszugsreinigung',
    ],
    icon: 'circle',
  },
];

export const steps = [
  { num: '01', title: 'Anfragen',          text: 'Sie melden sich per Anruf, WhatsApp oder E-Mail und beschreiben kurz, worum es geht. Innerhalb eines Werktags melde ich mich persönlich zurück.' },
  { num: '02', title: 'Termin & Angebot',  text: 'Wir vereinbaren einen Termin vor Ort, schauen uns die Räume gemeinsam an und stimmen Ihre Wünsche ab. Sie bekommen ein klares, schriftliches Angebot — ohne Kleingedrucktes.' },
  { num: '03', title: 'Reinigen',          text: 'Im vereinbarten Turnus sind wir pünktlich vor Ort, mit eigenem Material und der nötigen Sorgfalt. Sie sehen, dass wir da waren.' },
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
