import { fireEvent, render, screen } from "@testing-library/react"
import LiveInput from "../components/components/5-LiveInput/LiveInput.jsx";
describe('LiveInput Component' , () => {

test('renders input with placeholder Enter a text', () => { 

render(<LiveInput />)

const inputElement = screen.getByPlaceholderText('Enter a text');

expect(inputElement).toBeInTheDocument();

})

test('renders an h2 element', () => { 

    render(<LiveInput />)
    

const heading = screen.getByRole('heading');

expect(heading).toBeInTheDocument();

});


test('updates the h2 element when the user types in the input', () => { 

    render(<LiveInput />)
    
    const inputElement = screen.getByPlaceholderText('Enter a text');
    
    
    fireEvent.change(inputElement , { target : { value : 'Hello to the best Co-Mentor in the world!'}});

    const heading = screen.getByRole('heading');
    
  
expect(heading).toHaveTextContent('Hello to the best Co-Mentor in the world!');
    
   

})

})