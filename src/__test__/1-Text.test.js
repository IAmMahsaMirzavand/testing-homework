import { render,screen } from "@testing-library/react";
import Text from "../components/components/1-Text/Text.jsx";
describe('Text Component' , () => {

    test('should render "Welcome To APS" text', () => { 
        
       render(<Text/>);
       
       expect(screen.getByText('Welcome To APS')).toBeInTheDocument();
     })

     test('should render the heading with the provided headingText prop', () => { 
        
        const headingText = 'Test Heading';
        render(<Text headingText={headingText }/>);
      
        const heading = screen.getByRole('heading');
        
   
        expect(heading.textContent).toBe(headingText);
      })
})