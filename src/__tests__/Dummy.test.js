const dummy = require('../utils/Dummy.js');

test('getUser function exists', () => {
    expect.assertions(1);
    return dummy.getUser('0x9e556296547bd434C23d4A46596Ba9311140Cda7')
        .then(user => {
            console.log(user)
            expect(user).toBeDefined();
        })
})

test('getUser should return user address', () => {
    expect.assertions(1);
    return dummy.getUser('0x9e556296547bd434C23d4A46596Ba9311140Cda7').then(user => {
        expect(user.address).toEqual('0x9e556296547bd434c23d4a46596ba9311140cda7')
    })
})

test('getUser should return user image', () => {
    expect.assertions(1);
    return dummy.getUser('0x9e556296547bd434C23d4A46596Ba9311140Cda7').then(user => {
        expect(user.image).toEqual('1')
    })
})

test('getUser should return user nickname', () => {
    expect.assertions(1);
    return dummy.getUser('0x9e556296547bd434C23d4A46596Ba9311140Cda7').then(user => {
        expect(user.nickname).toEqual('JTREY72')
    })
})

test('getUser should return a string', () => {
    return dummy.getUser('0x9e556296547bd434C23d4A46596Ba9311140Cda7').then(user => {
        expect.stringContaining('0x9e556296547bd434C23d4A46596Ba9311140Cda7');
    })
})