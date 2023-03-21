import React, { useState, useEffect } from 'react'
import Button from '../components/Button';
import FundraiserCarousel from '../components/HomePageComponents/FundraiserCarousel';
import StepsPic from '../imgs/StepsPic.jpg';
import HomePageFeatFundraiser from '../components/HomePageComponents/FeatFundraiser';

const HomePage = () => {
    const [obj, setObj] = useState({
        "Acending": true,
    });

    const [data, setData] = useState([]);
    const [tags, setTags] = useState([]);

    useEffect(() => {
    fetch(`https://localhost:7000/api/fundraiser`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
        })
        //head
        .then(response => response.json())
        //body (function)
        .then(data => {
        setData(data);
        setTags(data.tags);
        }
    );

    }, [])

    return (
        <div className='mx-8'>
            {/* PIC HEADER */}
            <div className='bg-homePagePic bg-cover h-100 bg-top relative '>
                {/* <div className='bg-gradient-to-t from-black h-100'></div> */}
                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black pb-16'>
                    <div className='flex justify-center pb-8' data-testid="button-test-id">
                        <Button title="Create Fundraiser" />
                    </div>
                    <div className='flex justify-center p-4 font-Header font-semibold text-black '>
                        <h1 className='text-6xl text-white'>
                            Make a difference in someone's life
                        </h1>
                    </div>
                    
                </div>
            </div>

            <div className='p-8 pl-52 text-5xl font-HomePageHeading font-semibold'>
                Start a fundraiser
            </div>
            {/* STEPS TO FUNDRAISER */}
            <div className='flex flex-wrap justify-center'>
                <img src={StepsPic} alt="Logo" className='w-1/2 h-1/2' />
                <div className='flex flex-col justify-center mx-16'>
                    
                    <div className='py-4'>
                        <div className='text-3xl font-bold'>The Basics</div>
                        
                        <div className='text-xl pl-4'>Enter your information</div>
                    </div>
                    <div className='py-4'>
                        <div className='text-3xl font-bold'>What is your cause?</div>
                        
                        <div className='text-xl pl-4'>Enter your fundraiser information</div>
                    </div>
                    <div className='py-4'>
                        <div className='text-3xl font-bold'>Support</div>
                        
                        <div className='text-xl pl-4'>Enter your payment information</div>
                    </div>
                </div>

            </div>
            
            {/* FEATURED FUNDRAISER */}
            <div className='pt-16 px-8' data-testid="feat-fundraiser-test-id">
                {/* THe list of objects from the post request is being set as the props */}
                <HomePageFeatFundraiser data={data}/>
            </div>
            {/* CARROUSSEL FUNDRAISER SLIDES */}
            <div className='pt-16' data-testid="carousel-test-id">
                <div className='pl-24 text-5xl font-HomePageHeading font-semibold'>
                    General Fundraisers
                </div>
                <FundraiserCarousel data={data}/>
            </div>
        </div>
    )
}

export default HomePage;