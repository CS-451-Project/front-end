import React, { useState, useEffect } from 'react'
import FundraiserDisplaySection from '../components/FundraiserDisplaySection';
import Button from '../components/Button';
import { format } from 'date-fns'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FundraiserCarousel = () => {
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

    const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
    };

  return (
        <Carousel responsive={responsive}>
            {data.map((fundraiser)=>{   
            return(
                <div className='flex justify-center p-8' key={fundraiser.fundraiserId}>
                    <FundraiserDisplaySection
                        id = {fundraiser.fundraiserId }
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
        })} 
        </Carousel>
  )
}

export default FundraiserCarousel