import React, { useState, useEffect } from 'react'
import UseFetch from '../components/UseFetch';
import FundraiserDisplaySection from '../components/FundraiserDisplaySection';
import Button from '../components/Button';
import { format } from 'date-fns'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FundraiserCarousel from '../components/FundraiserCarousel';

const HomePage = () => {
    return (
        <div className=''>
            <div className='bg-homePagePic bg-cover h-100 bg-center '>
                <div className='flex justify-center p-4 font-Header text-black '>
                    <h1 className='text-6xl'>
                        Make a difference in someone's life
                    </h1>
                </div>
                <div className='flex justify-center pt-16'>
                    <Button title="Create Fundraiser" />
                </div>
            </div>
            <div className='pt-16'>
                <FundraiserCarousel />
            </div>
            
            
        </div>
    )
}

export default HomePage;