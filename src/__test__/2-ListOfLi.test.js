import { render , screen} from "@testing-library/react"
import ListOfLi from "../components/components/2-ListOfLi/ListOfLi.jsx";
describe('ListOfLi Componen' , () => {


    test('should render the correct number of <li> elements based on the usernames prop', () => { 
        
        const usernames = ["john", "sam", "jasem", "tom"]
        render(<ListOfLi usernames={usernames}/>)

       const listNames = screen.getAllByRole('listitem')
        expect(listNames).toHaveLength(4)
        // const listNames = screen.getAllByRole('listitem')
        // expect(listNames.map(name => name.textContent)).toStrictEqual(usernames)

     })
})




    
 
    
   
   
    
 