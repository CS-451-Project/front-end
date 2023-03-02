import React, {useState, useEffect} from 'react'
import {  useParams } from "react-router-dom";
import placeholderImage from '../imgs/placeHolderFundraiserPic.jpg'

const IndividualFundraiserPage = () => {
    const [fundraiser, setFundraiser] = useState([]);
    const [user, setUser] = useState([]);
    const [tags, setTags] = useState([]);
    const {userId, fundraiserId} = useParams();
    
    // Set the fundraiser and user urls
    const userUrl = "https://localhost:7000/api/user/".concat(userId);
    const fundraiserUrl = "https://localhost:7000/api/fundraiser/".concat(fundraiserId);

    // Number formatter function for currency
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    // Formats the date from database format to MM/dd/yyyy
    const formatDate = (date) => {
        return (
            date?.split("T")[0].split("-")[1] 
            + "-" + date?.split("T")[0].split("-")[2] 
            + "-" + date?.split("T")[0].split("-")[0]
            )
    };
    
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

    // Tag component
    const Tag = ({tagValue}) => (
        <div className="pl-4">
            {tagValue}
        </div>
    );

    // Fundraiser Component
    const Fundraiser = (props) => {
            return (
            <div className='flex-row justify-left text-left w-full'>
                <div className='flex font-bold text-4xl'>{props.title}</div>
                <div className="object-contain pt-4">
                    <img src={placeholderImage} className="object-contain pt-4" alt="Logo" />
                </div>
                <div className='flex text-sm italic pt-4'>Created On: {formatDate(props.createdDate)}</div>
                <div className='flex text-sm italic'>Ends On:  {formatDate(props.plannedEndDate)}</div>
                <div className='flex text-sm italic'>Tags:  {props.tags.map((tag) => (
                    <div key="{tag}">
                        <Tag
                        tagValue = {props.tag}
                        />
                    </div>
                ))}
                </div>
                <hr className="h-px opacity-25 my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className="flex text-lg">About:</div>
                <div className='flex pt-4'>{ props.description }</div>
                <hr className="h-px opacity-25 my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className='flex text-lg'>Organizer: </div>
                <div className='flex pt-4'>{props.organizerName}</div>
                <div className='flex pb-36'>{props.organizerEmail}</div>
            </div>
        )}

    // The donation area component
    const DonateArea = (props) => {
            return (
            <div className='flex-row bg-green-500 p-6 w-full rounded-lg'>
                <div className='flex w-full pb-4'>
                    <ProgressBar className='flex w-full' bgcolor="#6a1b9a"
                    completed=
                    {
                        Math.trunc((props.currentBalance / props.goalAmount) * 100) > 10 ? Math.trunc((props.currentBalance / props.goalAmount) * 100) : 0
                    }
                    />
                </div>
                <div className='flex-row inline'>
                    <div className='flex-row inline text-lg font-bold pt-4 pb-4 w-full'>{ currencyFormatter.format(props.currentBalance) }</div>
                    <div className='flex-row pl-1 text-sm italic inline'> raised out of { currencyFormatter.format(props.goalAmount) }</div>
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
        // The fundraiser
        <div id="mainContainer" className='flex-column justify-center pt-4'>
            <div id="flexContainer" className='flex justify-center pt-4 w-full'>
                <div id="fundraiserContainer" className='flex justify-center pt-4 pl-72 pr-128 w-full'>
                    <Fundraiser 
                        title={fundraiser.title}
                        description={fundraiser.description}
                        createdDate={fundraiser.createdDate} 
                        plannedEndDate={fundraiser.plannedEndDate}
                        tags = {tags}
                        organizerName={user.firstName + " " + user.lastName}
                        organizerEmail={user.email}
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

export default IndividualFundraiserPage;
