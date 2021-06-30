import React from 'react';
import { useHistory } from 'react-router-dom'

export const Card = (props) => {
  let course = props.value
  let history = useHistory()
  const push = () => {
    history.push('/course')
  }
    return(
        <div className='card border-light mb-3 cardbox' style={{maxWidth: '18rem'}} onClick={push}>
         <a>
           <div className='card-header'>{course.substring(0,7)}</div>
           <div className='card-body '>
             <h5 className='card-title'>{course.substring(9)}</h5>
             <p className='card-text'>some quick example text to build on the card title to make up the bulk of the card content.</p>
            </div>
          </a>
        </div>
    )
}
export const Notif = (props) => {
  return (
    <li className='list-group-item'>{props.value}<span className='float-right'><small>{props.time}</small></span></li>
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