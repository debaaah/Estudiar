import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Formik, Form } from 'formik';
import { TextField } from './Textfield';
import * as Yup from 'yup';
import useLocalStorage from 'react-use-localstorage'

export const OldUser = (props) => {
    let history = useHistory();
    let user = props.value
    console.log(user)
  const validate = Yup.object({
    matNo: Yup.string()
    .matches(user.matNo,'User not found')
    .required('Matriculation Number is required'),
    password: Yup.string()
    .matches(user.password, 'password incorrect')
    .required('Password is required'),
  })
    //username and login only 
    return(
        <section className='section login'>
        <div className='container mt-3'>
        <div className='row justify-content-center'>
          <div className='col-7'>
            <h1>Login</h1>
            <Formik
            initialValues={{
              matNo: '',
              password: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
        history.push('/home')
              console.log('hi');
            }
            }
            >
                <Form>
                    <TextField label='Matriculation Number' name='matNo' type='text'/> 
                    <TextField label='Password' name='password' type='password'/>
                    <div className='d-flex justify-content-center'>
                    <button className='my-btn btn mt-3 col-5 ' type='submit'>Login</button>
                    </div>
                    
                </Form>
            </Formik>
            <div className='smalls mt-3'><small className='float-left' onClick={() => {history.push('/sign-up')}}><a>New User</a></small><small className='float-right'><a>Forgot Password</a></small></div>
           </div>
           </div>
        </div>
        </section>
    )
  }
  