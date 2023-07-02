const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { shareAll } = require('@angular-architects/module-federation/webpack');


module.exports = {
  output: {
    publicPath: 'http://localhost:4201/',
    uniqueName: 'mdmfprofile',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'profile',
      library: { type: 'var', name: 'profile' },
      filename: 'remoteEntry.js',
      exposes: {
        ProfileModule: './projects/mdmf-profile/src/app/profile/profile.module.ts',
      },
      shared: {
        ...shareAll({ singleton: true, eager: false, requiredVersion: 'auto' }),
      },
    }),
  ],
};
