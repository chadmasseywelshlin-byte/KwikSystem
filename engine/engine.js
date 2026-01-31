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

