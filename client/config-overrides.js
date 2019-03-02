const { injectBabelPlugin } = require('react-app-rewired');
const rewireStyledComponents = require('react-app-rewire-styled-components');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config,
  );

  config = rewireStyledComponents(config, env);

  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
  })(config, env);

  return config;
};
