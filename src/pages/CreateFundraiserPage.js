import React, { useState, useEffect } from 'react'

import Stepper from '../components/CreateFundraiserPageComponents/Stepper';
import StepperControl from '../components/CreateFundraiserPageComponents/StepperControl';
import { UseContextProvider, useStepperContext } from '../components/CreateFundraiserPageComponents/StepperContext';

import FundraiserDetails from '../components/CreateFundraiserPageComponents/FundraiserDetails';
import BankInformation from '../components/CreateFundraiserPageComponents/BankInfo';
import Preview from '../components/CreateFundraiserPageComponents/Preview';
import Confirm from '../components/CreateFundraiserPageComponents/Confirm';

const CreateFundraiserPage = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Fundraiser Details",
        "Bank Info",
        "Preview",
        "Confirm",
    ];

    const displayStep = (step) => {
        switch (step) {
        case 1:
            return <FundraiserDetails />;
        case 2:
            return <BankInformation />;
        case 3:
            return <Preview />;
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
    };

    return (
        <div className='p-4'>
            <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
                {/* Stepper */}
                <div className="horizontal container mt-5 ">
                    <Stepper steps={steps} currentStep={currentStep} />

                    <div className="my-10 p-10 ">
                    <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                    </div>
                </div>

                {/* navigation button */}
                {currentStep !== steps.length && (
                    <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                    />
                )}
            </div>
        </div>
        
    )
}

export default CreateFundraiserPage
