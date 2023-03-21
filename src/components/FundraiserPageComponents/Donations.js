import React from 'react';
import { format } from 'date-fns'
import donationHeartImage from '../../imgs/donation-heart.png'

// Number formatter function for currency
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    
    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const Donations = (props) => {
    return (
        <div className='pb-32'>
            <div className='text-lg'>Donations: </div>
            {props.donations.map((donation) => (
                <div key={donation.donationId} className="pt-4">
                    <table>
                        <tbody className=''>
                            <tr className=''>
                                <td className='pb-8'>
                                    <img src={donationHeartImage} className="object-contain h-8 w-8" alt="donation-heart" />
                                </td>
                                <td className='pl-4 '>
                                    <div className='text-xl'>
                                        {donation.name == null ? "Anonymous" : donation.name}
                                    </div>
                                    <div className='inline text-lg'>
                                        {currencyFormatter.format(donation.amount)}
                                    </div>
                                    <div className='inline px-2'>-</div>
                                    <div className='inline italic'>
                                        {(donation.date != null) ? format(new Date(donation.date), 'MM/dd/yyyy') : "" } 
                                    </div>
                                    <div className=''>
                                        {donation.message}
                                    </div>
                                </td>
                            </tr>
                        </tbody> 
                    </table>
                </div>
            ))}
        </div>
    )
}

export default Donations