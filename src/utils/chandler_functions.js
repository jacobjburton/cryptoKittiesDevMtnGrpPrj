const axios = require('axios');

module.exports = {
    getCattributes: () => axios.get(`https://api.cryptokitties.co/cattributes`)
        .then(res => res.data)
        .catch(err => 'error'),
    getUserAccounts: (user_address) => axios.get(`https://api.cryptokitties.co/user/${user_address}`)
        .then(res => res.data)
        .catch(err => 'error')
};
