import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    const brandStyle = {
        color : '#fff',
        textDecoration : 'none',
        fontWeigth  :'bold',
        fontSize : '22px',
        display : 'flex',
        alignItems :'center'
    }
    const logoText = {
        marginLeft  : '10px'
    }
  return (
    <nav className="navbar container">
      <Link style={brandStyle} to={"/"}>
        <i
          className="fas fa-users"
          style={{ color: "#f1f1f1", fontSize: "32px" }}
        ></i>
        <span style={logoText} >Topicly</span>
      </Link>
    </nav>
  );
};

export default Navigation;
