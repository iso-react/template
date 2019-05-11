const env = String(process.env.APP_ENV || 'development').toLowerCase();
let sharedConfig = {};
try {
  sharedConfig = require(`./${env}`);
} catch (_) {
  console.info(
    'Unable to load shared configuration. It may not exist. This may not be an error.'
  );
}

export default {...sharedConfig};
