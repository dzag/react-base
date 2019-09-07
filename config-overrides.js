const {
  override,
  overrideDevServer,
  addDecoratorsLegacy,
} = require('customize-cra');


module.exports = {
  webpack: override(
    addDecoratorsLegacy(),
  ),
  devServer: overrideDevServer(
  )
};
