import { render, screen } from "@testing-library/react"
import UserTable from "../components/components/7-UserTable/UserTable.jsx";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();
describe('UserTable Component' , () => {


    beforeEach(() => {

        fetch.resetMocks()
    });

    test('renders correct number of rows and displays correct data', async() => { 


        const mockData = [
            { id: 1, name: "Brad Doe", email: "brad@example.com", phone: "123-456-7890" },
            { id: 2, name: "Anji Smith", email: "anji@example.com", phone: "987-654-3210" },
          ];

        fetch.mockResponseOnce(JSON.stringify(mockData));

        render(<UserTable />);

        
const rows =  await screen.findAllByTestId('user-row');
expect(rows).toHaveLength(mockData.length);
    

  
expect(rows[0]).toHaveTextContent('Brad Doe');
expect(rows[0]).toHaveTextContent('brad@example.com');
expect(rows[1]).toHaveTextContent('Anji Smith');
expect(rows[1]).toHaveTextContent('anji@example.com');

     })


})

