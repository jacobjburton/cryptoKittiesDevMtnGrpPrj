require('dotenv').config();

const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    kc = require('./controllers/kitty_controller'),
    cors = require('cors')


const app = express();

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

app.use(express.json());
app.use(cors());










app.get('/kitties', kc.getKitties)
app.get('/seedKitties/:kitty_number', kc.getExternalApi_SeedOurDb_ReturnToOurFrontEnd)



massive(CONNECTION_STRING).then(db =>
{
    app.set('db', db);


    app.listen(SERVER_PORT, () =>
    {
        console.log(`Listening on port: ${SERVER_PORT}`)
    })
});