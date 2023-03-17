import React from 'react'
import { useNavigate } from 'react-router-dom'


const DonateWindow = (props) => {
    const navigate = useNavigate()

  return (
    <div className='bg-gray-100 p-4'>
        <div className='text-2xl font-bold pb-6'>
            You are supporting {props.title}
            <div className='text-sm italic font-normal'>Created on {props.createdDate}</div>
        </div>
        <div>
            Help make a difference
        </div>
        <div>
            
            <div className='text-sm italic'>You have until {props.plannedEndDate} to support the cause</div>
            <div className='text-sm italic'>Tags: {props.tags}</div>
        </div>
        <div className='flex flex-row p-4 justify-between'>
            <button className='flex bg-gray-500 text-white p-2 rounded-lg' onClick={() => navigate(-1)}>Return to Fundraiser</button>
            <button className='flex bg-green-500 text-white p-2 rounded-lg'>Donate</button>
        </div>
        
    </div>
  )
}

export default DonateWindow