let config = {}
if(process.env.BROWSER) {
  config = window.__CONFIG__;
} else {
  config = require('./shared').default
}

export default config;