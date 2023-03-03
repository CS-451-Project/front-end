import { render, screen } from '@testing-library/react';
import Fundraiser from '../FundraiserPageFundraiser';
import FundraiserPage from '../../pages/FundraiserPage';
import DonateArea from '../FundraiserPageDonateArea';

describe("Fundraiser Page", () => {
    render(<FundraiserPage />);

    // Checks if the useEffect is called and the mock fetch is called
    test('useEffect fetch', () => {
        // This test checks if the useEffect is called  
        const fakeResponse = 'mock.api';
        const mockFetch = Promise.resolve({json: () => Promise.resolve(fakeResponse)});
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetch);
    });
})

describe("Render fundraiser component", () => {
    render(<Fundraiser
        title={"Test fundraiser"}
        description={"This is the best description ever"}
        createdDate={"2021-23-11"} 
        plannedEndDate={"2021-01-01"}
        tags = {["tag1", "tag2"]}
        organizerName={"Albus Dingledore"}
        organizerEmail={"ADizzy@harryTotter.com"}
        />
    );
    
    const fundraiserTitleText = screen.getByText(/Test fundraiser/i);
    expect(fundraiserTitleText).toBeInTheDocument();

    const fundraiserDescriptionText = screen.getByText(/This is the best description ever/i);
    expect(fundraiserDescriptionText).toBeInTheDocument();
})

describe("Render donate area component", () => {
    render(<DonateArea
        currentBalance = {1000.00}
        goalAmount = {2000.00}
        />
    );

    const donationAmount = screen.getByText(/2,000/i)
    expect(donationAmount).toBeInTheDocument();
})