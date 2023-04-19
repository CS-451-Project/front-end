import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import TagsInput from 'react-tagsinput'
// import { format } from 'date-fns'

const EditFundraiser = () => {
    const navigate = useNavigate();
    const {userId, fundraiserId} = useParams();
    const [ Title, setTitle ] = useState('');
    const [ Description, setDescription ] = useState('');
    const [ Goal, setGoal ] = useState(0);
    const [ PlannedEndDate, setPlannedEndDate ] = useState();
    const [ Tags, setTags ] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:7000/api/fundraiser/${fundraiserId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setTitle(data.title)
            setDescription(data.description)
            setGoal(data.goalTargetAmount)
            setPlannedEndDate(data.plannedEndDate)
            setTags(data.tags)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Title)
        console.log(Description)
        console.log(Goal)
        console.log(PlannedEndDate)
        console.log(Tags)
    }

  return (
    <div className='flex justify-center p-8'>
        <div className='w-full bg-gray-100 rounded my-8 mx-8 p-8'>
            <form onSubmit={handleSubmit} className=''>
                <label>
                    <div className='pb-1'>
                        Title:
                    </div>
                    <input 
                        type="text" 
                        name="title" 
                        value={Title}
                        className="w-full appearance-none p-2 px-2 mb-6 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
                    />
                </label>
                <label>
                    <div className='pb-1'>
                        Description:
                    </div>
                    <textarea 
                        type="text" 
                        name="description" 
                        value={Description}
                        className="w-full appearance-none p-1 px-2 mb-6 text-gray-800 outline-none border h-48 transition-colors duration-300 focus:border-green-500"
                    />
                </label>
                <div className='flex flex-wrap'>
                    <div className='w-full sm:w-1/2 pb-4'>
                        <label>
                            <div className='pb-1'>
                                Goal:
                            </div>
                            <div className='absolute mt-1 ml-1'>$</div>
                            <input
                                // onChange={handleChange}
                                value={Goal}
                                name="GoalTargetAmount"
                                placeholder="0.00"
                                type="number"
                                step="0.01"
                                min="1" 
                                maxLength={3}
                                className="w-3/4 appearance-none p-1 pl-4 mb-6 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
                                required
                            />
                        </label>
                    </div>
                    <div className='w-full sm:w-1/2 pb-4'>
                        <label className='pb-6'>
                            <div className='pb-1'>
                                PlannedEndDate:
                            </div>
                            <input 
                                type="date" 
                                name="PlannedEndDate" 
                                // value={format(new Date(PlannedEndDate), 'MM/dd/yyyy')}
                                value={PlannedEndDate}
                                className="w-3/4 appearance-none p-1 px-2 mb-6 text-gray-800 outline-none border-b transition-colors duration-300 focus:border-green-500"
                            />
                        </label>
                    </div>
                    
                </div>
                
                <label>
                    <div className='pb-1'>
                        Tags:
                    </div>
                    <TagsInput 
                        value={Tags} 
                        // onChange={handleTags} 
                        className='border p- transition-colors duration-300 focus:border-green-500' 
                        maxTags = {5}
                        tagProps={{ 
                            className: 'bg-green-500 text-white rounded-lg p-2 m-1 border-none inline-block before:content-[" ×"]',
                            classNameRemove: 'cursor-pointer font-bold'
                        }}
                        inputProps={{
                            placeholder: 'Add up to 5 tags', 
                            className: 'bg-transparent border-none text-gray-700 font-sans text-base font-medium mb-6 mt-1 outline-none p-2 w-80'
                        }}
                        required
                    />
                </label>
                <div className='flex justify-between pt-12'>
                    <button className='bg-gray-500 text-white p-2 rounded-lg' onClick={() => navigate(-1)}>Back</button>
                    <button value={handleSubmit} className='bg-green-500 text-white p-2 rounded-lg'>Save</button>
                </div>
                
            </form>
        </div>
    </div>
    
  )
}

export default EditFundraiser