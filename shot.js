const { chromium } = require('playwright-core');
const fs = require('fs'); const path = require('path');
(async () => {
  const dirs = fs.readdirSync(path.join(process.env.HOME,'.cache/ms-playwright')).filter(d=>d.startsWith('chromium-'));
  let exe=null; for (const d of dirs) for (const p of ['chrome-linux64/chrome','chrome-linux/chrome']) { const c=path.join(process.env.HOME,'.cache/ms-playwright',d,p); if (fs.existsSync(c)) exe=c; }
  const b = await chromium.launch({ executablePath: exe, args:['--no-sandbox','--disable-gpu'] });
  const pg = await b.newPage({ viewport:{width:1280,height:900} });
  const errs=[]; pg.on('pageerror',e=>errs.push(String(e))); pg.on('console',m=>{if(m.type()==='error')errs.push(m.text());});
  await pg.goto('file:///home/onar/linktree/index.html');
  await pg.waitForTimeout(2500); // hero timeline selesai
  await pg.screenshot({ path: '/home/onar/linktree/preview/hero.png' });
  await pg.evaluate(()=>document.getElementById('kanal').scrollIntoView());
  await pg.waitForTimeout(1200);
  await pg.screenshot({ path: '/home/onar/linktree/preview/kanal.png' });
  await pg.evaluate(()=>document.getElementById('about').scrollIntoView());
  await pg.waitForTimeout(1200);
  await pg.screenshot({ path: '/home/onar/linktree/preview/about.png' });
  // pastikan semua fx akhirnya visible (bukan nyangkut opacity 0)
  const hidden = await pg.evaluate(()=>{window.scrollTo(0,document.body.scrollHeight);return null;});
  await pg.waitForTimeout(1500);
  const stillHidden = await pg.evaluate(()=>[...document.querySelectorAll('.fx')].filter(el=>getComputedStyle(el).opacity==='0').map(el=>el.className));
  console.log('ERRORS:', JSON.stringify(errs));
  console.log('STILL_HIDDEN:', JSON.stringify(stillHidden));
  await b.close();
})();
