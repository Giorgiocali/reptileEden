# 🐍 Snake Tracker — Guida all'installazione su Android

## Cos'è questa app?
**Snake Tracker** è una Progressive Web App (PWA) che funziona come un'app nativa Android.
Dati già importati dal tuo file Excel originale.

---

## 📱 Come installarla su Android (GRATIS, senza Play Store)

### Metodo 1 — Hosting gratuito con Netlify (consigliato, 5 minuti)

1. Vai su **https://netlify.com** e crea un account gratuito
2. Vai su **https://app.netlify.com/drop**
3. **Trascina la cartella `snake-tracker`** nella finestra del browser
4. Netlify ti darà un link tipo: `https://mio-serpente.netlify.app`
5. Sul telefono Android, apri Chrome e vai a quel link
6. Tocca il menu (⋮) → **"Aggiungi a schermata Home"**
7. ✅ App installata! Funziona offline + manda notifiche

### Metodo 2 — GitHub Pages (gratuito)

1. Crea repository su GitHub
2. Carica i 3 file (`index.html`, `sw.js`, `manifest.json`)
3. Vai in Settings → Pages → Deploy da main
4. Ottieni URL tipo `https://tuonome.github.io/snake/`
5. Apri su Android Chrome → Installa

### Metodo 3 — Test locale (solo WiFi)

1. Installa Python sul PC
2. Vai nella cartella `snake-tracker` e lancia:
   ```
   python -m http.server 8080
   ```
3. Sul telefono Android (stessa rete WiFi), apri Chrome e vai su:
   `http://IP-DEL-PC:8080`
4. Installa come sopra

---

## 🔔 Come funzionano le notifiche

1. Apri l'app nel browser Chrome su Android
2. Tocca 🔔 in alto a destra
3. Premi **"Abilita Notifiche Push"**
4. Accetta il permesso
5. ✅ L'app ti avviserà quando:
   - È ora del pasto (in base all'intervallo impostato)
   - Bisogna rimuovere gli escrementi
   - È il momento della pulizia profonda

> **Nota**: Le notifiche funzionano quando l'app è aperta nel browser.
> Per notifiche in background completo, usa il metodo Netlify/GitHub Pages.

---

## 📊 Dati importati dal tuo Excel

| Sezione | Dati caricati |
|---------|--------------|
| Pasti | 4 pasti (apr 2026) |
| Manutenzione | 2 sessioni (mar-apr 2026) |
| Peso | 12g (04/04/2026) |
| Muta | 1 muta completa (12/04/2026) |

---

## 🗂️ File necessari

```
snake-tracker/
├── index.html    ← App principale
├── sw.js         ← Service Worker (notifiche + offline)
└── manifest.json ← Configurazione installazione Android
```

Tutti e 3 devono essere nella stessa cartella online.
