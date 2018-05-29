// data validation for cattributes

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
    }
}
