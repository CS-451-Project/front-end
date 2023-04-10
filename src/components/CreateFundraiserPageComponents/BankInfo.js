import React, { useEffect } from 'react'
import { useStepperContext } from '../contexts/StepperContext'

const BankInfo = () => {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name === "Zipcode" && value.length > 5){
      return;
    }
    if(name === "Account_Num" && value.length > 17){
      return;
    }
    if(name === "Routing_Num" && value.length > 9){
      return;
    }
    setUserData({ ...userData, [name]: value });
  };


  return (
    <div>
      <div className='flex flex-col relative'>
        <div className='pb-4'>
          <div className='pb-4 text-xl'>
            Personal Information
          </div>
          <div className='pb-4'>
            <label className='flex justify-center'>
              <input
                onChange={handleChange}  
                value={userData["Account_Name"] || ""}
                name="Account_Name"
                placeholder="Account Name"
                type="text"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
              />
            </label>
          </div>
          <div className='pb-4'>
            <label className='flex justify-center'>
              <input
                onChange={handleChange}  
                value={userData["Address"] || ""}
                name="Address"
                placeholder="Street Address"
                type="text"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
              />
            </label>
          </div>
          <div className='flex flex-wrap justify-between'>
            <label className='flex justify-center pb-4'>
              <input
                onChange={handleChange}  
                value={userData["City"] || ""}
                name="City"
                placeholder="City"
                type="text"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
              />
            </label>
            <label className='flex justify-center pb-4'>
              <input
                onChange={handleChange}  
                value={userData["State"] || ""}
                name="State"
                placeholder="State"
                type="text"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
              />
            </label>
            <label className='flex justify-center pb-4'>
              <input
                onChange={handleChange}  
                value={userData["Zipcode"] || ""}
                name="Zipcode"
                placeholder="Zipcode"
                type="number"
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
              />
            </label>
          </div>
        </div>
        

        <div className='pb-4 text-xl'>
          Bank Information
        </div>
        <label className='flex justify-center pb-4'>
          <input
            onChange={handleChange}  
            value={userData["Bank_Name"] || ""}
            name="Bank_Name"
            placeholder="Bank Name"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
          />
        </label>
        <div className='flex flex-wrap justify-between'>
          <label className='flex justify-center'>
            <input
              onChange={handleChange}  
              value={userData["Account_Num"] || ""}
              name="Account_Num"
              placeholder="Account Number"
              type="number"

              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
            />
          </label>
          <label className='flex justify-center pb-4'>
            <input
              onChange={handleChange}  
              value={userData["Routing_Num"] || ""}
              name="Routing_Num"
              placeholder="Routing Number"
              type="text"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
            />
          </label>
          <label className='flex justify-center pb-4'>
            <input
              onChange={handleChange}  
              value={userData["Account_Type"] || ""}
              name="Account_Type"
              placeholder="Account Type"
              type="text"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
            />
          </label>
        </div>
        
        
      </div>
    </div>
  )
}

export default BankInfo