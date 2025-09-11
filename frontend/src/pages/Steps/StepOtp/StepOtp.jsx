import React, { useState } from 'react'
import Button from '../../../components/shared/Button/Button'
import Card from '../../../components/shared/Card/Card'
import TextInput from '../../../components/shared/TextInput/TextInput'
import './StepOtp.css'
import { verifyOtp } from '../../../http'
import { useSelector } from 'react-redux'
import { setAuth } from '../../../store/authSlice'
import { useDispatch } from 'react-redux'


const StepOtp = ({onNext})=> {
  const [otp ,setOtp] = useState('');
  const {phone ,hash} = useSelector((state)=>state.auth.otp);  //from the store
  const dispatch = useDispatch();

  async function submit(){
    try {
    
    const {data} =  await verifyOtp({otp , phone  , hash });
   console.log(data);
    dispatch(setAuth(data));
  
    } catch (error) {
      console.log(error.resonse.data.message);
    }
   
  }
  return (
      
       <div className="cardWrapper">

    <Card
      title="Enter the code we just texted you"
      icon={
        <i
        className="fas fa-phone"
        style={{ color: "#c4c5c5", fontSize: "32px" }}
        ></i>
      }
      >
      <TextInput value={otp} onChange={(e)=>setOtp(e.target.value)}/>
     

      <div>
      <div className="actionButtonWrap">
        <Button onClick={submit}  text="Next" />

      </div>
      <p className="boderbottomParagraph">By entering your number, you're agreeing to our Terms of Service and Privacy Policy. Thanks!</p>

      </div>
      
    </Card>
        </div>
      
  )
}

export default StepOtp