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
            value={userData["Account_Name"] || ""}
            name="Account_Name"
            placeholder="Account Name"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border"
          />
        </label>
        <label className='flex justify-center'>
          <input
            onChange={handleChange}  
            value={userData["Address"] || ""}
            name="Address"
            placeholder="Address"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border"
          />
        </label>
        <label className='flex justify-center'>
          <input
            onChange={handleChange}  
            value={userData["City"] || ""}
            name="City"
            placeholder="City"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border"
          />
        </label>
        <label className='flex justify-center'>
          <input
            onChange={handleChange}  
            value={userData["State"] || ""}
            name="State"
            placeholder="State"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border"
          />
        </label>
        <label className='flex justify-center'>
          <input
            onChange={handleChange}  
            value={userData["Zipcode"] || ""}
            name="Zipcode"
            placeholder="Zipcode"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border"
          />
        </label>
        <label className='flex justify-center'>
          <input
            onChange={handleChange}  
            value={userData["Bank_Name"] || ""}
            name="Bank_Name"
            placeholder="Bank Name"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border"
          />
        </label>
        <label className='flex justify-center'>
          <input
            onChange={handleChange}  
            value={userData["Account_Num"] || ""}
            name="Account_Num"
            placeholder="Account Number"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border"
          />
        </label>
        <label className='flex justify-center'>
          <input
            onChange={handleChange}  
            value={userData["Routing_Num"] || ""}
            name="Routing_Num"
            placeholder="Routing Number"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border"
          />
        </label>
        <label className='flex justify-center'>
          <input
            onChange={handleChange}  
            value={userData["Account_Type"] || ""}
            name="Account_Type"
            placeholder="Account Type"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border"
          />
        </label>
      </div>
    </div>
  )
}

export default BankInfo