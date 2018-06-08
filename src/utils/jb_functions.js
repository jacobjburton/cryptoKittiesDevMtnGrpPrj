const axios = require('axios');

module.exports = {
    getKitty: (id) => axios.get(`https://api.cryptokitties.co/kitties/${id}`)
        .then(res => res.data)
        .catch(err => 'error')
};

