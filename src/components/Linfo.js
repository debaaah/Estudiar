import React from 'react'
import { Notif } from './Card';

export const Linfo = () => {
    return(
        <div className='notif-box'>
            <ul className='list-group list-group-flush'>
                <Notif value='CSC 325: 100 assignments have been submitted. Click to view more          ' time='1hr ago' />
                <Notif value='CSC 427: Test has been succesfully posted. Click to view more         ' time='1hr ago' />
                <Notif value='Admin: Confirm email address' time='3hr ago' />
            </ul>
        </div>
    )
}
//add condition that if the notif hassnt been seen before, list-style-type= radio