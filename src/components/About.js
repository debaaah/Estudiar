import React from 'react'

export const About = (props) => {
    let user = props.value
    return(
        <div className='about'> 
            <div>
                <h5>Student Information</h5>
                <div>
                    <table className='table table-hover'>
                        <tr>
                            <th scope='row'>Matric Number</th>
                            <td>{user.matNo}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Level of Study</th>
                            <td>{user.level}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Email Address</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Courses</th>
                            <td>
                                <ul style={{listStyleType: 'none'}}>
                                    {user.courses.map(course => (
                                        <li>{course}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
    
}