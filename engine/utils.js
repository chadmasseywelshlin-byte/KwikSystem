// Helper functions
function resolveMap(siteName) {
  console.log("Resolving map for site:", siteName);
  // Example: return dummy domain
  return `https://${siteName}.example.com`;
}

function createBlankTemplate() {
  const main = document.getElementById('main');
  if (main) main.innerHTML = "<h2>Blank Template</h2><p>Start editing your site here.</p>";
}

// Expose globally
window.resolveMap = resolveMap;
window.createBlankTemplate = createBlankTemplate;
