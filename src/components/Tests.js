import React from 'react'
import { TestCard } from './Card';

export const Test = () => {

    return(
        <div className='test-box'> 
        <TestCard value='CSC 234 Test' Time='10mins' /> 
        <TestCard value='CSC 314 Test' Time='10mins' /> 
        </div>
    )
    
}