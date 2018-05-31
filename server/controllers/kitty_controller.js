// data validation for cattributes
const axios = require('axios');

module.exports={
    getKitties: function(req, res) {
        let { fur, highlight_color, pattern, mouth, accent_colour, base_colour, eye_shape, eye_colour } = req.body.data;
        console.log(`/kitties/kc.getKitties>RECEIVED> |${fur}|${highlight_color}|${pattern}|${mouth}|${accent_colour}|${base_colour}|${eye_shape}|${eye_colour}|`)
        let dbInstance = req.app.get('db');
        dbInstance.get_kitties([fur, highlight_color, pattern, mouth, accent_colour, base_colour, eye_shape, eye_colour])
        .then( kitties => {
            console.log(`/kitties/kc.getKitties>SENDING> |[kitties]|`);
            res.status(200).send(kitties)
        })
        .catch( err => {
            console.log('/kitties/kc.getKitties>ERROR>', err);
            res.status(500).send(err)
        });
    },
    getExternalApi_SeedOurDb_ReturnToOurFrontEnd: function(req, res) {
        let { kitty_number } = req.params;
        console.log(`/kitties/kc.getExternalApi_SeedOurDb_ReturnToOurFrontEnd>RECEIVED> |${kitty_number}|`)
        axios.get(`https://api.cryptokitties.co/kitties/${kitty_number}`)
        .then( function (response) {
            let { data } = response;
            console.log(`${data}`);
            res.status(200).send(data)
        })
        .catch( err => {
            console.log('/kitties/kc.getExternalApi_SeedOurDb_ReturnToOurFrontEnd>ERROR>', err);
            res.status(500).send(err)
        });
    }
}
