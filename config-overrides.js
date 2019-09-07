const path = require('path');
const {
  override,
  overrideDevServer,
  addDecoratorsLegacy,
  addWebpackAlias,
} = require('customize-cra');
const { addSassShortPaths, addEnvReplacementFull, addEnvReplacementShort} = require('./config/cra');

module.exports = {
  webpack: override(
    addDecoratorsLegacy(),
    addSassShortPaths([
      'src/styles'
    ]),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
      '@env': path.resolve(__dirname, 'src/environments')
    }),
    addEnvReplacementFull(),
    addEnvReplacementShort(),
  ),
  devServer: overrideDevServer(
  )
};
