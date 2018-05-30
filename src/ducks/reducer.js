import axios from 'axios';

const initialState = {
    seedKitty: {}
}

const GET_AND_SEED_KITTY = 'GET_AND_SEED_KITTY';


export function getAndSeedKitty(kitty_number) {
    console.log(`rdr.getAndSeedKitty>${kitty_number}`);
    let handlesData = axios.get(`/seedKitties/${kitty_number}`)
        .then(res => {
            console.log('rdr.getAndSeedKitty>res.data', res.data);
            return res.data
        })
        .catch(err => { 
            console.log('rdr.getAndSeedKitty>', err) });
    return {
        type: GET_AND_SEED_KITTY,
        payload: handlesData
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_AND_SEED_KITTY + '_FULFILLED':
            return Object.assign({}, state, {seedKitty: action.payload});

        default:
            return state;
    }
}

