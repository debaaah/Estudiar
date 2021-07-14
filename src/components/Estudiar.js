import React from 'react'
import { useHistory } from 'react-router-dom'

export const Estudiar = () => {
    let history = useHistory();
    return(
        <div className='estudiar '>
            <h1>Estudiar</h1>
            <div><p>Estudiar is a study website for the students of the Computer Science Department of the University of Benin (UNIBEN) that allows the students to study their courses remotely and at their own pace. Students can also take tests set by the lecturers on Estudiar. </p></div>
            <div className='estudiar-btns d-flex justify-content-center'>
            <button type='button' className='btn my-btn ' onClick={() => {history.push('/login')}}>Login</button>
            <button type='button' className='btn my-btn ' onClick={() => {history.push('/student-sign-up')}}>Sign up</button>
            </div>
        </div>
    )
}