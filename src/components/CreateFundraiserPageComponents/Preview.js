import React from 'react'
import { useStepperContext } from '../contexts/StepperContext'

const Preview = () => {
  const { userData, setUserData } = useStepperContext();
  
  return (
    <div>
      <div>
        {userData.Title}
      </div>
      <div>
        {userData.GoalTargetAmount}
      </div>
      <div>
        {userData.Description}
      </div>
      {
        userData.tags.map((tag, index) => {
          return (
            <div key={index}>
              {tag}
            </div>
          )
        })
      }
      <div>
        {userData.BankName}
      </div>
      {/* <div>
        {userData["tags"].map((tag) => tag) || ""}
      </div> */}
    </div>
  )
}

export default Preview