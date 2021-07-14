import React from 'react'
import { Notif } from './Card';

export const Info = () => {
    return(
        <div className='notif-box'>
            <ul className='list-group list-group-flush'>
                <Notif value='The link to CSC 411 test has been posted under Tests. Take the test and submit before  03/07/21 12:00PM.' time='1hr ago' />
            </ul>
        </div>
    )
}
//add condition that if the notif hassnt been seen before, list-style-type= radio