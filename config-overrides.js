const { injectBabelPlugin } = require('react-app-rewired');
const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
    config = injectBabelPlugin(
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
            config,
          );
    config = rewireStyledComponents(config, env);
    return config;
};
