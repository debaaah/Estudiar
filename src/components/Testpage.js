import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


export const Testpage = () => {
  let history = useHistory()
  let [ctime, setCtime] = useState('')
  const push = () => {
    history.push('/home')
  }
  
  
    const [seconds, setSeconds] = React.useState(10);
  
    React.useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds('TIME UP!');
        history.push('/home')
      }
    });
  
    return(
        <div className='test-container'>
            <h4>CSC 411 Test</h4>
    <div className='mt-2 mb-2 text-center text-uppercase font-weight-bold' >Time: <span>{seconds}</span></div>
            <form className='test-container-form'>
                <ol>
                    <li>
                        <div className='form-group'>
                            <label for='q1' >Lorem ipsum dolor sit amet? </label>
                            <textarea className='form-control' id='q1' rows='2'></textarea>
                        </div>
                    </li>
                    <li>                        
                        <div className='form-group'>
                            <label for='q1' >Vivamus commodo vitae ante vitae feugiat? </label>
                            <textarea className='form-control' id='q1' rows='2'></textarea>
                        </div>
                    </li>
                    <li>                        
                        <div className='form-group'>
                            <label for='q1' >Quisque ac justo sit amet nunc sollicitudin tincidunt ac id felis? </label>
                            <textarea className='form-control' id='q1' rows='2'></textarea>
                        </div>
                    </li>
                    <li>                        
                        <div className='form-group'>
                            <label for='q4' >Phasellus eleifend enim eget efficitur blandit? </label>
                            <textarea className='form-control' id='q4' rows='2'></textarea>
                        </div>
                    </li>
               </ol>
               <div className='text-right'><button type='button' onClick={push} className='my-btn btn'>Submit</button></div>
           </form>
        </div>

    )
}