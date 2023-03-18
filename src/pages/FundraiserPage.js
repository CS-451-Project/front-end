import React, {useState, useEffect} from 'react';
import {  useParams } from "react-router-dom";
import DonateArea from '../components/FundraiserPageComponents/DonateArea';
import Fundraiser from '../components/FundraiserPageComponents/Fundraiser';
import { format } from 'date-fns'

const FundraiserPage = () => {
    const [fundraiser, setFundraiser] = useState([]);
    const [user, setUser] = useState([]);
    const [tags, setTags] = useState([]);
    const [donations, setDonations] = useState([]);
    const {userId, fundraiserId} = useParams();
    
    // Set the fundraiser and user api uri's
    const userUrl = `https://localhost:7000/api/user/${userId}`;
    const fundraiserUrl = `https://localhost:7000/api/fundraiser/${fundraiserId}`;
    const donationsUrl = `https://localhost:7000/api/fundraiser/${fundraiserId}/donation`

    // Get the fundraiser
    useEffect(() => {
        fetch(fundraiserUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
        setFundraiser(data);
        setTags(data.tags);
        })

    }, []);

    // Get the user
    useEffect(() => {
        fetch(userUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        //head
        .then(response => response.json())
        //body (function)
        .then(data => {
        setUser(data);
        }
    );
    }, [])

    // Get the donations
    useEffect(() => {
        fetch(donationsUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
        setDonations(data);
        
        })

    }, []);

    // Number formatter function for currency
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    const DisplayDonations = (props) => {
        return (
            <div className='flex-row pb-32'>
                <div className='flex text-lg'>Donations: </div>
                {props.donations.map((donation) => (
                <div key={donation.donationId}>
                    <div className="flex-row pt-2">
                        <div className='flex-row inline pt-4 pb-4 w-full'>
                            {currencyFormatter.format(donation.amount)}
                        </div>
                        <div className='flex-row pl-1 text-sm italic inline'>
                            {donation.message}
                        </div>
                        <div className='flex-row pl-1 text-sm italic inline'>
                        {(donation.date != null) ? format(new Date(donation.date), 'MM/dd/yyyy') : "" } 
                        </div>
                    </div>
                </div>
            ))}
            </div>
        )
    }

    return (
        // The fundraiser
        <div id="mainContainer" className='flex-column justify-center pt-4'>
            <div id="flexContainer" className='flex justify-center pt-4 w-full'>
                <div id="fundraiserContainer" className='flex-row justify-center pt-4 pl-72 pr-128 w-full'>
                    <Fundraiser 
                        title={fundraiser.title}
                        description={fundraiser.description}
                        createdDate={(fundraiser.createdDate != null) ? format(new Date(fundraiser.createdDate), 'MM/dd/yyyy') : "" } 
                        // {format(new Date(fundraiser.createdDate), 'MM/dd/yyyy')}
                        plannedEndDate={(fundraiser.plannedEndDate != null) ? format(new Date(fundraiser.plannedEndDate), 'MM/dd/yyyy') : "" }
                        tags = {tags}
                        organizerName={user.firstName + " " + user.lastName}
                        organizerEmail={user.email}
                    />
                    <DisplayDonations 
                        donations = {donations}
                    />
                </div>
                {/* The donation area */}
                <div id="donationContainer" className='fixed pt-24 right-32 justify-center'>
                    <DonateArea
                        currentBalance = {fundraiser.currentBalanceAmount}
                        goalAmount = {fundraiser.goalTargetAmount}
                    />
                </div>
            </div>
        </div>
    )
}

export default FundraiserPage;
