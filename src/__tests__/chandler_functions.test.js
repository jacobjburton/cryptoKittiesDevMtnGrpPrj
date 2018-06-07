const fns = require('../utils/chandler_functions');

test('Expect kitty array to be defined', () => {
   expect.assertions(1);
   return fns.getCattributes()
       .then(kitty => {
           expect(kitty).toBeDefined();
       });

});

 test('Expect user account to be defined', () => {
    expect.assertions(1);
    return fns.getUserAccounts('0x4541E1eA15fab6920b6f0DA0C31DA0fea74E3535')
        .then(user => {
            expect(user).toBeDefined();
        });
 
 });
 
 test('Expect cattributes to have a description', () => {
     expect.assertions(1);
     return fns.getCattributes()
     .then(cattributes => {
         expect(cattributes[0].description).toContainEqual(expect.anything());
        });
        
    });

 test('Expect user account to have returned once', () => {
    expect.assertions(1);
    return fns.getUserAccounts('0x4541E1eA15fab6920b6f0DA0C31DA0fea74E3535')
        .then(user => {
            expect(user.nickname).toContainEqual(expect.anything());
        });
 
 });

 test('Expect cattributes account to be defined', () => {
    expect.assertions(1);
    return fns.getCattributes()
        .then(cattributes => {
            expect(cattributes[0]).not.toBeFalsy();
        });
 
 });

