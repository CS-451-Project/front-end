import React from 'react'
import placeHolderFundraiser from '../../imgs/placeHolderFundraiserPic.jpg';
import { Link } from 'react-router-dom';

const UserFundraiserDisplaySection = (props) => {
  return (
    <div className='w-96 h-fit bg-green-600 truncate text-white'>
        <img src={placeHolderFundraiser} alt="Logo" />
        <div className='p-4'>
            <h1 className='text-2xl mb-4 truncate'>
              {props.title}
            </h1>
            <p className='truncate'>
              {props.description}
            </p>
          <div className='flex pt-4 justify-center pb-1'>
            {/* Link to the fundraiser page */}
            <Link to={`/organizer/${props.organizerId}/fundraiser/${props.fundraiserId}`} data-testid='link-to-fundraiser'>
              <div className='flex flex-inline'>
                  <button className='bg-gray-200 text-black text-lg rounded py-1 px-8 hover:bg-gray-300 duration-200'>View</button>
              </div>
            </Link>
            <div className='flex flex-inline pl-2'>
                <button className='bg-gray-200 text-black text-lg rounded py-1 px-8 hover:bg-gray-300 duration-200'>Edit</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserFundraiserDisplaySection;
