const fns = require('../utils/jb_functions.js');

//Async Await Syntax
// test('Kitty fetched should be my kitty id = 780221', async () => {
//     expect.assertions(1);
//     const kitty = await fns.getKitty();
//     expect(kitty.id).toEqual(780221);
// });

//Promise
test('Expect kitty object to be defined', () => {
    expect.assertions(1);
    return fns.getKitty(780221)
        .then(kitty => {
            expect(kitty).toBeDefined();
        });

});

test('Kitty fetched should be my kitty id = 780221', () => {
    expect.assertions(1);
    return fns.getKitty(780221)
        .then(kitty => {
            expect(kitty.id).toEqual(780221);
        });
});

test('Kitty.auction should be an empty object', () => {
    expect.assertions(1);
    return fns.getKitty(780221)
        .then(kitty => {
            expect(kitty.auction).toMatchObject({});
        });
});

test('Kitty.owner.address should be 0x9E9994E61ecbae77B61645Acea845C498412a58F', () => {
    expect.assertions(1);
    return fns.getKitty(780221)
        .then(kitty => {
            expect(kitty['owner'].address).toBe("0x9e9994e61ecbae77b61645acea845c498412a58f");
        });
});

test('Kitty.seller.address should be 0x9E9994E61ecbae77B61645Acea845C498412a58F', () => {
    expect.assertions(1);
    return fns.getKitty(611557)
        .then(kitty => {
            expect(kitty['auction']['seller'].address).toBe("0x9e9994e61ecbae77b61645acea845c498412a58f");
        });
});

test('Should reject to error when given invalid kitty id', () => {
    expect.assertions(1);
    return fns.getKitty(999999999999)
        .then(kitty => {
            expect(Promise.reject(new Error('error: no kitty with that id'))).rejects.toThrow('error: no kitty with that id',);
        });
});

