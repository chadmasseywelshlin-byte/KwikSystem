// Apply runtime parameters from parameters.yml
function applyParameters(parameters) {
  console.log("Applying parameters:", parameters);
  if (parameters.enable_dark_mode) {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "#eee";
  }
}

// Expose globally
window.applyParameters = applyParameters;

