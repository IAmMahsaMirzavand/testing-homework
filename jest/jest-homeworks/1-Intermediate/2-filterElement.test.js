const filterElement = require("./2-filterElement")

describe('' , () => {

    test('should return an array with apple when filtering apple in an array containing apple', () => { 
       const result = filterElement(['apple','banana','cherry'], 'apple')

       expect(result).toEqual(['apple']) 
     });

     
    test('should return an empty array when element is not found', () => { 
        const result = filterElement(['apple','banana','cherry'], 'grape')

       expect(result).toEqual([]) 
     });

     test('should return an empty array when filtering grape in an empty array', () => { 
        const result = filterElement([], 'grape')

       expect(result).toEqual([]) 
     })
})