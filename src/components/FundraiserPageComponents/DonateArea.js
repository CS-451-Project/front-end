import React from 'react';
import ProgressBar from './ProgressBar';
import { useNavigate } from 'react-router-dom';

// Number formatter function for currency
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

// The donation area component
const DonateArea = (props) => {
    
    const navigate = useNavigate();
    
    const handleDonate = () => {
        navigate('donation');
    }
        return (
        <div className='flex-row bg-green-500 p-6 w-full rounded-lg'>
            <div className='flex w-full pb-4'>
                <ProgressBar className='flex w-full' bgcolor="#6a1b9a"
                completed=
                {
                    Math.trunc((props.currentBalance / props.goalAmount) * 100) > 10 ? Math.trunc((props.currentBalance / props.goalAmount) * 100) : 0
                }
                />
            </div>
            <div className='flex-row inline'>
                <div className='flex-row inline text-lg font-bold pt-4 pb-4 w-full'>{ currencyFormatter.format(props.currentBalance) }</div>
                <div className='flex-row pl-1 text-sm italic inline'> raised out of { currencyFormatter.format(props.goalAmount) }</div>
            </div>
            <div className='flex pt-4'>
                <button 
                    className="flex text-xl text-black p-3 font-bold 
                    rounded-lg bg-yellow-400 hover:bg-yellow-500 duration-200"
                    onClick={handleDonate}
                >
                    Make a Donation
                </button>
            </div>
        </div>
    )
}

export default DonateArea