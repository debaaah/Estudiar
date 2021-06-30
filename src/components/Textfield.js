import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return (
        <div className='mb-1 form-field'>
            <label htmlFor={field.name}>{label}</label>
            <input 
            className={`input-field form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            {...field}{...props}
            autoComplete='on'
            />
            <ErrorMessage component="small" name={field.name} className="error" />
            <br/>
        </div>
    )
}
export const Level =({label, ...props}) => {
    const [field, meta] = useField(props);
    const [level, setLevel] = useState('Choose level');
    const levels = [
        {
            value: 'Level'
        },
        {
        key: 1,
        value: 100
        },
        {
        key: 2,
        value: 200
       },
       {
        key: 3,
        value: 300
       },
        {
        key: 4,
        value: 400
        }
      ];
    const selected = (num) =>{ setLevel(num)}
    return(
        <div>
           {/* <label htmlFor={field.name}>{label}</label>*/}
            <select 
            value = {level} 
            onChange={(e)=> setLevel(e.target.value)}
            className='form-control'
            {...field}{...props}
            >
              { levels.map(item => (
                  <option value={item.value} key={item.key}>{item.value}</option>
               ))}
            </select>
            <ErrorMessage component="div" name={field.name} className="error" />
            <br/>
        </div>
    )
}
export const Checkbox = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return(
        <div className='form-check list-group-item'>
            <input className='form-check-input check-box' type='checkbox' id={field.id} {...field}{...props} />
            <label className='form-check-label' htmlFor={field.id}>{label}</label>
        </div>
    )
}