import React, { useState, useEffect } from 'react'
import FundraiserCarousel from '../components/HomePageComponents/FundraiserCarousel';
import StepsPic from '../imgs/StepsPic.jpg';
import HomePageFeatFundraiser from '../components/HomePageComponents/FeatFundraiser';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
    const navigate = useNavigate();
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
        <div className=' '>
            {/* PIC HEADER */}
            <div className='bg-homePagePic bg-cover h-100 bg-top bg-fixed'>
                {/* <div className='bg-gradient-to-t from-black h-100'></div> */}
                <div className=' bg-gradient-to-t from-black pb-16 h-100'>
                    <div className='flex justify-center pb-8' data-testid="button-test-id">
                        
                    </div>
                    <div className='flex justify-center flex-col p-4 font-Header font-semibold text-black h-full '>
                        <div className='flex justify-center pb-16 pt-48'>
                            <button 
                                className="bg-green-500 text-white py-2 px-4 hover:bg-green-700 duration-200 rounded-lg"  
                                onClick={localStorage.length === 0 ? 
                                    () => {
                                        navigate("/login")
                                        toast.warn('You need to be logged in to create a fundraiser', {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "light",
                                    });
                                    } : 
                                    () => navigate("/createFundraiser")}
                            >
                                Create Fundraiser
                            </button>
                        </div>
                        
                        <h1 className='text-center text-6xl text-white'>
                            Make a difference in someone's life
                        </h1>
                    </div>
                    
                </div>
            </div>

            <div className='p-8  text-5xl font-HomePageHeading font-semibold'>
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