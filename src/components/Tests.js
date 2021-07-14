import React from 'react'
import { TestCard } from './Card';

export const Test = () => {

    return(
        <div className ='tst-box'>
        <h5 className='aval'>AVAILABLE TESTS</h5>
        <div className='test-box'> 
        <TestCard value='CSC 411 Test' Time='10mins' /> 
        </div>
        </div>
    )
    
}