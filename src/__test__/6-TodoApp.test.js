import { fireEvent, render, screen } from "@testing-library/react";
import TodoContainer from '../components/components/6-TodoApp/TodoContainer.jsx';

describe('TodoContainer Integration Tests' , () => {

    test('renders a single <li> element when the form is submitted once', () => { 
    
        
render(<TodoContainer />);



const  input = screen.getByPlaceholderText('write a todo');
const form = screen.getByTestId('todo-form');

fireEvent.change(input, { target : { value :'Data'}});
fireEvent.submit(form);



const listItems = screen.getAllByRole('listitem');
expect(listItems).toHaveLength(1);
expect(listItems[0]).toHaveTextContent('Data');


     });



test('should render multiple todos when form is submitted multiple times', () => { 

    render(<TodoContainer />);


    const input = screen.getByPlaceholderText('write a todo');
    const form = screen.getByTestId('todo-form');

    fireEvent.change(input, { target : { value : 'react-testing'}});
    fireEvent.submit(form);

    fireEvent.change(input, { target : { value : 'jest'}});
    fireEvent.submit(form);

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toHaveTextContent('react-testing');
    expect(listItems[1]).toHaveTextContent('jest');
 })
})




