import axios from 'axios';

const initialState = {
    user: {},
    userActivity: [],
    cattributes: [],
    myKitties: {},
    kitty: {},
    specialCats: [],
    forsaleSiringOther: {}
}

const GET_USER = 'GET_USER';
const GET_USER_ACTIVITY = 'GET_USER_ACTIVITY';
const GET_KITTY = 'GET_KITTY';
const GET_SPECIAL_CATS = 'GET_SPECIAL_CATS';
const GET_FOR_SALE_SIRING_OTHER = 'GET_FOR_SALE_SIRING_OTHER';

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

export function getForsaleSiringOther() {
    let sale = "sale";
    let sire = "sire";
    let other = "other";
    let handlesData = axios.get(`https://api.cryptokitties.co/v2/kitties?offset=0&limit=12&owner_wallet_address=0x4541e1ea15fab6920b6f0da0c31da0fea74e3535&include=${sale, sire, other}&parents=false&authenticated=true&orderBy=id&orderDirection=desc`)
    .then(res => {
            console.log('rdr.getForsaleSiringOther>res.data', res.data);
            return res.data
        })
        .catch(err => { 
            console.log('rdr.getForsaleSiringOther>', err) });
    return {
        type: GET_FOR_SALE_SIRING_OTHER,
        payload: handlesData
    }
}


// export function getFilteredCats() {
//     let baseUrl = `https://api.cryptokitties.co/v2/kitties`;
//     let offset = `0`;
//     let limit = `12`;
//     let owner_wallet_address = `0x4541e1ea15fab6920b6f0da0c31da0fea74e3535`;
//     let include = `sale, sire, other`;
//     let parents = `false`;
//     let authenticated = true;
//     let orderBy = `id`;
//     let orderDirection = `desc`;
//     let handlesData = axios.get(`${baseUrl}?offset=${offset}&limit=${limit}&owner_wallet_address=${owner_wallet_address}&include=${include}&parents=${parents}&authenticated=${authenticated}&orderBy=${orderBy}&orderDirection=${orderDirection}`)
//     .then(res => {
//             console.log('rdr.getForsaleSiringOther>res.data', res.data);
//             return res.data
//         })
//         .catch(err => { 
//             console.log('rdr.getForsaleSiringOther>', err) });
//     return {
//         type: GET_FOR_SALE_SIRING_OTHER,
//         payload: handlesData
//     }
// }

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

        case GET_FOR_SALE_SIRING_OTHER + '_FULFILLED':
            return Object.assign({}, state, {forsaleSiringOther: action.payload});

        default:
            return state;
    }
}

