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
            {/* {props.id} */}
            <p className='truncate '>
                {props.description}
            </p>
        </div>
    </div>
  )
}

export default UserFundraiserDisplaySection;
