const fetchUserData = require("./1-fetchUserData");


describe('fetchUserData' , () => {
  
    const userId = 1
    
    const mockData = { id: userId, name: "John Doe" }


    beforeEach(() => {

        global.fetch =  jest.fn();

    });




    afterEach(() => {

        jest.resetAllMocks();

    });


    test('should return user data', async() => { 
       

      fetch.mockResolvedValueOnce({

        json : jest.fn().mockResolvedValueOnce(mockData),
      })
      const result = await fetchUserData(userId)
      expect(result).toEqual(mockData);
      
     })

     test('should call fetch with the correct URL', async() => { 

     fetch.mockResolvedValueOnce({

     json : jest.fn().mockResolvedValueOnce({}),
     })
        
     await fetchUserData(userId)

     expect(fetch).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/${userId}`
        

        
        )

      })
})






