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
        <div>
            {/* PIC HEADER */}
            <div className='bg-homePagePic bg-cover h-[100vh] bg-center'>
                <div className='w-full flex justify-center p-4 font-HomePageHeading font-semibold text-black'>
                    <h1 className='text-5xl p-4 outline outline-2 outline-[#E1E6E6] rounded-lg bg-gray-500 bg-opacity-5'>
                        Make a difference in someone's life
                    </h1>                    
                </div>

                <div className='flex justify-center pt-10' data-testid="button-test-id">
                    <Button title="Create Fundraiser" />
                </div>
            </div>
            
            {/* FEATURED FUNDRAISER */}
            <div className='px-8 py-4' data-testid="feat-fundraiser-test-id">
                {/* THe list of objects from the post request is being set as the props */}
                <HomePageFeatFundraiser data={data}/>
            </div>

            {/* CARROUSSEL FUNDRAISER SLIDES */}
            <div className='px-8 py-4' data-testid="carousel-test-id">
                <div className='text-5xl font-HomePageHeading font-semibold'>
                    Active Fundraisers
                </div>
                <FundraiserCarousel data={data}/>
            </div>


            {/* STEPS TO FUNDRAISER */}
            <div className='px-8 pt-4 pb-8'>
                <p className='pb-4 text-5xl font-HomePageHeading font-semibold'>
                  Start your own Fundraiser
                </p>
                <div className='flex'>
                    <img src={StepsPic} alt="Logo" className='w-1/3 h-1/3' />
                    <div className='flex flex-col justify-center mx-8 space-y-8'>
                        
                        <div className=''>
                            <div className='text-3xl font-bold'>The Basics</div>
                            
                            <div className='text-xl pl-4'>Enter your information</div>
                        </div>
                        <div className=''>
                            <div className='text-3xl font-bold'>What is your cause?</div>
                            
                            <div className='text-xl pl-4'>Enter your fundraiser information</div>
                        </div>
                        <div className=''>
                            <div className='text-3xl font-bold'>Support</div>
                            
                            <div className='text-xl pl-4'>Enter your payment information</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;