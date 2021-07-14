import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik';
import { TextField, Level, Checkbox } from './Textfield';
import * as Yup from 'yup';
import { Router, Route, Switch, Redirect, useHistory} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage'


export const Sust = () => {
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
      matNo: Yup.string()
      .matches(/^([a-zA-Z]{3})(\d{7})$/,'Invalid, Matriculation Number looks like ABC123456')
      .required('Matriculation Number is required'),
      level: Yup.string()
      .matches(/^[0-9]{3}$/, 'Level of study is required')
      .required('Level of study is required'),
      password: Yup.string()
      .min(6, 'Must be 6 characters or more')
      .required('Password is required'),
      rePassword: Yup.string()
      .oneOf([Yup.ref('password'), null],'Password must match')
      .required('Confirm password')
    })
   const [user, setUser] = useLocalStorage('user', 'initValue')
    return(
        <section className='section sign-up'>
          <div className='container mt-3'>
          <div className='row justify-content-center'>
            <div className='col-7'>
           <h1 className='my-4 font-weight-bold-display-4'>Sign up</h1>
        <div className='sust'>
            <div><Link to='/lecturer-sign-up'><h5>student</h5></Link></div>
        <Formik
    initialValues={{
      first_n: '',
      last_n: '',
      email: '',
      matNo: '',
      level: '',
      password: '',
      rePassword: '',
      courses: []
    }}
    validationSchema={validate}
    onSubmit={values => {
      console.log('hi');
      setUser(JSON.stringify(values))
      history.push('/home')
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
             <TextField label='Matriculation Number' name='matNo' type='text'/>
             <Level label='Choose level' name='level' />
             <div className='form-row'>
               <div className='col-md-6 mb-3'>
                 <TextField label='Password' name='password' type='password'/>
                </div>
                <div className='col-md-6 mb-3'>
                  <TextField label='Confirm Password' name='rePassword' type='password'/>
                </div>
             </div>
             <button className='mb-3 btn-outline-secondary btn' type='button' data-toggle="modal" data-target="#exampleModal" >Select Courses</button>
             <div className='  d-flex justify-content-center'> 
             <button className='reg btn mt-3 my-btn col-6' type='submit'>Register</button>
             </div>
             
            
         <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">You've selected  courses</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className='level-box mb-4 list-group list-group-flush'>
                   <h3>100 Level courses</h3>
                   <Checkbox value='CHM 111: General Chemistry I' label='CHM 111: General Chemistry I'  name='courses'  id='defaultCheck1' />
                   <Checkbox value='CSC 110: Introduction to Computing' label='CSC 110: Introduction to Computing' name='courses' id=" defaultCheck2"/>
                   <Checkbox value='CSC 111: Programming Essentials' label='CSC 111: Programming Essentials' name='courses'  id="defaultCheck3" />
                   <Checkbox value='GST 111: Use of English I' label='GST 111: Use of English I' name='courses' id="defaultCheck4" />
                   <Checkbox label='GST 112: Philosophy and Logic' value='GST 112: Philosophy and Logic' name='courses'   id="defaultCheck5" />
                   <Checkbox value='MTH 110: Algebra and Trigonometry' label='MTH 110: Algebra and Trigonometry' name='courses'  id="defaultCheck6" />
                   <Checkbox value='MTH 112: Calculus' label='MTH 112: Calculus'name='courses' id="defaultCheck7" />
                   <Checkbox value='PHY 111: Mechanical, Thermal &amp; Physical properties of matter'label='PHY 111: Mechanical, Thermal &amp; Physical properties of matter' name='courses' id="defaultCheck8" />
                   <Checkbox value='PHY 109: Practical Physics' label='PHY 109: Practical Physics' name='courses'  id="defaultCheck9" />
                   <Checkbox value='CHM 122: General Chemistry II' label='CHM 122: General Chemistry II' name='courses' id="defaultCheck10" />
                   <Checkbox value='CSC 120: Introduction to Software Packages' label='CSC 120: Introduction to Software Packages' name='courses' id="defaultCheck11" />
                   <Checkbox value='GST 121: Peace Studies and Conflict Resolution' label='GST 121: Peace Studies and Conflict Resolution' name='courses' id="defaultCheck12" />
                   <Checkbox value='GST 122: Nigerian People and Culture' label='GST 122: Nigerian People and Culture' name='courses' id="defaultCheck13" />
                   <Checkbox value='GST 123: History and Philosophy of Science and Technology' label='GST 123: History and Philosophy of Science and Technology' name='courses'   id="defaultCheck14" />
                   <Checkbox value='MTH 123: Vectors, Geometry and Statistics' label='MTH 123: Vectors, Geometry and Statistics' name='courses'   id="defaultCheck15" />
                   <Checkbox value='MTH 125: Differential equation and Dynamics' label='MTH 125: Differential equation and Dynamics' name='courses'  id="defaultCheck16" />
                   <Checkbox value='PHY 124: Electromagnetism and Modern Physics' label='PHY 124: Electromagnetism and Modern Physics' name='courses' id="defaultCheck17" />
                   </div>
                   <div className='level-box mb-4 list-group list-group-flush'>
                   <h3>200 Level courses</h3>
                   <Checkbox value='CSC 211: Structured programming in PASCAL' label='CSC 211: Structured programming in PASCAL' name='courses' id='defaultCheck18' />
                   <Checkbox value='CSC 212: Symbolic programming in FORTRAN' label=' CSC 212: Symbolic programming in FORTRAN' name='courses' id='defaultCheck19' />
                   <Checkbox value='CSC 217: Information Technology: Design, Policy and Application' label='CSC 217: Information Technology: Design, Policy and Application' name='courses' id='defaultCheck20' />
                   <Checkbox value='CSC 237: Information Interfaces and Presentation' label='CSC 237: Information Interfaces and Presentation' name='courses' id='defaultCheck21' />
                   <Checkbox value='MTH 219: Statistics' label='MTH 219: Statistics' name='courses' id='defaultCheck22' />
                   <Checkbox value='MTH 230: Linear algebra' label='MTH 230: Linear algebra' name='courses' id='defaultCheck23' />
                   <Checkbox value='CSC 220: Introduction to Data Processing' label='CSC 220: Introduction to Data Processing' name='courses' id='defaultCheck24' />
                   <Checkbox value='CSC 222: Assembly Language programming I' label='CSC 222: Assembly Language programming I' name='courses' id='defaultCheck25' />
                   <Checkbox value='CSC 224: Introduction to C and C++ programming' label='CSC 224: Introduction to C and C++ programming' name='courses' id='defaultCheck26' />
                   <Checkbox value='MTH 227: Introduction to Numerical Analysis' label='MTH 227: Introduction to Numerical Analysis' name='courses' id='defaultCheck27' />
                   <Checkbox value='PHY 224: Electromagnetism and Electronics' label='PHY 224: Electromagnetism and Electronics' name='courses' id='defaultCheck28' />
                   </div>
                   <div className='level-box mb-4 list-group list-group-flush'>
                   <h3>300 Level courses</h3>
                   <Checkbox value='CSC 311: Web Technology &amp; Application' label='CSC 311: Web Technology &amp; Application' name='courses' id='defaultCheck29' />
                   <Checkbox value='CSC 312: Assembly Language Programming' label='CSC 312: Assembly Language Programming' name='courses' id='defaultCheck30' />
                   <Checkbox value='CSC 313: Data Structure' label='CSC 313: Data Structure' name='courses' id='defaultCheck31' />
                   <Checkbox value='CSC 314: Operations Research' label='CSC 314: Operations Research' name='courses' id='defaultCheck32' />
                   <Checkbox value='CSC 316: Digital Computer Design' label='CSC 316: Digital Computer Design' name='courses' id='defaultCheck33' />
                   <Checkbox value='CSC 318: Introduction to Formal Languages' label='CSC 318: Introduction to Formal Languages' name='courses' id='defaultCheck34' />
                   <Checkbox value='MTH 317: Numerical Linear Algebra' label='MTH 317: Numerical Linear Algebra' name='courses' id='defaultCheck35' />
                   <Checkbox value='CED 300: Entrepreneuship Development' label='CED 300: Entrepreneuship Development' name='courses' id='defaultCheck36' />
                   <Checkbox value='CSC 321: Systems Analysis and Design' label='CSC 321: Systems Analysis and Design' name='courses' id='defaultCheck37' />
                   <Checkbox value='CSC 325: Compiler Construction' label='CSC 325: Compiler Construction' name='courses' id='defaultCheck38' />
                   <Checkbox value='CSC 329: Research Methodology' label='CSC 329: Research Methodology' name='courses' id='defaultCheck39' />
                   </div>
                   <div className='level-box mb-4 list-group list-group-flush'>
                   <h3>400 Level courses</h3>
                   <Checkbox value='CSC 400: Seminars' label='CSC 400: Seminars' name='courses' id='defaultCheck40' />
                   <Checkbox value='CSC 411: Operationg systems' label=' CSC 411: Operationg systems' name='courses' id='defaultCheck41' />
                   <Checkbox value='CSC 413: Database Management' label='CSC 413: Database Management' name='courses' id='defaultCheck42' />
                   <Checkbox value='CSC 414: Management Science' label='CSC 414: Management Science' name='courses' id='defaultCheck43' />
                   <Checkbox value='CSC 415: Artificial Intelligence' label='CSC 415: Artificial Intelligence' name='courses' id='defaultCheck44' />
                   <Checkbox value='CSC 418: Advanced design and analysis of algorithm' label='CSC 418: Advanced design and analysis of algorithm' name='courses' id='defaultCheck45' />
                   <Checkbox value='CSC 432: Systems Programming' label='CSC 432: Systems Programming' name='courses' id='defaultCheck46' />
                   <Checkbox value='CSC 326: Computer Architecture' label='CSC 326: Computer Architecture' name='courses' id='defaultCheck47' />
                   <Checkbox value='CSC 421: Software Engineering' label='CSC 421: Software Engineering' name='courses' id='defaultCheck48' />
                   <Checkbox value='CSC 422: Concept of Programming language' label='CSC 422: Concept of Programming language' name='courses' id='defaultCheck49' />
                   <Checkbox value='CSC 427: Data Communication Network' label='CSC 427: Data Communication Network' name='courses' id='defaultCheck50' />
                   <Checkbox value='CSC 499: Project' label='CSC 499: Project' name='courses' id='defaultCheck51' />
                   </div>
      </div>
      <div className="modal-footer">
        <button type="submit" className="btn my-btn" data-dismiss="modal" >Done</button>
      </div>
    </div>
  </div>
</div>
            
           </Form>
          
        )}
    </Formik>
    <div className='smalls mt-3'><small className='float-right' onClick={() => {history.push('/login')}}><a>Login</a></small></div>
    </div>
    </div>
         </div>
         </div>
         </section>
    )
}