import { render , screen } from "@testing-library/react"
import Greet from "../components/components/3-Greet/Greet.jsx";
describe('Greet Component' , () => {


    test('renders default text when no name is passed', () => { 
     
        
         
        render(<Greet/>)
        
        
        expect(screen.getByText('hello')).toBeInTheDocument();
        
             })


    test('renders correct text when name is passed', () => { 
     
      const name = 'Mahsa' 
       
render(<Greet name={name}/>)


expect(screen.getByText(`hello ${name}`)).toBeInTheDocument();

     })


     
 
})