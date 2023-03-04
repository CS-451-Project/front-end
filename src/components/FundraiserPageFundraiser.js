import React from 'react';
import { format } from 'date-fns'
import placeholderImage from '../imgs/placeHolderFundraiserPic.jpg'

// Fundraiser Component
const Fundraiser = (props) => {
    return (
        <div className='flex-row justify-left text-left w-full'>
            <div className='flex font-bold text-4xl'>{props.title}</div>
            <div className="object-contain pt-4">
                <img src={placeholderImage} className="object-contain pt-4" alt="Logo" />
            </div>
            <div className='flex text-sm italic pt-4'>Created On: {( props.createdDate != null ) ? format(new Date(props.createdDate), 'MM/dd/yyyy') : "" }</div>
            <div className='flex text-sm italic'>Ends On: {( props.plannedEndDate != null) ? format(new Date(props.plannedEndDate), 'MM/dd/yyyy') : "" }</div>
            <div className='flex text-sm italic'>Tags:  {props.tags.map((tag) => (
                <div key={tag}>
                    <div className="pl-4">{tag}</div>
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
    )
}

export default Fundraiser