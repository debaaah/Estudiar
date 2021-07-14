import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik';
import { TextField, Level, Checkbox } from './Textfield';
import * as Yup from 'yup';
import { Router, Route, Switch, Redirect, useHistory} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage'
import { Sust } from './SUST'
import { Sult } from './SULT'

 export const NewUser = () => {
   let history = useHistory();
  return(
    <Router>
      <section className='section sign-up'>
          <div className='container mt-3'>
          <div className='row justify-content-center'>
            <div className='col-7'>
           <h1 className='my-4 font-weight-bold-display-4'>Sign up</h1>
           <Route path='/student-sign-up' component={Sust}></Route>
           <Route path='/lecturer-sign-up' component={Sult}></Route>
    <div className='smalls mt-3'><small className='float-right' onClick={() => {history.push('/login')}}><a>Login</a></small></div>
    </div>
         </div>
         </div>
         </section>
    </Router>
  )
} 


 