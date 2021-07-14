import React, { useState } from 'react'
import { Notif } from './Card';

export const Assignment = () => {
    const [status, setStatus] = useState('Pending')
    return(
        <div className='notif-box'>
            <ul className='list-group list-group-flush'>
                <div  data-toggle='modal' data-target='#submitass'>
                     <li className='list-group-item'>CSC 427 Assignment <span>{status}</span></li>
                </div>
                </ul>

            <div className='modal fade' id='submitass' tabIndex='-1' role='dialog' aria-labelledby='modal' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='logoutTitle'>Submit CSC 427 Assignment</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'> 
            <form>
              <div className='form-group'>
                <label for='submitass1'></label> 
                <input type='file' class='form-control-file' id='submitass1'/>
              </div>
            </form>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn my-btn' data-dismiss='modal' onClick={() => setStatus('Submitted')}>Submit</button>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
//add condition that if the notif hassnt been seen before, list-style-type= radio