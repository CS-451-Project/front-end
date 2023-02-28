import React, { useState, useEffect } from 'react'
import UseFetch from '../components/UseFetch';
import FundraiserDisplaySection from '../components/FundraiserDisplaySection';
import Button from '../components/Button';
import { format } from 'date-fns'

const HomePage = () => {
    const [obj, setObj] = useState({
        "Acending": true,
    });
    const [data, setData] = useState([]);
    const [tags, setTags] = useState([]);

    // const [requestOptions, setRequestOptions] = useState({ method: "POST ", headers: {"Content-Type": "application/json"}, body: JSON.stringify({})});
    // const { data, loading, error } = UseFetch("https://localhost:7000/api/fundraiser", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({})
    //     });

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
            <div className=''>
                {data.map((fundraiser)=>{   
                    return(
                        <div className='flex justify-center m-8' key={fundraiser.fundraiserId}>
                            <FundraiserDisplaySection
                                id = {fundraiser.fundraiserId}
                                title = {fundraiser.title}
                                goalTargetAmount = {fundraiser.goalTargetAmount}
                                description = {fundraiser.description}
                                createdDate = {format(new Date(fundraiser.createdDate), 'MM/dd/yyyy')}
                                goalReachedDate = {format(new Date(fundraiser.goalReachedDate), 'MM/dd/yyyy')}
                                plannedEndDate = {format(new Date(fundraiser.plannedEndDate), 'MM/dd/yyyy')}
                                tags = {fundraiser.tags}
                            />
                        </div>
                    );
                    
                    
                        // <div className='flex justify-center p-4' key={fundraiser.fundraiserId}>
                        //     <h1 className='text-2xl'>{fundraiser.title}</h1>
                        //     <h1>{fundraiser.goalTargetAmount}</h1>
                        //     <h1>{fundraiser.description}</h1>
                        //     <h1>{format(new Date(fundraiser.createdDate), 'MM/dd/yyyy')}</h1>
                        //     <h1>{format(new Date(fundraiser.goalReachedDate), 'MM/dd/yyyy')}</h1>
                        //     <h1>{format(new Date(fundraiser.plannedEndDate), 'MM/dd/yyyy')}</h1>
                        //     {/* {console.log(format(new Date(fundraiser.plannedEndDate), 'MM/dd/yyyy'))} */}
                        //     <h1>{fundraiser.tags}</h1>
                        //     {/* {console.log(fundraiser.tags)} */}
                        // </div>
                    
                })} 
            </div>
            
        </div>
    )
}

export default HomePage;