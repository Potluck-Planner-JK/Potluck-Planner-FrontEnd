import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const Register = () => {
  const { register, handleSubmit, watch, errors} = useForm();

  const onSubmit = (data) => {
    axios.post('https://potluck-planner-webpt16.herokuapp.com/register', data)
    .then(res=>{
      console.log(res)
      console.log(res.data)
    })
    .catch(err=>{
      console.error(err)
    })
  };

  return (
    <div className='form-container'>
      <h1>
        Potluck <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* UserName */}
        <div className='form-group'>
          <label htmlFor='name'>Event Name</label>
          <input ref={register({ required: true })} type='text' name='username' />
          {errors.name && <p>This is required</p>}
        </div>
        {/* Password */}
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            ref={register({ required: true, minLength: 6 })}
            type='password'
            name='password'
          />
          {errors.password && errors.password.type ==="required" && (<p>This is required</p>)}
          {errors.password && errors.password.type === "minLength" && (<p>Password must be 6 characters or more</p>)}
        </div>
        {/* Date */}
        <div className='form-group'>
          <label htmlFor='date'>Date of Event</label>
          <input ref={register({ required: true })} type='text' name='date' />
          {errors.date && <p>This is required</p>}
        </div>
        {/* Location */}
        <div className='form-group'>
          <label htmlFor='location'>Event Location</label>
          <input
            ref={register({ required: true })}
            type='text'
            name='location'
          />
          {errors.location && <p>This is required</p>}
        </div>
        <input type='submit' 
        />
      </form>
    </div>
  );
};

export default Register;
