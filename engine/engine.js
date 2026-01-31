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

<!-- HTML -->
<button id="login-wikidot">Login with Wikidot</button>

<script>
// Optional: check if user is already logged in
function checkWikidotLogin() {
    // Example: check localStorage for a token
    const token = localStorage.getItem('wikidotToken');
    if (token) {
        console.log("User already logged in:", token);
        // You could redirect or update UI here
    }
}

// Call on page load
checkWikidotLogin();

const clientId = "YOUR_WIKIDOT_CLIENT_ID";
const redirectUri = "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO/callback.html"; // must match registered URL

document.getElementById('login-wikidot').addEventListener('click', () => {
    const authUrl = `https://www.wikidot.com/oauth/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location.href = authUrl;
});
</script>

