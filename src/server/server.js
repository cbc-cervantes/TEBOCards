const path = require('path');
const express =  require('express');
import webpack from 'webpack';
const app = express();
const server = require('http').createServer(app);
const sockets = require("../frontend/utils/sockets/server.js");
import routes from './routes/Routes.jsx';
require("dotenv").config()
const isProduction =  process.env.NODE_ENV === 'production';
const port =  process.env.PORT;
app.use(express.static(path.join(__dirname, '/public')));

if (process.env.NODE_ENV  === "development") {
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConf = {
    contentBase: `http://localhost:${80}`,
    port: 80,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { color: true },
  };
  app.use(webpackDevMiddleware(compiler, serverConf));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.disable('x-powered-by');
}

sockets(server, app);

app.get('*', routes);

server.listen(port, () =>{
  console.log('Server is listening on http://localhost');
});

