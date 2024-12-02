import { fireEvent, getByText, render, screen } from "@testing-library/react";
import Login from "../components/components/4-Login/Login.jsx";
describe('' , () => {

    test('should first', () => { 
        
        render(<Login/>);
        
        const btn = screen.getByRole('button');
        expect(btn).toBeInTheDocument();

     
     });


     test('should first', () => { 
        
        render(<Login/>);
        
        const btn = screen.getByRole('button');
        expect(btn).toHaveTextContent('login');

     
     });




     test('should first', () => { 
        render(<Login />);

        const btn = screen.getByRole('button');

        fireEvent.click(btn);
        
        expect(btn).toHaveTextContent('logout');

        fireEvent.click(btn);

        expect(btn).toHaveTextContent('login');

     });
});