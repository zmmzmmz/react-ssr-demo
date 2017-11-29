// const Helmet = require('react-helmet').Helmet
import { renderToString } from 'react-dom/server'
import React from 'react'
export default (renderMe) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>koa react server-side-render</title>
        <style>
            body {
                font-family: Helvetica Neue, Arial, sans-serif;
                margin: 0;
            }
            html { box-sizing: border-box; }
            *, *:before, *:after { box-sizing: inherit; }
        </style>
    </head>
    <body>
        <div id="app">${renderToString(renderMe)}</div>
        <script src="/javascripts/client.js"></script>
    </body>
</html>`;
