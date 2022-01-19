const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#0DD8B0',
              '@secondary-color': '#ab218e',
              '@background-color': '#F9F9F9',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};