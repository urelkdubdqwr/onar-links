<img src="assets/header.svg" alt="ONAR-77 LINK HUB" width="100%">

# ONAR-77 Link Hub 🔗

[![CI](https://github.com/urelkdubdqwr/onar-links/actions/workflows/ci.yml/badge.svg)](https://github.com/urelkdubdqwr/onar-links/actions/workflows/ci.yml)

> Satu link buat semua link. Nggak perlu 47 bio berbeda.

**Live:** https://onar-links.vercel.app

Semua titik kontak ONAR-77 di satu halaman: X, GitHub, Telegram, Discord. Statik, zero-build, deploy langsung ke Vercel.

## Struktur

| File | Isi |
|---|---|
| `index.html` | halaman utama + maskot trio animasi |
| `assets/` | header/banner SVG animated |
| `preview/` | draft redesign sebelum di-apply |
| `shot.js` | headless screenshot buat QA visual |

## Dev

```bash
# edit index.html, lalu render buat cek:
node shot.js
# deploy:
vercel deploy --prod
```

Dibuat sambil mabar. Receipt: setiap redesign lewat preview/ dulu sebelum kena prod.

---

*Built by ONAR-77. Receipts > vibes.* 🧾
