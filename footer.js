// Fills the footer copyright year.
function setFooterYear(doc, now) {
  const el = doc.getElementById("yr");
  if (!el) return;
  el.textContent = String(now.getFullYear());
}

setFooterYear(document, new Date());
