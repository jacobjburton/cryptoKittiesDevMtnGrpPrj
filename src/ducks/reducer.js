import axios from 'axios';

const initialState = {
    user: {},
    cattributes: [],
    myKitties: {},
    kitty: {}
}

const GET_USER = 'GET_USER';
const GET_KITTY = 'GET_KITTY';

export function getUser(user_address) {
    console.log(`rdr.getUser>${user_address}`);
    function getUserAccount() {
        return axios.get(`https://api.cryptokitties.co/user/${user_address}`);
      }
       
    function getCattributes() {
        return axios.get(`https://api.cryptokitties.co/cattributes`);
      }

    function getMyKitties() {
        return axios.get(`https://api.cryptokitties.co/v2/kitties?offset=0&limit=12&owner_wallet_address=${user_address}&parents=false&authenticated=true&include=sale,sire,other&orderBy=id&orderDirection=desc`)
    }
       
    let handlesData = axios.all([getUserAccount(), getCattributes(), getMyKitties()])
        .then(axios.spread(function (user, cattributes, myKitties) {
          // All requests are now complete
            console.log('rdr.getUserAccount>user.data>', user.data);
            console.log('rdr.getCattributes>cattributes.data>', cattributes.data);
            console.log('rdr.getMyKitties>myKitties.data>', myKitties.data);
            return {
                user: user.data, 
                cattributes: cattributes.data,
                myKitties: myKitties.data}
        }))
        .catch(err => { 
            console.log('rdr.getCattributes>', err) });
    return {
        type: GET_USER,
        payload: handlesData
    }
}

export function getKitty(kitty_number) {
    console.log(`rdr.getKitty>${kitty_number}`);
    let handlesData = axios.get(`https://api.cryptokitties.co/kitties/${kitty_number}`)
        .then(res => {
            console.log('rdr.getKitty>res.data', res.data);
            return res.data
        })
        .catch(err => { 
            console.log('rdr.getKitty>', err) });
    return {
        type: GET_KITTY,
        payload: handlesData
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, {
                user: action.payload.user, 
                cattributes: action.payload.cattributes,
                myKitties: action.payload.myKitties});

        case GET_KITTY + '_FULFILLED':
            return Object.assign({}, state, {kitty: action.payload});

        default:
            return state;
    }
}

