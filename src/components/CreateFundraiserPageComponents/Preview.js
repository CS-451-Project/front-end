import React from 'react'
import { useStepperContext } from '../contexts/StepperContext'

const Preview = () => {
  const { userData, setUserData } = useStepperContext();
  
  return (
    <div>
      <div>
        Title: {userData.Title}
      </div>
      <div>
        GoalTargetAmount: {userData.GoalTargetAmount}
      </div>
      <div>
        Description: {userData.Description}
      </div>
      {/* {
        userData.tags.map((tag, index) => {
          return (
            <div key={index}>
              {tag}
            </div>
          )
        })
      } */}
      <div>
        tags: {JSON.stringify(userData.tags)}
      </div>
      <div>
        Account_Name Name: {userData.Account_Name}
      </div>
      <div>
        Address: {userData.Address}
      </div>
      <div>
        City: {userData.City}
      </div>
      <div>
        State: {userData.State}
      </div>
      <div>
        Zipcode: {userData.Zipcode}
      </div>
      <div>
        Bank_Name: {userData.Bank_Name}
      </div>
      <div>
        Account_Num: {userData.Account_Num}
      </div>
      <div>
        Routing_Num: {userData.Routing_Num}
      </div>
      <div>
        Account_Type: {userData.Account_Type}
      </div>
      
      {/* <div>
        {userData["tags"].map((tag) => tag) || ""}
      </div> */}
    </div>
  )
}

export default Preview