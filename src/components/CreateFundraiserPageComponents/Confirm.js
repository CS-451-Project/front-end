import React from 'react'
import { useStepperContext } from '../contexts/StepperContext'

const Confirm = () => {
  const { userData, setUserData } = useStepperContext();
  
  return (
    <div>
      Confirm
    </div>
  )
}

export default Confirm