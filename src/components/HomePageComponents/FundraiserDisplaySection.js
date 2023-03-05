import React from 'react'
import placeHolderFundraiser from '../../imgs/placeHolderFundraiserPic.jpg';


const FundraiserDisplaySection = (props) => {
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

            {/* {props.goalTargetAmount} */}
            {/* {props.createdDate} */}
            {/* {props.goalReachedDate} */}
            {/* {props.plannedEndDate} */}
            {/* {props.tags} */}
            {/* {props.tags.map((fundraiser)=>{   
                return(
                    <div>
                        {fundraiser}
                    </div>
                );
            })}  */}
        </div>
        
    </div>
  )
}

export default FundraiserDisplaySection;

