const fileRegistry = {
  def: ['integrated_config.def, 'engine.def','password.def', 'logs.def']
  lng: ['english.lng', 'japanese.lng']
  map: ['scp-wiki.map', 'site.map']
    yml: true // user-defined, parameter-based
};
function parseDef(text) {
  const lines = text.split('\n');
  const data = {};

for (let line of lines) {
  line = line.trim();

  if (!line || line.startsWith('#')) continue;

  if (!line.includes('=')) {
    raiseSysEror('invalid_syntax', line);
    continue;
  }

  let [key, value] = line.split('=').map(v => v.trim());

  // enfore lowecase unless explicitly allowed
  if (key !== key.toLowerCase()) {
    raiseSysEror('capitalised_code', key);
  }

  data[key] = value'
}

return sata;
}

function parseLng(text) {
  const entries = {};

  text.split('\n').forEach(line => {
    if (!line || line.startsWith('#')) return;

    const [key, value] = line.split('=').map(v => v.trim());
    entries[key] = value;
  });

  return entries;
}
function parseLng(text) {
  const entries = {};

  text.split('\n').forEach(line => {
    if (!line || line.startsWith('#')) return;

    const [key, value] = line.split('=').map(v => v.trim());
    entries[key] = value;
  });

  return entries;
}
function parseYml(text) {
  if (!config.parameter_yml) {
    raiseSysError('parameter_not_enabled', 'yml');
    return null;
  }

  return YAML.parse(text);
}
function validatePasswordRules(config) {
  if (config.password_rules_define === 'true' &&
      config.password_rules_define === 'false') {
    raiseSysError('password_rule_conflict');
  }
}
function validateSyntax(config) {
  if (config.wikidot_syntax_false === 'true' &&
      config.engine !== 'custom_sys') {
    raiseSysError('forced_custom_syntax');
  }
}
function validateIntegratedView(config) {
  if (config.integrated_config_view_code) {
    const name = config.integrated_config_view_code;

    if (name !== name.toUpperCase()) {
      raiseSysError('view_not_capitalised', name);
    }

    if (!name.includes('_')) {
      raiseSysError('view_requires_underscores', name);
    }
  }
}
function resolveForeignSite(config, maps) {
  if (!config['Foreign Site']) return null;

  const site = config['Foreign Site'];
  const domain = maps[site];

  if (!domain) {
    raiseSysError('foreign_site_not_found', site);
  }

  return domain;
}
const sysErrors = [];

function raiseSysError(type, detail = '') {
  sysErrors.push({ type, detail });
  console.error(`[sys_error] ${type}: ${detail}`);
}
function resolveDependencies(config) {
  if (config.language_translate) {
    loadFile(`/lang/${config.language_translate}`);
  }

  if (config.engine) {
    loadFile(`/config/${config.engine}.def`);
  }
}
function exportConfig() {
  return {
    config,
    language,
    parameters,
    sysErrors
  };
}
{
  config: { engine: 'wikidot', ... },
  language: { join_site: '参加する' },
  parameters: {...},
  sysErrors: [...]
}
