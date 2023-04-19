import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditFundraiser = () => {
    const {userId, fundraiserId} = useParams();
    const [ Title, setTitle ] = useState('test');
    const [ Description, setDescription ] = useState('');
    const [ Goal, setGoal ] = useState(0);
    const [ PlannedEndDate, setPlannedEndDate ] = useState('');
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
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={Title}/>
            </label>
            <label>
                Description:
                <input type="text" name="description" value={Description}/>
            </label>
            <label>
                Goal:
                <input type="text" name="goal" value={Goal}/>
            </label>
            <label>
                PlannedEndDate:
                <input type="text" name="PlannedEndDate" value={PlannedEndDate}/>
            </label>
            <label>
                Tags:
                <input type="text" name="Tags" value={Tags}/>
            </label>
        </form>
    </div>
  )
}

export default EditFundraiser