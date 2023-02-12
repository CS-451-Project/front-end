import React from 'react'
import Button from '../components/Button.js'

const HomePage = () => {
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
        </div>
    )
}

export default HomePage;