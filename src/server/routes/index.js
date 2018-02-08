import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
const router = require('express').Router();
import { StaticRouter } from 'react-router-dom';
import App from '../../client/app';

router.use('*', (req, res) => {

  const context = {};

  res.write(`<!DOCTYPE html>
  <html>
    <head>
      <noscript>
        <div class="page-center-down">
          <b>Even with javascript disabled, this will still work thanks to isomorphic rendering!</b>
        </div>
      </noscript>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
      <link rel="stylesheet" href="/style.css">
      <title>Reusable Navbar</title>
    </head>
    <body>
      <div class="root">`);

  const stream = renderToNodeStream(
    <StaticRouter context={context} location={req.originalUrl} >
    <App />
    </StaticRouter>
  );

  stream.pipe(res, { end: false, });
  stream.on('end', () => {
    res.write('</div><script type="text/javascript" src="/bundle.js"></script></body></html>');
    res.end();
  });

});

module.exports = router;
