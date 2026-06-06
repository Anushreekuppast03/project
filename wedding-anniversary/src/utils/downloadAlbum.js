import { couple } from '../data/siteData'

// Generates a self-contained HTML photo album and triggers a download.
export function downloadAlbum(images) {
  const cards = images
    .map(
      (img) => `
      <figure class="card">
        <img src="${img.src}" alt="${img.caption}" />
        <figcaption>${img.caption} &middot; ${img.category}</figcaption>
      </figure>`,
    )
    .join('')

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${couple.partnerOne} & ${couple.partnerTwo} — Photo Album</title>
<style>
  body { font-family: Georgia, serif; background:#fdf8f1; color:#2b2430; margin:0; padding:40px; }
  h1 { text-align:center; color:#a07c3b; font-size:42px; }
  p.sub { text-align:center; color:#888; margin-bottom:40px; }
  .grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:20px; max-width:1100px; margin:0 auto; }
  .card { margin:0; background:#fff; border-radius:14px; overflow:hidden; box-shadow:0 8px 24px rgba(160,124,59,.18); }
  .card img { width:100%; display:block; }
  figcaption { padding:12px; font-size:14px; color:#555; }
</style>
</head>
<body>
  <h1>${couple.partnerOne} &amp; ${couple.partnerTwo}</h1>
  <p class="sub">${couple.anniversaryLabel}</p>
  <div class="grid">${cards}</div>
</body>
</html>`

  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${couple.partnerOne}-and-${couple.partnerTwo}-photo-album.html`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
