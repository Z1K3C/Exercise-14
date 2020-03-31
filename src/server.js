const express = require('express');                                 //Solicito a express desde node modules                                   //Solicito el metodo path desde node modules
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const server = express();       

//Settings
server.set('port',process.env.PORT || 3000);                        //Declaro una variable con el numero del puerto en formato Express

//Middlewares
server.use(express.json());                                         //Utilizo el middleware para usar JSONs

//Routes

//Render files
import App from '../views/app.jsx';
import Html from '../views/template.js';
server.get('/',(req,res)=>{
    
    const title = 'React Server Side';
    const body = ReactDOMServer.renderToString(<App/>);
    res.send(Html({body,title}));
});

//Static files
server.use(express.static(path.join(__dirname, '../public')));

//Run server
server.listen(server.get('port'), function(){                       //Creo al servidor
    console.log(`Server on port ${server.get('port')}`);            //Imprimo en pantalla el status del servidor
});

/*  Metodo 1   Dont need public/index.html
//Render files
import App from '../views/app.jsx';
import Html from '../views/template.js';
server.get('/',(req,res)=>{
    
    const title = 'React Server Side';
    const body = ReactDOMServer.renderToString(<App/>);
    res.send(Html({body,title}));
});

//Static files
server.use(express.static(path.join(__dirname, '../public')));
*/

/*  Metodo2     Nedd public/html

//Render files
import App from '../views/app.jsx';
server.get('/',(req,res)=>{
    
    const body = ReactDOMServer.renderToString(<App/>);
    const indexFile = path.resolve('./public/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="app"></div>', `<div id="app">${body}</div>`)
        );
    });
});

//Static files
server.use(express.static(path.join(__dirname, '../public')));
*/