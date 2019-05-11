if (process.env.BROWSER) {
  console.warn(`
    WARNING: Server config loaded in client!
    This is a privacy/security issue!
  `);
  throw new Error('Server configuration loaded in client')
}

const env = String(process.env.APP_ENV || 'development').toLowerCase();
let serverConfig = {};
let sharedConfig = {};
try {
  serverConfig = require(`./${env}`);
} catch (_) {
  console.info(
    'Unable to load server configuration. It may not exist. This may not be an error.'
  );
}
try {
  sharedConfig = require(`../shared/${env}`);
} catch (_) {
  console.info(
    'Unable to load shared configuration. It may not exist. This may not be an error.'
  );
}

export default {...sharedConfig, ...serverConfig};
