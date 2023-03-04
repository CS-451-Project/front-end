import React from 'react'
import { Link } from 'react-router-dom';
import placeHolderFundraiser from '../imgs/placeHolderFundraiserPic.jpg';

const HomePageFeatFundraiser = (props) => {
  return (
    <div>
        <div className='text-5xl pb-4 font-HomePageHeading font-semibold'>
                    Today's Featured Fundraiser
                </div>
                <div className='border h-fit'>
                    {/* The data that was passed in from props is mapped and each element is indexed in this mapping */}
                    {props.data.map((fundraiser, index)=>{  
                        // In the future we can have the featured fundraiser be based on most donated to or something
                        if(index == 2){
                                return(
                                    // This gives the display a link to the indiviudal fundraiser page
                                    <Link to={`/organizer/${fundraiser.organizerId}/fundraiser/${fundraiser.fundraiserId}`} >
                                        <div className='flex flex-row h-96 w-full bg-green-600 text-white' key={fundraiser.fundraiserId}>
                                            <img src={placeHolderFundraiser} alt="Logo" />
                                            <div className='p-4 overflow-auto'>
                                                <h1 className='text-3xl pb-1'>
                                                    {fundraiser.title}
                                                </h1>
                                                <p className=''>
                                                    {fundraiser.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                        }     
                    })} 
                </div>
    </div>
  )
}

export default HomePageFeatFundraiser