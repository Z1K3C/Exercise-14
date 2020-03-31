const Html = ({ body, title }) => `
 <!DOCTYPE html>
 <html>
   <head>
     <title>${title}</title>
     <link rel="stylesheet" href="./bootstrap.css">
   </head>
   <body style="margin:0; background-color: rgb(44,62,80);">
     <div id="app">${body}</div>
   </body>
 </html>
`;

export default Html;