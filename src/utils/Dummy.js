const axios = require('axios');

module.exports = {
    getUser: (user) => axios.get(`https://api.cryptokitties.co/user/${user}`)
        .then(res => res.data)
        .catch(err => 'error')
};