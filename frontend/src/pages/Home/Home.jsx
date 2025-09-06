import React from "react";
import "./Home.css";
import { Link , useNavigate} from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const sigInLinkStyle = {
    color : '#0077ff',
    fontWeight : 'bold',
    textDecoration : 'none',
    marginLeft : '10px'
  }
  const navigate = useNavigate();

  function startRegister (){
    navigate('/register');
  }
  return (

      <div className="cardWrapper">
        <Card title="Welcome to Topicly"  icon ={<i
              className="fas fa-handshake"
              style={{ color: "#f1f1f1", fontSize: "32px" }}
            ></i>}>

             <p className="text">
        Topicly is a real-time platform where people connect and discuss any
        topic. From casual chats to deep talks, users join simple rooms, meet
        like-minded people, and engage in voice calls — building a
        community where ideas flow and connections grow.
      </p>
      <div>
        <Button onclick={startRegister} text="Get your username"/>
      </div>
      <div className="signInWrapper">
        <span className="hasInvite">Already have an account?</span>
        <Link style={sigInLinkStyle} to={"/login"}>Sign in</Link>
      </div>
        </Card>
        
      
    
      </div>
  );
};

export default Home;
