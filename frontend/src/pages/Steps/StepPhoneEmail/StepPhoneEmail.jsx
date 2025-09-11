import React from "react";
import Button from "../../../components/shared/Button/Button";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import { useState } from "react";
import "./StepPhoneEmail.css";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const StepPhoneEmail = ({ onNext }) => {
  const [type, setType] = useState("phone");
  
  const Component = phoneEmailMap[type];

  return (
    <>
      <div className="cardWrapper">
        <div>
          <div className="buttonWrapper">
            <button
             className={`${"tabButton"} ${type=='phone' ? 'active' : null}`}
              onClick={() => {
                setType("phone");
              }}
            >
              <i
                className="fas fa-mobile-alt"
               style={{fontSize : "32px"}}
              ></i>
            </button>
            <button
            className={`${"tabButton"} ${type=='email' ? 'active' : null}`}

              onClick={() => {
                setType("email");
              }}
            >
              <i className="fas fa-envelope" style={{fontSize : "32px"}} ></i>
            </button>
          </div>

          <Component onNext={onNext} />
        </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
