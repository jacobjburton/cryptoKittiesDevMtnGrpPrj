// data validation for cattributes
const axios = require('axios');

module.exports={
    createEmail: function(req, res) {
        let { email, nickname, marketing, wallet } = req.body;
        console.log(`/email/kc.createEmail>RECEIVED> |email: ${email}|`)
        let dbInstance = req.app.get('db');
        dbInstance.create_email([email, nickname, marketing, wallet])
        .then( email => {
            console.log(`/email/kc.createEmail>RETURNING> |[${email}]|`);
            res.status(200).send(email)
        })
        .catch( err => {
            console.log('/email/kc.createEmail>ERROR>', err);
            res.status(500).send(err)
        });
    },
    readNickname: function(req, res) {
        let { id } = req.params;
        console.log(`/nickname/kc.readNickname>RECEIVED> |id: ${id}|`)
        let dbInstance = req.app.get('db');
        dbInstance.read_nickname([id])
        .then( nick => {
            console.log(`/nickname/kc.readNickname>RETURNING> |[${nick}]|`);
            res.status(200).send(nick)
        })
        .catch( err => {
            console.log('/nickname/kc.readNickname>ERROR>', err);
            res.status(500).send(err)
        });
    },
    updateMarketing: function(req, res) {
        let { id } = req.params;
        let { toggle } = req.body;
        console.log(`/marketing/kc.updateMarketing>RECEIVED> |id: ${id}||toggle: ${toggle}|`)
        let dbInstance = req.app.get('db');
        dbInstance.update_marketing([id, toggle])
        .then( mark => {
            console.log(`/marketing/kc.updateMarketing>RETURNING> |[${mark}]|`);
            res.status(200).send(mark)
        })
        .catch( err => {
            console.log('/marketing/kc.updateMarketing>ERROR>', err);
            res.status(500).send(err)
        });
    },
    deleteWallet: function(req, res) {
        let { id } = req.params;
        console.log(`/wallet/kc.deleteWallet>RECEIVED> |id: ${id}|`)
        let dbInstance = req.app.get('db');
        dbInstance.delete_wallet([id])
        .then( account => {
            console.log(`/wallet/kc.deleteWallet>RETURNING> |[${account}]|`);
            res.status(200).send(account)
        })
        .catch( err => {
            console.log('/wallet/kc.deleteWallet>ERROR>', err);
            res.status(500).send(err)
        });
    }
}
