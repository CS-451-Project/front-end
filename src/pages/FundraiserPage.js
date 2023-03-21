import React, {useState, useEffect} from 'react';
import {  useParams } from "react-router-dom";
import DonateArea from '../components/FundraiserPageComponents/DonateArea';
import Fundraiser from '../components/FundraiserPageComponents/Fundraiser';
import Donations from '../components/FundraiserPageComponents/Donations';
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
    const donationsUrl = `https://localhost:7000/api/fundraiser/${fundraiserId}/donation`;

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

    return (
        // The fundraiser
        <div id="mainContainer" className='flex-column justify-center pt-4 pb-24'>
            <div id="flexContainer" className='flex justify-center pt-4 w-full'>
                <div id="fundraiserContainer" className='flex-row justify-center pt-4 pl-72 pr-128 w-full'>
                    <div className='bg-gray-100 p-12 rounded'>
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
                    <Donations
                        donations = {donations}
                        />
                        </div>
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
