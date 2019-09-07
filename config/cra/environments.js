const webpack = require('webpack');

const addEnvReplacementShort = () => (config) => {
  const r1 = config.mode === 'development' ? '/environment'
    : config.mode === 'production' ? `/environment.prod`
      : '';

  config.plugins.push(
    new webpack.NormalModuleReplacementPlugin(/@env\/environment/, function (resource) {
      resource.request = resource.request.replace(/\/environment/, r1);
    })
  );

  return config;
};

const addEnvReplacementFull = () => (config) => {
  const r2 = config.mode === 'development' ? 'environments/environment'
    : config.mode === 'production' ? `environments/environment.prod`
      : '';

  config.plugins.push(
    new webpack.NormalModuleReplacementPlugin(/environments\/environment/, function (resource) {
      resource.request = resource.request.replace(/environments\/environment/, r2);
    }),
  );

  return config;
};

module.exports = {
  addEnvReplacementFull,
  addEnvReplacementShort,
};
