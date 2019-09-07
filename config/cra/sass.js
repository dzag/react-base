/**
 * @param paths {string[]}
 */
const addSassShortPaths = (paths) => config => {
  const oneOf = config.module.rules
    .map(i => i.oneOf).filter(x => !!x)[0];

  const includeScss = oneOf
    .find(o => (o.test.source || '')
      .includes('scss'));

  const sassLoader = includeScss.use
    .filter(i => Object.keys(i).length > 0)
    .find(i => (i.loader || '')
      .includes('sass-loader'));

  sassLoader.options.includePaths = paths;

  return config;
};

module.exports = {
  addSassShortPaths
};
