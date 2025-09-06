import React from 'react'
import Button from '../../../components/shared/Button/Button'

const StepPhoneEmail = ({onNext}) => {
  return (
   <div>StepPhoneEmail
     <Button onclick={onNext} text="Next" />
     </div>
  )
}

export default StepPhoneEmail