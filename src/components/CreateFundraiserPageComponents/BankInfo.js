import React, { useEffect } from 'react'
import { useStepperContext } from '../contexts/StepperContext'

const BankInfo = () => {
  const { userData, setUserData } = useStepperContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      <div className='flex flex-col relative'>
        <label className='flex justify-center'>
          <input
            onChange={handleChange}  
            value={userData["BankName"] || ""}
            name="BankName"
            placeholder="Bank Name"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border"
          />
        </label>
      </div>
    </div>
  )
}

export default BankInfo