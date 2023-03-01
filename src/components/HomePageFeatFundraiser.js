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
                    {props.data.map((fundraiser, index)=>{  
                        if(index == 5){
                            // <Link to={`/fundraiser/${fundraiser.fundraiserId}`} >
                                return(
                                    <Link to={`/fundraiser/${fundraiser.fundraiserId}`} >
                                        <div className='flex justify-center flex-row h-96 w-full bg-green-600 text-white' key={fundraiser.fundraiserId}>
                                            
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