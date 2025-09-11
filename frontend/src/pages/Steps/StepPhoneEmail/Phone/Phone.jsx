import React, { useState } from "react";
import Card from '../../../../components/shared/Card/Card';
import Button from "../../../../components/shared/Button/Button";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import '../StepPhoneEmail.css';
import { sendOtp } from "../../../../http";
import { useDispatch } from "react-redux";
import {setOtp} from '../../../../store/authSlice'

const Phone = ({onNext}) => {
  const [phoneNumber  , setPhoneNumber] = useState('');
  const dispatch = useDispatch();


  async function submit(){
    //server request
    console.log('Phone number is' , phoneNumber);
   const {data} = await sendOtp({phone : phoneNumber});
    console.log(data);

    dispatch(setOtp({phone : data.phone ,hash : data.hash} ))
    onNext();
  }


  return (
    <>
    <Card
      title="Enter your phone number"
      icon={
        <i
        className="fas fa-phone"
        style={{ color: "#c4c5c5", fontSize: "32px" }}
        ></i>
      }
      >
      <TextInput value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
     

      <div>
      <div className="actionButtonWrap">
        <Button onClick={submit} text="Next" />

      </div>
      <p className="boderbottomParagraph">By entering your number, you're agreeing to our Terms of Service and Privacy Policy. Thanks!</p>

      </div>
      
    </Card>
      </>
  );
};

export default Phone;
