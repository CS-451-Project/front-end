import React, {useState, useEffect} from 'react'
import {  useParams } from "react-router-dom";
import UseFetch from '../components/UseFetch'

const IndividualFundraiserPage = () => {
    // const [fundraiserRequestOptions, setFundraiserRequestOptions] = useState({});
    const [fundraiser, setFundraiser] = useState([]);
    const [tags, setTags] = useState([]);
    const {fundraiserId} = useParams();

    // Set the request url
    const url = "https://localhost:7000/api/fundraiser/".concat(fundraiserId);

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
        <div className="pl-2">
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
            <div className='flex-row justify-left text-left pt-4'>
                <div className='flex pt-4 font-bold text-4xl pb-24'>{title}</div>
                <div className='flex pt-4 p-12 italic'>Picture will go here</div>
                <div className='flex text-sm italic'>Created On: { createdDate?.split("T")[0] }</div>
                <div className='flex text-sm italic'>End Date:  { plannedEndDate?.split("T")[0] }</div>
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
                <div className='flex pt-4 pb-36'>Organizer Information: </div>
            </div>
        )}

    // The donation area component
    const DonateArea = (
        {
            currentBalance,
            goalAmount
        }) => {
            return (
            <div className='flex-row'>
                <div className='flex pt-4'>Current Amount Raised:  { currentBalance }</div>
                <div className='flex pt-4'>Goal Amount:  { goalAmount }</div>
                <div className="text-xl pt-5 font-bold">Make a Donation</div>
            </div>
        )}

    return (
        <div id="mainContainer" className='flex-column justify-center pt-4'>
            <div id="flexContainer" className='flex justify-center pt-4'>
                <div id="fundraiserContainer" className='flex justify-center pt-4 px-56 pr-96'>
                    <Fundraiser 
                        title={fundraiser.title}
                        description={fundraiser.description}
                        createdDate={fundraiser.createdDate} 
                        plannedEndDate={fundraiser.plannedEndDate}
                        tags = {tags}
                        />
                </div>
                <div id="donationContainer" className='fixed pt-24 right-24 justify-center'>
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

{/* <div className='flex justify-center pt-4'>Fundraiser ID: { fundraiserId }</div>
            <div className='flex justify-center pt-4'>Retrieved Fundraiser Id:  { fundraiser.fundraiserId }</div>
            <div className='flex justify-center pt-4'>Organizer Id: { fundraiser.organizerId }</div>
            <div className='flex justify-center pt-4'>PictureId:  { fundraiser.pictureId }</div> */}

{/* <div className='flex justify-center pt-4'>Description:  { fundraiser.description }</div>
            <div className='flex justify-center pt-4'>Title:  { fundraiser.title }</div>
            <div className='flex justify-center pt-4'>CreatedDate:  { fundraiser.createdDate }</div>
            <div className='flex justify-center pt-4'>PlannedEndDate:  { fundraiser.plannedEndDate }</div>
            <div className='flex justify-center pt-4'>GoalReachedDate:  { fundraiser.goalReachedDate }</div>
            <div className='flex justify-center pt-4'>GoalTargetAmount:  { fundraiser.goalTargetAmount }</div>
            <div className='flex justify-center pt-4'>CurrentBalanceAmount:  { fundraiser.currentBalanceAmount }</div>
            <div className='flex justify-center pt-4'>Tags:  {tags.map((tag) => (
                <Tag
                    tagValue = {tag}
                    />

            ))}
            </div> */}