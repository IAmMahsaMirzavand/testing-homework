const getAverage = require("./1-getAverage");
describe('getAverage function' , () => {

test('should return age average greater than 5 ' , () => {

    expect(getAverage(6,7,6)).toBeGreaterThan(5);
});

test('should return age average less than 5 ' , () => {

    expect(getAverage(2,3,4)).toBeLessThan(5);
});

test('should return age average equal than 5 ' , () => {

    expect(getAverage(4,5,6)).toEqual(5);
})

})