const getUserWithDelay = require('./0-delayPromise');


//// use Date.now() for timer

// describe('getUserWithDelay' , () => {

//     test('should first', async() => { 

//         const start = Date.now();
//         const userId = 1;

//         const result = await getUserWithDelay(userId);

//         const end = Date.now();

//         const time = end - start 

//         expect(result).toEqual({id: userId, name: `User ${userId}`});
//         expect(time).toBeGreaterThanOrEqual(1000);
//      });
// });


//// use jest fake timers 


describe('getUserWithDelay' , () => {

    test('should return user data after a delay', async() => { 

jest.useFakeTimers();

const userId = 1; 
const promise =  getUserWithDelay(userId);

jest.advanceTimersByTime(1000);

const result = await promise;

expect(result).toEqual({ id: userId, name: `User ${userId}` });

jest.useRealTimers();

     })
})


//// use resolves and rejects 



// describe('getUserWithDelay' , () => {

// test('should first', async() => { 

// await expect(getUserWithDelay(1)).resolves.toEqual({ id: 1, name: 'User 1' });



//  });

// test('should first', async() => { 

//     jest.useFakeTimers();

//     const promise = getUserWithDelay(2);

//     jest.advanceTimersByTime(1000);

//     await expect(promise).resolves.toEqual({ id: 2, name: 'User 2' });

//     jest.useRealTimers();

//  });

// });


