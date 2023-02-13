import React from 'react'
import Button from '../components/Button.js'
import ProtoDemo from '../components/ProtoDemo.js';

const HomePage = () => {
    // this is a function that is called when the button is clicked
    const handleClick = () => {
        console.log("Clicked");
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