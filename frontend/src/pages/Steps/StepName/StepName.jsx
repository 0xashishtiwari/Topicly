import React from 'react'
import Button from '../../../components/shared/Button/Button'

const StepName = ({onNext}) => {
  return (
    <div>StepName
     <Button onclick={onNext} text="Next" />
     </div>
  )
}

export default StepName