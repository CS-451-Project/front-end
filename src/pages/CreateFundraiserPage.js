import React, { useState, useEffect } from 'react'

import Stepper from '../components/CreateFundraiserPageComponents/Stepper';
import StepperControl from '../components/CreateFundraiserPageComponents/StepperControl';
import { UseContextProvider, useStepperContext } from '../components/contexts/StepperContext';

import FundraiserDetails from '../components/CreateFundraiserPageComponents/FundraiserDetails';
import BankInformation from '../components/CreateFundraiserPageComponents/BankInfo';
import Review from '../components/CreateFundraiserPageComponents/Review';
import Confirm from '../components/CreateFundraiserPageComponents/Confirm';

const CreateFundraiserPage = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Fundraiser Details",
        "Bank Info",
        "Review",
        "Confirm",
    ];

    const displayStep = (step) => {
        switch (step) {
        case 1:
            return <FundraiserDetails />;
        case 2:
            return <BankInformation />;
        case 3:
            return <Review />;
        case 4:
            return <Confirm />;
        default:
        }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);

        newStep === 4 && console.log("submit");
    };

    return (
        
        <div className='px-4 py-8'>
            <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-3/4">
                {/* Stepper */}
                <div className="horizontal container mt-5 ">
                    {/* This is the progression bar for the multi-step form */}
                    <Stepper steps={steps} currentStep={currentStep} />

                    {/* This is the content (in this case the different forms) of the multi-step form */}
                    {/* This is wrapped in a useContext so all the variables can be shared within the different forms */}
                    <div className="my-10 p-10 ">
                    <UseContextProvider>
                        {displayStep(currentStep)}
                    </UseContextProvider>
                    </div>
                </div>

                {/* navigation buttons */}
                {currentStep !== steps.length ? (
                    <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                    />
                )
                : (
                    <div className="cursor-pointer flex justify-center mt-4 mb-8">
                        <button className='mx-4 p-4  rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white'>
                            <a href="/fundraisers">Go to Fundraiser</a>
                        </button>
                    </div>
                     
                )}
            </div>
        </div>
    )
}

export default CreateFundraiserPage
