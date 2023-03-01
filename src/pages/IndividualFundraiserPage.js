import React, {useState, useEffect} from 'react'
import {  useParams } from "react-router-dom";
import placeholderImage from '../imgs/Fundraising-Tree.jpg'

const IndividualFundraiserPage = () => {
    // const [fundraiserRequestOptions, setFundraiserRequestOptions] = useState({});
    const [fundraiser, setFundraiser] = useState([]);
    const [tags, setTags] = useState([]);
    const {fundraiserId} = useParams();

    // Set the request url
    const url = "https://localhost:7000/api/fundraiser/".concat(fundraiserId);

    // Number formatter function for cuirrency
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    // Progress bar component
    const ProgressBar = (props) => {
        const { completed } = props;
      
        const containerStyles = {
          // height: 20,
          width: '100%',
          backgroundColor: "#e0e0de",
          borderRadius: 50,
        }
      
        const fillerStyles = {
          height: '100%',
          width: `${completed}%`,
          borderRadius: 'inherit',
          textAlign: 'right'
        }
      
        const labelStyles = {
          color: 'white',
          fontWeight: 'bold',
        }
      
        return (
          <div className='h-3' style={containerStyles}>
            <div className='bg-yellow-500' style={fillerStyles}>
              <span className="px-4" style={labelStyles}></span>
            </div>
          </div>
        );
      };

    // Get the fundraiser
    useEffect(() => {
        fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        //head
        .then(response => response.json())
        //body (function)
        .then(data => {
        setFundraiser(data);
        setTags(data.tags);
        }
    );

    }, [])

    // Tag component
    const Tag = ({tagValue}) => (
        <div className="pl-4">
            {tagValue}
        </div>
    );

    // Fundraiser Component
    const Fundraiser = (
        {
            title,
            description, 
            createdDate, 
            plannedEndDate, 
            tags
        }) => {
            return (
            <div className='flex-row justify-left text-left pt-4 w-full'>
                <div className='flex font-bold text-4xl'>{title}</div>
                <div>
                    <img src={placeholderImage} className="object-contain pt-12" alt="Logo" />
                </div>
                <div className='flex text-sm italic pt-12'>Created On: { createdDate?.split("T")[0] }</div>
                <div className='flex text-sm italic'>Ends On:  { plannedEndDate?.split("T")[0] }</div>
                <div className='flex text-sm italic'>Tags:  {tags.map((tag) => (
                    <div key="{tag}">
                        <Tag
                        tagValue = {tag}
                        />
                    </div>
                ))}
                </div>
                <hr className="h-px opacity-25 my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className="flex text-lg">About:</div>
                <div className='flex pt-4'>{ description }</div>
                <hr className="h-px opacity-25 my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className='flex text-lg pt-4 pb-36'>Organizer Information: </div>
            </div>
        )}

    // The donation area component
    const DonateArea = (
        {
            currentBalance,
            goalAmount
        }) => {
            return (
            <div className='flex-row bg-green-500 p-6 w-full rounded-lg'>
                <div className='flex w-full pb-4'>
                    <ProgressBar className='flex w-full' bgcolor="#6a1b9a"
                    completed=
                    {
                        Math.trunc((currentBalance / goalAmount) * 100) > 10 ? Math.trunc((currentBalance / goalAmount) * 100) : 0
                    }
                    />
                </div>
                <div className='flex-row inline'>
                    <div className='flex-row inline text-lg font-bold pt-4 pb-4 w-full'>{ currencyFormatter.format(currentBalance) }</div>
                    <div className='flex-row pl-1 text-sm italic inline'> raised out of { currencyFormatter.format(goalAmount) }</div>
                </div>
                <div className='flex pt-4'>
                    <button 
                        className="flex text-xl text-black p-3 font-bold 
                        rounded-lg bg-yellow-400 hover:bg-yellow-500 duration-200"
                        >
                        Make a Donation
                    </button>
                </div>
            </div>
        )}

    // The main program area
    return (
        <div id="mainContainer" className='flex-column justify-center pt-4'>
            <div id="flexContainer" className='flex justify-center pt-4 w-full'>
                <div id="fundraiserContainer" className='flex justify-center pt-4 pl-72 pr-128 w-full'>
                    <Fundraiser 
                        title={fundraiser.title}
                        description={fundraiser.description}
                        createdDate={fundraiser.createdDate} 
                        plannedEndDate={fundraiser.plannedEndDate}
                        tags = {tags}
                        />
                </div>
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

export default IndividualFundraiserPage;
