import React from 'react'
import { useStepperContext } from '../contexts/StepperContext'

const Preview = () => {
  const { userData, setUserData } = useStepperContext();
  
  return (
    <div>Preview</div>
  )
}

export default Preview