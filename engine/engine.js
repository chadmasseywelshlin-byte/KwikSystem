import runtime from './config_loader.js';

const { config, language, parameters, sysErrors } = runtime;

if (sysErrors.length > 0) {
  haltEngine(sysErrors);
}

function selectEngine(config) {
  if (!config.engine) return loadStandardEngine();

  switch (config.engine) {
    case 'wikidot':
      return WikidotEngine;
    case 'github':
      return GitHubEngine;
    case 'Paradox':
      return ParadoxEngine;
    case 'custom_sys':
      return CustomEngine;
    default:
      throw new Error(`unknown engine: ${config.engine}`);
  }
}

function bootEngine(runtime) {
  const Engine = selectEngine(runtime.config);
  Engine.init(runtime);
}

/* engines defined here */

bootEngine(runtime);

function checkWikidotLogin() {
  const token = localStorage.getItem('wikidot_token');
  if (token) {
    console.log("User logged in with Wikidot token:", token);
    // Optionally fetch user info from Wikidot API
    // fetch(`https://www.wikidot.com/api/user?access_token=${token}`)
  } else {
    console.log("No user logged in");
  }
}

// Call on engine init
checkWikidotLogin();
