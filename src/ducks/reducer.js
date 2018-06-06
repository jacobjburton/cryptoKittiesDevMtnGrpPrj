import axios from 'axios';

const initialState = {
    user: {},
    userActivity: [],
    cattributes: [],
    myKitties: {},
    kitty: {},
    allSpecialCats: [],
    mySpecialCats: [],
    filteredCats: {},
    options: [],
    settings: {
        email: '',
        nickname: '',
        marketing: '',
        wallet: ''}
}

const GET_USER = 'GET_USER';
const GET_USER_ACTIVITY = 'GET_USER_ACTIVITY';
const GET_KITTY = 'GET_KITTY';
const GET_SPECIAL_CATS = 'GET_SPECIAL_CATS';
const GET_FILTERED_CATS = 'GET_FILTERED_CATS';
const GET_OPTIONS = 'GET_OPTIONS';

// CRUD
const CREATE_EMAIL = 'CREATE_EMAIL';
const READ_NICKNAME = 'READ_NICKNAME';
const UPDATE_MARKETING = 'UPDATE_MARKETING';
const DELETE_WALLET = 'DELETE_WALLET';

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

export function getSpecialCats(user_address) {

    function getMySpecialCats() {
        axios.get(`https://api.cryptokitties.co/kitties/all/${user_address}?type=fancy`);
    }

    function getAllSpecialCats() {
        axios.get(`https://api.cryptokitties.co/fancy/all`);
    }
    
let handlesData = axios.all([getMySpecialCats(), getAllSpecialCats()])
    .then(axios.spread(function (mySpecialCats, allSpecialCats) {
        return {
            mySpecialCats: mySpecialCats.data, 
            allSpecialCats: allSpecialCats.data}
    }))
    .catch(err => { 
        console.log('rdr.getAllSpecialCats>', err) });
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

export function getOptions(wallet_address) {
    console.log(`rdr.getOptions>${wallet_address}`);
    const instance = axios.create({
        baseURL: 'https://api.cryptokitties.co/activities?',
        wallet_address: `${wallet_address}`,
        method: 'post',
        headers: {'Access-Control-Request-Headers': 'authorization,content-type'}
      });
    let handlesData = axios.options(instance)
        .then(res => {
            console.log('rdr.getOptions>res.data', res.data);
            return res.data
        })
        .catch(err => { 
            console.log('rdr.getOptions>', err) });
    return {
        type: GET_OPTIONS,
        payload: handlesData
    }
}

//CRUD
export function createEmail(email, nickname, marketing, wallet) {
    console.log(`rdr.createEmail>`);
    let handlesData = axios.post(`/email`, {email:`${email}`, nickname: `${nickname}`, marketing: `${marketing}`, wallet: `${wallet}`})
        .then(res => {
            console.log('rdr.createEmail>res.data', res.data);
            return res.data
        })
        .catch(err => { 
            console.log('rdr.createEmail>', err) });
    return {
        type: CREATE_EMAIL,
        payload: handlesData
    }
}

export function readNickname(id) {
    console.log(`rdr.readNickname>${id}`);
    let handlesData = axios.get(`/nickname/${id}`)
        .then(res => {
            console.log('rdr.readNickname>res.data', res.data);
            return res.data
        })
        .catch(err => { 
            console.log('rdr.readNickname>', err) });
    return {
        type: READ_NICKNAME,
        payload: handlesData
    }

}

export function updateMarketing(id, toggle) {
    console.log(`rdr.updateMarketing>${toggle}`);
    let handlesData = axios.put(`/marketing/${id}`, {toggle: toggle})
        .then(res => {
            console.log('rdr.updateMarketing>res.data', res.data);
            return res.data
        })
        .catch(err => { 
            console.log('rdr.updateMarketing>', err) });
    return {
        type: UPDATE_MARKETING,
        payload: handlesData
    }
}

export function deleteWallet(id) {
    console.log(`rdr.deleteWallet>${id}`);
    let handlesData = axios.delete(`/wallet/${id}`)
        .then(res => {
            console.log('rdr.deleteWallet>res.data', res.data);
            return res.data
        })
        .catch(err => { 
            console.log('rdr.deleteWallet>', err) });
    return {
        type: DELETE_WALLET,
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
            return Object.assign({}, state, {
                mySpecialCats: action.payload.mySpecialCats,
                allSpecialCats: action.payload.allSpecialCats});

        case GET_FILTERED_CATS + '_FULFILLED':
            return Object.assign({}, state, {filteredCats: action.payload});

        case GET_OPTIONS + '_FULFILLED':
            return Object.assign({}, state, {options: action.payload});
// CRUD
        case CREATE_EMAIL + '_FULFILLED':
        let email = Object.assign({}, state.settings, {email : action.payload})
            return Object.assign({}, state, {settings: email});

        case READ_NICKNAME + '_FULFILLED':
        let nickname = Object.assign({}, state.settings, {nickname : action.payload})
            return Object.assign({}, state, {settings: nickname});

        case UPDATE_MARKETING + '_FULFILLED':
        let marketing = Object.assign({}, state.settings, {marketing : action.payload})
            return Object.assign({}, state, {settings: marketing});

        case DELETE_WALLET + '_FULFILLED':
        let wallet = Object.assign({}, state.settings, {wallet : action.payload})
            return Object.assign({}, state, {settings: wallet});

        default:
            return state;
    }
}

