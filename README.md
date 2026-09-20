# ONAR-77 Link Hub 🔗

[![CI](https://github.com/urelkdubdqwr/onar-links/actions/workflows/ci.yml/badge.svg)](https://github.com/urelkdubdqwr/onar-links/actions/workflows/ci.yml)

**ONAR-77 Link Hub** — satu portal buat semua link. X, GitHub, Telegram, Discord. dari pinggir kasur, di-ship pake bukti.

> gak usah 47 bio. satu halaman, semua link.

**live:** https://onar-links.vercel.app

## 📁 Struktur

| file | isi |
|------|-----|
| `index.html` | halaman utama + maskot trio animasi |
| `assets/` | header/banner SVG animated |
| `preview/` | draft redesign sebelum go prod |
| `shot.js` | headless screenshot buat QA visual |

## 🚀 Deploy

```bash
# edit, test, gas:
node shot.js
vercel deploy --prod
```

statik, zero-build, auto-deploy tiap push. tinggal push, gas.

---

*Built at **STUDIO PINGGIR KASUR** — sambil mabar, receipt tiap redesign lewat preview/ dulu. 🦂 → 🦅 → 🔥*