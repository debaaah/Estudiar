import React from "react";
import './Home.css'
import { Card } from './Card'
import { useHistory } from 'react-router-dom'

export const Course = (props) => {
    let history = useHistory()
    let user = props.value
    return(
        <div>
            <h1>Course</h1>
            <div>
                
    {/*user.courses.map(course => (
      <Card value={course}/>
    ))*/}
            </div>
        </div>
    )
}