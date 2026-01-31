// Loads page content
function loadPage(pageFile) {
  console.log("Loading page:", pageFile);
  // Example: inject dummy content
  const main = document.getElementById('main');
  if (main) main.innerHTML = `<h2>${pageFile}</h2><p>Page content loaded.</p>`;
}

// Expose globally
window.loadPage = loadPage;


