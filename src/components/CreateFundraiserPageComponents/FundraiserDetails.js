import React, { useEffect, useState } from 'react'
import { useStepperContext } from '../contexts/StepperContext'
// import { TagsInput } from 'react-tag-input-component';
import TagsInput from 'react-tagsinput'
import '../../index.css'

const FundraiserDetails = () => {
  const { userData, setUserData } = useStepperContext();
  const [selected, setSelected] = useState(userData.tags);
  const [displayedTags, setDisplayedTags] = useState(JSON.stringify(userData.tags));
  let tagArray = [];

  // useEffect(() => {
  //   const tagArray = [...userData.tags];
  //   setSelected(tagArray);
  // }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleTags = (tags) => {
      setSelected(tags);
      setUserData({ ...userData, tags: tags });
  };
  
  return (
    <div>
      <div className='flex flex-col relative'>

        <div className='pb-8'>
          <label className='flex justify-center'>
            <input
              onChange={handleChange}
              value={userData["Title"] || ""}
              name="Title"
              placeholder="Enter a title for your fundraiser"
              type="text"
              className="w-full appearance-none p-2 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
            />
          </label>
        </div>

        <div className='pb-8 '>
          <label className='flex justify-center'>
            <textarea
              onChange={handleChange}
              value={userData["Description"] || ""}
              name="Description"
              placeholder="Tell us more about your cause"
              className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border h-48 transition-colors duration-300 focus:border-green-500"
            />
          </label>
        </div>
        
          
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 pb-4'>
            <div>
              How much do you need to raise?
            </div>
            <label>
              <div className='absolute mt-1 ml-1'>$</div>
              <input
                onChange={handleChange}
                value={userData["GoalTargetAmount"] || ""}
                name="GoalTargetAmount"
                placeholder="0.00"
                type="number"
                step="0.01"
                min="1" 
                maxLength={3}
                className="w-[14rem] appearance-none p-1 pl-4 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
              />
            </label>
          </div>
          <div className='w-full md:w-1/2 pb-4'>
            <div>
              Planned End Date
            </div>
            <label>
              <input
                onChange={handleChange}
                value={userData["PlannedEndDate"] || ""}
                name="PlannedEndDate"
                placeholder="Planned End Date"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
              />
            </label>
          </div>
        </div>

        <div className='pt-4'>
          <label className=''>
            <TagsInput 
              value={selected != null ? selected : []} 
              onChange={handleTags} 
              className='border p-4' 
            />
            <div className='text-sm pl-2'>
              press enter to add a tag
            </div>
          </label>
        </div>
        
      </div>

    </div>
  )
}

export default FundraiserDetails