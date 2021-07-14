import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import { TextField } from './Textfield';
import * as Yup from 'yup';

export const About = (props) => {
    let user = props.value
    console.log(user.first_n + ' ' + user.last_n)
    const [name, setName] = useState(user.first_n + ' ' + user.last_n)
    const [mat, setMat] = useState(user.matNo)
    const [lev, setLev] = useState(user.level)
    const [ema, setEma] = useState(user.email)

    const validate = Yup.object({
      password: Yup.string()
      .matches(user.password, 'Old password incorrect')
      .required('Password is required'),
      new_p: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .required('New password is required'),
      re_new_p: Yup.string()
      .oneOf([Yup.ref('new_p'), null],'Password must match')
     .required('Confirm new password'),
     mail: Yup.string()
     .email('Email is invalid'),
     nme: Yup.string()
     .max(30, 'Must be 30 characters or less')
    })
   // const 
    return(
        <div className='about'> 
            <div>
                <h5>Student Information</h5>
                <div>
                    <table className='table table-hover'>
                    <tr>
                            <th scope='row'>Name</th>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Matric Number</th>
                            <td>{mat}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Level of Study</th>
                            <td>{lev}</td>
                        </tr>
                        <tr>
                            <th scope='row'>Email Address</th>
                            <td>{ema}</td>
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
                <div className='mt-5'>
                    <button type='button' data-toggle='modal' data-target='#pword' className='btn my-btn'> Change Password </button>
                    <button type='button' data-toggle='modal' data-target='#edit' className='btn my-btn float-right'> Edit profile </button>
                </div>
            </div>
            <div className='modal fade' id='pword' tabIndex='-1' role='dialog' aria-labelledby='pword' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='logoutTitle'>Change Password</h5> 
            <button type='button' className='close' data-dismiss='modal' aria-label='close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
              <Formik
            initialValues={{
              password: '',
              new_p: '',
              re_new_p: ''
            }}
            validationSchema={validate}
            >
                <Form>
                    <TextField label='Password' name='password' type='password'/>
                    <TextField label='New Password' name='new_p' type='password'/>
                    <TextField label='Confirm Password' name='re_new_p' type='password'/>
                </Form>
            </Formik>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn my-btn' data-dismiss='modal'>Change</button>
          </div>
        </div>
      </div>
    </div>

    <div className='modal fade' id='edit' tabIndex='-1' role='dialog' aria-labelledby='edit' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='logoutTitle'>Edit Profile</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
          <Formik
            initialValues={{
              nme: '',
              mail: ''
            }}
            validationSchema={validate}
            >
                <Form>
                <TextField label='Name (first and last names)' name='nme' type='text'/>
                <TextField label='Email Address' name='mail' type='email' />
                {console.log(ema, name)}
                </Form>
            </Formik>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn my-btn' data-dismiss='modal'>Change</button>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
    
}