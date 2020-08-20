const { PORT = 5000, LOG_ENABLED: LOG_ENABLED_RAW = false, LOG_LEVEL } = process.env;

function parseBooleanString(value) {
  if (typeof value === 'string') return !!value.match(/^(true|on|1|yes)$/i);

  return !!value;
}

const LOG_ENABLED = parseBooleanString(LOG_ENABLED_RAW);

export { PORT, LOG_ENABLED, LOG_LEVEL };
