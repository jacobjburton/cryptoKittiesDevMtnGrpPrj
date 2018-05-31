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

//USER
// Sign-in metamask address / username
// When gifting on input of which address to gift too.
app.get('/user/:user_address', kc.getUser)
//https://www.cryptokitties.co/profile/0x95b8fd185eb9b485663cb51b9782d6e418294b98

// get kitties based on marketplace kitties price low to high

// click user name/ pic || profile/user address



// transaction history
https://api.chameleon.axiom.works/v1/transaction-bundle/0x4541e1ea15fab6920b6f0da0c31da0fea74e3535/all

// transaction view details button
// same transaction address
https://etherscan.io/address/0x4541e1ea15fab6920b6f0da0c31da0fea74e3535
//find transaction hash by time stamp

//SELL
app.post('/sell', kc.sellAKitty)


//Breed Public
app.get('/breedPublic')
// post to transaction

//Breed Private
app.get('/breedPrivate', kc.getNonIncestKitties)
app.post('/newKitty', kc.createKitten)

//GIFT

app.put('/gift', kc.giftAKitty)



massive(CONNECTION_STRING).then(db =>
{
    app.set('db', db);


    app.listen(SERVER_PORT, () =>
    {
        console.log(`Listening on port: ${SERVER_PORT}`)
    })
});