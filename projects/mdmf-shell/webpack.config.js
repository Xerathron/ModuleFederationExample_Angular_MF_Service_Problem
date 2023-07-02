const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { shareAll } = require('@angular-architects/module-federation/webpack');


module.exports = {
  output: {
    publicPath: 'http://localhost:4200/',
    uniqueName: 'shell',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        profile: 'profile@http://localhost:4201/remoteEntry.js}',
      },
      shared: {
        ...shareAll({ singleton: true, eager: false, requiredVersion: 'auto' }),
      },
    }),
  ],
};
