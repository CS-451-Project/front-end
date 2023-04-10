import React from 'react'
import { Link } from 'react-router-dom';
import placeHolderFundraiser from '../../imgs/placeHolderFundraiserPic.jpg';


const FundraiserDisplaySection = (props) => {
  return (
    <div className='flex w-96 h-fit  text-black'>
        {<img src={placeHolderFundraiser} alt="Logo" />}
        <div className='p-4 z-125'>

            <h1 className='text-2xl mb-4 truncate hover:underline hover:text-blue-500 '>
                <Link to={`/organizer/${props.organizerId}/fundraiser/${props.fundraiserId}`} >
                    {props.title}
                </Link>
            </h1>

         {/* {props.id} */} 
            <p className='truncate '>
                {props.description}
            </p>
            <p>
                {props.tags ?? 'Tags'}
            </p>
            <p>
                Organizer: {props.organizerName}
            </p>
            <p>
                Contact: {props.organizerEmail}
            </p>
            <p>
                Started Date: {props.createdDate}
            </p>
            <p>
                Planned End Date: {props.createdDate}
            </p>
        </div>
    </div>
  )
}

export default FundraiserDisplaySection;

