export default ({ markup, css }) => {
  return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <style id="jss-server-side">${css}</style>
        <title>Expense Tracker</title>
      </head>
      <body>
        <div id="root">${markup}</div>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>`;
};
