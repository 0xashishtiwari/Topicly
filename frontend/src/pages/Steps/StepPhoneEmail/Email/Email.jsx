import React, { useState } from 'react'
import Card from '../../../../components/shared/Card/Card';
import Button from "../../../../components/shared/Button/Button";
import TextInput from '../../../../components/shared/TextInput/TextInput';

const Email = ({onNext}) => {
  const [email , setEmail] = useState('');
  return(
<Card
      title="Enter your email id"
      icon={
       <i className="fas fa-envelope" style={{ color: "#c4c5c5", fontSize: "32px" }}></i>
      }
    >
      <TextInput value={email} onChange={(e)=>setEmail(e.target.value)}/>
      
     <div>
      <div className="actionButtonWrap">
        <Button onclick={onNext} text="Next" />

      </div>
      <p className="boderbottomParagraph">By entering your email, you're agreeing to our Terms of Service and Privacy Policy. Thanks!</p>

      </div>
      
    </Card>

    )

  }
export default Email