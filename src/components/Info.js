import React from 'react'
import { Notif } from './Card';

export const Info = () => {
    return(
        <div className='notif-box'>
            <ul className='list-group list-group-flush'>
                <Notif value='Csc 234 test' time='1hr' />
                <Notif value='Csc 314 test' time='2hr'/>
                <Notif value='Submit course registration slip to Osas' time='5hr'/>
                <Notif value='Pay your Dues!' time='7hr'/>
            </ul>
        </div>
    )
}
//add condition that if the notif hassnt been seen before, list-style-type= radio