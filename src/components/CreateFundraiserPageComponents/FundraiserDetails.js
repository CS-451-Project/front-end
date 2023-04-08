import React, { useEffect, useState } from 'react'
import { useStepperContext } from '../contexts/StepperContext'
import { TagsInput } from 'react-tag-input-component';

const FundraiserDetails = () => {
  const { userData, setUserData } = useStepperContext();
  const [selected, setSelected] = useState([]);
  const [displayedTags, setDisplayedTags] = useState(JSON.stringify(userData.tags));
  let tagArray = [];

  useEffect(() => {
    // userData["tags"]?.map((tag) => {
    //   tagArray.push(tag);
    // })
    const tagArray = [...userData.tags];
    setSelected(tagArray);
    // console.log(userData["tags"]);

  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleTags = (tags) => {
      // console.log(tags);
      setSelected(tags);
      setUserData({ ...userData, tags: tags });
      console.log(JSON.stringify(userData.tags));
      console.log(tags);
      // console.log(selected);

      // const limitedArray = selected.splice(0, 5);
      // setSelected(tags);
      // console.log(tags);
      // console.log("Limited Array ");
      // console.log(limitedArray);
      // setUserData({ ...userData, tags: limitedArray });

  };
  
  return (
    <div>

      <div className='flex flex-col relative'>
        <label className='flex justify-center'>
          <input
            onChange={handleChange}
            value={userData["Title"] || ""}
            name="Title"
            placeholder="Title"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border"
          />
        </label>
        <label className='flex justify-center'>
          <input
            onChange={handleChange}
            value={userData["Description"] || ""}
            name="Description"
            placeholder="Description"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border"
          />
        </label>
        <label>
          <input
            onChange={handleChange}
            value={userData["GoalTargetAmount"] || ""}
            name="GoalTargetAmount"
            placeholder="Goal Target Amount"
            type="number"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border"
          />
        </label>
        <label>
          <input
            onChange={handleChange}
            value={userData["PlannedEndDate"] || ""}
            name="PlannedEndDate"
            placeholder="Planned End Date"
            type="date"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none border"
          />
        </label>
        <label>
          <TagsInput
            onChange={handleTags}
            // value={userData["tags"]?.map((tag) => tag) || ""}
            value={selected}
            name="tags"
            placeHolder="enter your tags"
          />
        </label>
      </div>

    </div>
  )
}

export default FundraiserDetails