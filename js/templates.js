async function loadTemplate(selector, url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to load ${url}`);
  }

  const html = await response.text();

  document.querySelector(selector).innerHTML = html;
}

async function initTemplates() {
  await Promise.all([
    loadTemplate("#header", "/templates/header.html"),
  ]);
}

initTemplates().catch(console.error);