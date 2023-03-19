import { render, screen, fireEvent } from '@testing-library/react';
import DonateWindow from '../DonateWindow';
import DonateArea from '../../components/FundraiserPageComponents/DonateArea';
import FundraiserPage from '../../pages/FundraiserPage';
import { format } from 'date-fns';
import { BrowserRouter as Router } from 'react-router-dom';

// const mockedUsedNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//    ...jest.requireActual('react-router-dom') as any,
//   useNavigate: () => mockedUsedNavigate,
// }));

describe('DonateWindow', () => {
    // render(
    //     <Router>
    //         <FundraiserPage />
    //     </Router>
    // );

    // render(
    //     <Router>
    //         <DonateArea
    //             currentBalance = {2}
    //             goalAmount = {80000}
    //         />
    //     </Router>,
    // );

    render(
        <Router>
            <DonateWindow
                id = {"fundraiserId"}
                title={"fundraiserTitle"}
                description={"fundraiserDescription"}
                createdDate={"12/12/2020"} 
                // {format(new Date(fundraiser.createdDate), 'MM/dd/yyyy')}
                plannedEndDate={"12/30/2020"}
            />
        </Router>
        
    );
    test('renders the donate window', () => {
        
        
    });
});