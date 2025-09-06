import React from 'react'
import Button from '../../../components/shared/Button/Button'

const StepOtp = ({onNext})=> {
  return (
     <div>StepOtp
     <Button onclick={onNext} text="Next" />
     </div>
  )
}

export default StepOtp