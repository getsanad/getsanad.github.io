// Fills the footer copyright year on load.
function setFooterYear(doc, now) {
  const el = doc.getElementById("yr");
  if (!el) return;
  el.textContent = String(now.getFullYear());
}

setFooterYear(document, new Date());
