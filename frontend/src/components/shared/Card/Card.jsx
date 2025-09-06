import React from 'react'
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ title, icon , children}) => {
  return (
      <div className="card">
          <div className="headingWrapper">
            {icon}
            <h1 className="heading">{title}</h1>
          </div>
          
          {children}
         
        </div>
  )
}

export default Card