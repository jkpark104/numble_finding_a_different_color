const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    configure: (webpackConfig, { env, paths }) => {
      return {
        ...webpackConfig,
        devtool: env === 'development' ? 'eval-cheap-source-map' : false,
      };
    },
  },
};
