import React, { useState, useEffect } from 'react'
import ApprovedDonationWindow from '../components/ApprovedDonationWindow'
import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti'

const ApprovedDonation = () => {
    const { width, height } = useWindowSize()

  return (
    
    <div className='p-16'>
        <Confetti
            width={width-20}
            height={height}
            numberOfPieces={500}
            recycle={false}
            tweenDuration={1000}
            // color={['#ff0000', '#00ff00', '#0000ff']}
        />
        <ApprovedDonationWindow />
    </div>
  )
}

export default ApprovedDonation
