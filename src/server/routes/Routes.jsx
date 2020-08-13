import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import Routes from '../routes/serverRoutes';
import render from "../render";

async function routes(req, res, next) {
  try{
    const context = {};
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
          {renderRoutes(Routes(false))}
      </StaticRouter>
    );

    if (context.url) {
      res.writeHead(301, {
        Location: context.url
      });
      res.end();
    } else {
      res.write(render(html, req));
      res.end();
    }

  }catch (e) {
    next(e)
  }
}

export default routes;
