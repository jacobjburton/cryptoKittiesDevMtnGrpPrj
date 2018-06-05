import axios from 'axios';

const initialState = {
    user: {},
    userActivity: [],
    cattributes: [],
    myKitties: {},
    kitty: {},
    specialCats: [],
    filteredCats: {}
}

const GET_USER = 'GET_USER';
const GET_USER_ACTIVITY = 'GET_USER_ACTIVITY';
const GET_KITTY = 'GET_KITTY';
const GET_SPECIAL_CATS = 'GET_SPECIAL_CATS';
const GET_FILTERED_CATS = 'GET_FILTERED_CATS';

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

export function getUserActivity(user_address) {
    console.log(`rdr.getUserActivity>${user_address}`);
    let handlesData = axios.get(`https://api.cryptokitties.co/activities?wallet_address=${user_address}`)
        .then(res => {
            console.log('rdr.getUserActivity>res.data', res.data);
            return res.data
        })
        .catch(err => { 
            console.log('rdr.getUserActivity>', err) });
    return {
        type: GET_USER_ACTIVITY,
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

export function getSpecialCats() {
    console.log(`rdr.getSpecialCats`);
    let handlesData = axios.get(`https://api.cryptokitties.co/fancy/all`)
        .then(res => {
            console.log('rdr.getSpecialCats>res.data', res.data);
            return res.data
        })
        .catch(err => { 
            console.log('rdr.getSpecialCats>', err) });
    return {
        type: GET_SPECIAL_CATS,
        payload: handlesData
    }
}

export function getFilteredCats(owner_wallet_address, type, gen, cooldown, sale, sire, other, orderBy, orderDirection) {
    //Search Marketplace: use empty string for owner_wallet_address
    //Search MyKitties: include owner_wallet_address
    let a = owner_wallet_address;
    let b = type;
    let c = gen;
    let d = cooldown;
    let e = sale;
    let f = sire;
    let g = other;
    let h = orderBy; // ie. generation
    let i = orderDirection;
    let handlesData = axios.get(`https://api.cryptokitties.co/v2/kitties?offset=0&limit=12&owner_wallet_address=${a}&search=type:${b}+gen:${c}+cooldown:${d}&parents=false&authenticated=true&include=${e},${f},${g}&orderBy=${h}&orderDirection=${i}`)
    .then(res => {
            console.log('rdr.getFilteredCats>res.data', res.data);
            return res.data
        })
        .catch(err => { 
            console.log('rdr.getFilteredCats>', err) });
    return {
        type: GET_FILTERED_CATS,
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
        
        case GET_USER_ACTIVITY + '_FULFILLED':
            return Object.assign({}, state, {userActivity: action.payload});

        case GET_KITTY + '_FULFILLED':
            return Object.assign({}, state, {kitty: action.payload});

        case GET_SPECIAL_CATS + '_FULFILLED':
            return Object.assign({}, state, {specialCats: action.payload});

        case GET_FILTERED_CATS + '_FULFILLED':
            return Object.assign({}, state, {filteredCats: action.payload});

        default:
            return state;
    }
}

