import React from 'react';
import { useHistory } from 'react-router-dom'
import { Course } from './Course';

export const Card = (props) => {
  let course = props.value
  let history = useHistory()
  const push = () => {
    history.push('/course')
  }
    return(
        <div className='card border-light mb-3 cardbox' style={{width: '18rem'}} onClick={push}>
         <a>
           <div className='card-header'>{course.substring(0,7)}</div>
           <div className='card-body '>
             <h5 className='card-title'>{course.substring(9)}</h5>
             <p className='card-text'>A brief description of {course.substring(9)}.</p>
            </div>
          </a>
        </div>
    )
}


export const Notif = (props) => {
  return (
    <div>
    <li className='list-group-item'>{props.value}<span className='float-right'><small>{props.time}</small></span></li>
    </div>
  )
}


export const TestCard = (props) => {
  let history = useHistory();
  const push = ()  => {
    history.push('/test')
  }
  return(
    <div className='card test-card' style={{width:'18rem'}}  >
    <div className='card-body'>
      <h5 className='card-title'>{props.value} </h5>
     <p className='card-text'>Time: {props.Time}</p>
      <a className='btn my-btn' onClick={push}>Start</a>
      </div></div>
  )
}