// Handle sysErrors and logs
function renderSysErrorPage(errors) {
  const main = document.getElementById('main');
  if (!main) return;
  main.innerHTML = "<h2>System Errors</h2>" + errors.map(e => `<p>${e}</p>`).join('');
}

// Expose globally
window.renderSysErrorPage = renderSysErrorPage;

