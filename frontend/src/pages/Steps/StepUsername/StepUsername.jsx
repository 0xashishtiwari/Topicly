import React from 'react'
import Button from '../../../components/shared/Button/Button'

const StepUsername = ({onNext}) => {
  return (
  <div>StepUsername
     <Button onclick={onNext} text="Next" />
     </div>
  )
}

export default StepUsername