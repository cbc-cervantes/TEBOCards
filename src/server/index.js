require('ignore-styles');
require('@babel/polyfill');
require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: [[require.resolve('@babel/preset-env')], [require.resolve('@babel/preset-react')]],
});
require('asset-require-hook')({
  extensions: ['jpg', 'png', 'jpeg', 'gif', 'svg'],
  name: '/assets/static/[name].[ext]',
});

require('./server.js');
