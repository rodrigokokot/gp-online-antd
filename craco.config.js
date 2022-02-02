const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#69E2B7',
              '@secondary-color': '#ab218e',
              '@background-color': '#F9F9F9',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  loaders: [
    {
      test: /\.svg$/,
      loader: 'raw-loader'
    }
  ]
};