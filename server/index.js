require('dotenv').config();

const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    bodyParser = require('body-parser'),
    kc = require('./controllers/kitty_controller')



const app = express();

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

app.use(bodyParser);










app.get('/kitties', kc.getKitties);



massive(CONNECTION_STRING).then(db =>
{
    app.set('db', db);


    app.listen(SERVER_PORT, () =>
    {
        console.log(`Listening on port: ${SERVER_PORT}`)
    })
});



