// Loads all config files into runtime
const runtime = {
  config: {},
  language: {},
  parameters: {},
  sysErrors: []
};

// Dummy loader for demonstration
function loadConfig(fileName) {
  // In real usage, fetch file from /config or parse text
  console.log(`Loading config file: ${fileName}`);
}

// Load all configs
loadConfig('engine.def');
loadConfig('site_settings.def');
loadConfig('language.def');
loadConfig('password_rules.def');
loadConfig('logs.def');
loadConfig('parameters.yml');
loadConfig('site.map');

// Expose globally
window.runtime = runtime;
