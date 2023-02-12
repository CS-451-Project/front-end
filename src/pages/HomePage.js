import React from 'react'
import Button from '../components/Button.js'
import ProtoDemo from '../components/ProtoDemo.js';
import UseFetch from '../components/UseFetch.js';

const HomePage = () => {
    const handleClick = () => {
        const { data, loading, error } = UseFetch(
            "https://api.example.com/data",
            {
            method: "GET",
            }
        );
    };
    return (
        <div className='flex justify-center pt-4'>
            TITLE
            <Button 
                title={"ClickMe"} 
                click={handleClick}
            />
            <ProtoDemo />
        </div>
    )
}

export default HomePage;