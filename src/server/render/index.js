
const files = {
  'main.css': 'assets/app.css',
  'main.js': 'assets/app.js',

};

const render = (html, req) => {
  return `
    <!doctype html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>TEBO Cards</title>
      <link rel="stylesheet" href="${files['main.css']}">
      <link rel="icon" href="assets/static/card.png">
    </head>
    <body>
    <div id="root">
        ${html}
    </div>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <script src="${files['main.js']}"></script>
    </body>
    </html>
  `;
};

export default render;
