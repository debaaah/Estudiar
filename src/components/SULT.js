import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik';
import { TextField, Level, Checkbox } from './Textfield';
import * as Yup from 'yup';
import { Router, Route, Switch, Redirect, useHistory} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage'


export const Sult = () => {
    let history = useHistory();
    const validate = Yup.object({
     first_n: Yup.string()
     .matches(/^[a-zA-Z]{1,15}$/, 'Must be 15 characters or less')
     .required('First Name is required'),
     last_n: Yup.string()
      .matches(/^[a-zA-Z]{1,15}$/, 'Must be 30 characters or less')
      .required('Other Names are required'),
      email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
      idNo: Yup.string()
      .matches(/^([a-zA-Z]{3})(\d{7})$/,'Invalid, Identification Number looks like ABC123456')
      .required('Identification Number is required'),
      password: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .required('Password is required'),
      rePassword: Yup.string()
      .oneOf([Yup.ref('password'), null],'Password must match')
      .required('Confirm password')
    })
   const [Luser, setLuser] = useLocalStorage('Luser', 'initValue')
    return(
        <section className='section sign-up'>
          <div className='container mt-3'>
          <div className='row justify-content-center'>
            <div className='col-7'>
           <h1 className='my-4 font-weight-bold-display-4'>Sign up</h1>
        <div className='sust'>
            <div><Link to='/student-sign-up'><h5>lecturer</h5></Link></div>
        <Formik
    initialValues={{
      first_n: '',
      last_n: '',
      email: '',
      idNo: '',
      password: '',
      rePassword: ''
    }}
    validationSchema={validate}
    onSubmit={values => {
      console.log('hi');
      setLuser(JSON.stringify(values))
      history.push('/lecturers-home')
    }
    }
    >
        {formik => (
           <Form>
             

           <div className='form-row ' >
               <div className='col-md-6 '>
                 <TextField label='First Name' name='first_n' type='text'/>
                </div>
                <div className='col-md-6'>
                  <TextField label='Last Names' name='last_n' type='text'/>
                </div>
             </div>

             <TextField label='Email Address' name='email' type='email'/>
             <TextField label='Identification Number' name='idNo' type='text'/>
             <div className='form-row'>
               <div className='col-md-6 mb-3'>
                 <TextField label='Password' name='password' type='password'/>
                </div>
                <div className='col-md-6 mb-3'>
                  <TextField label='Confirm Password' name='rePassword' type='password'/>
                </div>
             </div>
             <div className='  d-flex justify-content-center'> 
             <button className='reg btn mt-3 my-btn col-6' type='submit'>Register</button>
             </div>
             

            
           </Form>
          
        )}
    </Formik>
    <div className='smalls mt-3'><small className='float-right' onClick={() => {history.push('/lecturer-login')}}><a>Login</a></small></div>
    </div>
    </div>
         </div>
         </div>
         </section>
    )
}