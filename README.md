# Gonsior Gebäudereinigung — One Pager

Statische One-Page-Webseite für **Gonsior Gebäudereinigung Essen** (Inhaber: Manuel Gonsior).

## Lokal anschauen

Einfach ein Mini-HTTP-Server im Projektordner starten, dann im Browser öffnen:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

Oder einfach `index.html` doppelklicken.

## Auf GitHub Pages veröffentlichen

1. Neues GitHub-Repo anlegen, z. B. `gonsior-gebaeudereinigung`.
2. Diesen Ordner pushen:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<USER>/gonsior-gebaeudereinigung.git
   git push -u origin main
   ```

3. Auf GitHub: **Settings → Pages → Source: Deploy from a branch → main / root → Save**.
4. Nach ~1 Minute ist die Seite live unter
   `https://<USER>.github.io/gonsior-gebaeudereinigung/`.

### Eigene Domain

Wenn ihr eine Domain habt (z. B. `gonsior-gebaeudereinigung.de`):

1. Datei `CNAME` mit dem Domainnamen anlegen (eine Zeile, kein Protokoll).
2. Beim DNS-Anbieter einen `CNAME` auf `<USER>.github.io` setzen.
3. In GitHub Pages-Settings die Domain eintragen, „Enforce HTTPS" aktivieren.

## Struktur

```
.
├── index.html        ← komplette Seite (semantisch, A11y-freundlich)
├── styles.css        ← Design-Tokens + alle Sektionen
├── script.js         ← kleine Sprinkles (Nav-Highlight, Scroll-Reveal)
├── assets/
│   ├── logo.jpg      ← Original-Logo aus alter Seite
│   └── hero-room.jpg ← Original-Hero aus alter Seite
├── .nojekyll         ← weist GitHub Pages an, Dateien 1:1 auszuliefern
└── README.md
```

## Inhalte ändern

Alle Texte stehen direkt in `index.html` — kein CMS, kein Build. Suche
einfach nach dem Text und passe ihn an.

- **Telefonnummer ändern:** im HTML nach `0152 29149388` und `+4915229149388` suchen.
- **E-Mail ändern:** nach `dienstleistung-gonsior@web.de` suchen.
- **Adresse ändern:** nach `Bocholder Straße 23` suchen.
- **Stadtteile (Servicegebiet) ergänzen:** Sektion `<ul class="districts">`.

## Design-Notizen

- **Farben:** Forest-Green vom Logo (oklch ~0.45 0.115 150) als Akzent,
  ansonsten warm-weiße Papier-Töne mit minimalem Grünstich.
- **Typografie:** *Source Serif 4* für Display, *Hanken Grotesk* für Body,
  *JetBrains Mono* für Labels (alle via Google Fonts).
- **Mobile-first**, Tastatur-bedienbar, `prefers-reduced-motion` respektiert.
- Keine externen Tracker, keine Cookies, kein Bauschritt — pures HTML/CSS/JS.
