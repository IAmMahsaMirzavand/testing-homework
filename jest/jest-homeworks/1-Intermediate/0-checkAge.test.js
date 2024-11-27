const checkAge = require("./0-checkAge");

describe('checkAge function' , () => {

    test('should return age greater then 18' , () => {

        expect(checkAge(20)).not.toBeUndefined()
    });

    test('should return age less then 18' , () => {

        expect(checkAge(16)).toBeUndefined()  
    })
})


