import React from "react";
import { Link } from "react-router-dom"
import './Home.css'
import { Card } from './Card'
import { useHistory } from 'react-router-dom'
//import { Course}

export const Study = (props) => {
  let user = props.value
  let history = useHistory()
  const push = () => {
    history.push('/course')
  }
return (
  <div className='content-box d-flex justify-content-around course-box'>
    {user.courses.map(course => (
      <Card value={course} onClick={push}/>
    ))}
  </div>
)
}

