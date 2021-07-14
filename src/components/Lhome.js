import React from "react";
import { Link } from "react-router-dom"
import './Home.css'
import { Card } from './Card'
import { useHistory } from 'react-router-dom'
import { Course } from './Course';

export const Lhome = (props) => {
  let user = props.value
  let history = useHistory()
  const push2 = () => {
    history.push('/tests')
  }
return (
  <div className='content-box'>
  <div className='card test-card d-flex justify-content-start' style={{width:'25rem'}}>
    <div className='card-body'>
      <h5 className='card-title'>Test Information</h5>
      <p className='card-text'>Test available <br/> Deadline: 03/07/21 12:00PM</p>
      <a className='btn my-btn' onClick={push2}>See More</a>
      </div></div>
      <h4>Recent Study</h4>
  <div className='course-box d-flex justify-content-around'>
     
  </div>
  </div>
)
}