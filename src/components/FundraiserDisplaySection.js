import React from 'react'

const FundraiserDisplaySection = (props) => {
  return (
    <div className='border-4 p-4'>
        <h1 className='text-2xl mb-4'>
            {props.title}
        </h1>
        {props.id}
        
        {props.goalTargetAmount}
        {props.description}
        {props.createdDate}
        {props.goalReachedDate}
        {props.plannedEndDate}
        {/* {props.tags} */}
        {/* {props.tags.map((fundraiser)=>{   
            return(
                <div>
                    {fundraiser}
                </div>
            );
        })}  */}
        
    </div>
  )
}

export default FundraiserDisplaySection;

