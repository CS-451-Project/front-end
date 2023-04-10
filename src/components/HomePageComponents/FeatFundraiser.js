import React from 'react'
import placeHolderFundraiser from '../../imgs/placeHolderFundraiserPic.jpg';
import FundraiserDisplaySection from './FundraiserDisplaySection';

const HomePageFeatFundraiser = (props) => {
  return (
    <div>
        <div className='text-5xl pb-4 font-HomePageHeading font-semibold'>
                Featured Fundraiser
            </div>
            <div className='h-fit'>
                {/* The data that was passed in from props is mapped and each element is indexed in this mapping */}
                {props.data.map((fundraiser, index)=>{  
                    // In the future we can have the featured fundraiser be based on most donated to or something

                    if(index == 2){
                        return(
                            <div className=' text-white' key={fundraiser.fundraiserId}>
                                {/* This gives the display a link to the indiviudal fundraiser page */}
                                    <FundraiserDisplaySection 
                                        title={fundraiser.title}
                                        description={fundraiser.description}

                                    />
                            </div>
                        );
                    }     
                })} 
            </div>
    </div>
  )
}

export default HomePageFeatFundraiser