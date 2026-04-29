# Gonsior Gebäudereinigung — One-Pager

Editorial-Astro-Seite für **Gonsior Gebäudereinigung Essen** (Inhaber: Manuel Gonsior).

**Live:** https://tobiaskammer-de.github.io/gonsior-gebaeudereinigung/

```
src/
  pages/index.astro      ← Eine Seite, alle Sektionen.
  layouts/BaseLayout.astro
  components/            ← Header, Hero, Services, About, Process, Area,
                            Instagram, Contact, Footer
  data/site.js           ← Single source of truth: Texte, Telefon, Adresse
  styles/global.css      ← Alle Styles (Tokens, Sektionen, Mobile, Dark Quote)
public/
  assets/                ← Logo + Hero-Foto (aus Original-Seite übernommen)
  script.js              ← Sticky-Header, Scroll-Reveal, Mobile-Drawer
.github/workflows/
  deploy.yml             ← Auto-Deploy bei jedem Push auf `main`
```

---

## Lokal entwickeln

```bash
npm install
npm run dev          # http://localhost:5173
```

```bash
npm run build        # → dist/
npm run preview      # serviert dist/ lokal
```

---

## Inhalte ändern

99 % der Texte stehen in [`src/data/site.js`](src/data/site.js):

```js
phone:    '0152 29149388',
email:    'dienstleistung-gonsior@web.de',
street:   'Bocholder Straße 23',
…
services: [ { title, desc, items, icon }, … ]
districts: [ … ]            // Stadtteile im Servicegebiet
```

Ändert dort den Wert, pusht — Workflow rebuildet automatisch.

---

## 🟢 Echten Instagram-Feed aktivieren (Behold.so)

Die Seite zeigt aktuell einen Platzhalter im Smartphone-Mockup. Sobald
ihr **Behold.so** verbindet, werden dort die letzten 3–9 Posts
automatisch angezeigt und alle paar Stunden frisch nachgeladen.

**Setup (einmalig, ~3 Minuten):**

1. **Account anlegen:** https://behold.so → *Sign up* (kostenlos für 1 Feed)
2. **Feed anlegen:** *+ New Feed* → **Instagram** → euer Profil
   `@ggd_gebaeudereinigung` per Klick verbinden
3. **Feed-ID kopieren** (steht rechts neben dem Feed, sieht aus wie
   `abcd1234-uvwx-5678-pqrs-...`)
4. **In GitHub setzen:**
   - Repo → **Settings → Secrets and variables → Actions → Variables**
   - **New repository variable**
   - Name: `BEHOLD_ID`
   - Value: *(eure Feed-ID einfügen)*
5. **Re-Deploy:** Tab **Actions** → "Deploy Astro site to GitHub Pages"
   → **Run workflow** → fertig.

Beim nächsten Build wird die Variable als `PUBLIC_BEHOLD_ID` ins
Astro-Build geschoben, der Phone-Mockup verschwindet und das echte
Behold-Widget erscheint mit den letzten Posts. Nichts weiter zu tun —
Behold ruft Instagram im Hintergrund regelmäßig ab.

**Lokal testen?** `.env`-Datei im Projekt-Root:

```bash
PUBLIC_BEHOLD_ID=abcd1234-uvwx-5678-pqrs-...
```

---

## GitHub Pages — wie es aktuell läuft

Der Workflow [`deploy.yml`](.github/workflows/deploy.yml) baut bei jedem
Push auf `main`:

1. `npm install`
2. liest `ASTRO_SITE` und `ASTRO_BASE` aus `actions/configure-pages`
3. `npm run build`
4. lädt `./dist` als Pages-Artefakt hoch
5. deployed in das `github-pages`-Environment

→ Live ca. 30 s nach Push.

**Eigene Domain** (wenn ihr eine habt, z. B. `gonsior-gebaeudereinigung.de`):

1. Datei `public/CNAME` mit dem Domainnamen anlegen
2. Beim DNS-Anbieter `CNAME` auf `tobiaskammer-de.github.io.` setzen
3. GitHub: **Settings → Pages** → Domain eintragen, *Enforce HTTPS*
4. In `astro.config.mjs` ggf. `ASTRO_BASE='/'` und `ASTRO_SITE='https://eure.de'` setzen

---

## Mobile

- Eigener **Hamburger-Drawer** unter 720 px (groß-Tap-Targets, italic Serif-Links)
- **Sticky Header** mit Tap-to-Call CTA auf Tablet/Desktop
- Touch-Targets ≥ 48 px überall
- `prefers-reduced-motion` respektiert (keine Animation, wenn der Nutzer das im OS abgewählt hat)

---

## Design-Notizen

- **Farben:** Forest-Green vom Logo (`oklch(45% .115 150)`) als sparsamer Akzent,
  warm-weißes Papier mit minimalem Grünstich. Alles in `oklch()` für
  perceptuell saubere Abstufungen.
- **Typografie:** *Source Serif 4* (Display, italic für Akzente) + *Hanken Grotesk* (Body)
  + *JetBrains Mono* (Labels). Alle via Google Fonts.
- **Editorial Numerals:** § 01–§ 05 als Inhaltsverzeichnis-Marker, große
  italic Service-Nummern, monospace Stadtteilbezeichner.
- **Keine Tracker, keine Cookies, keine Forms** — nur direkte Tap-/Mail-/
  WhatsApp-Links. Das ist datenschutz-freundlich und schnell.
