import React from 'react';
import { useForm } from 'react-hook-form';

export const Register = () => {
  const { register, handleSubmit, watch, errors, reset } = useForm();

  const onSubmit = ({name, location, phone, password}, e) => {
    e.target.reset(); // reset after form submit
    console.log(`name: ${name}, location: ${location}, phone:${phone}, password: ${password} `)
  };

  return (
    <div className='form-container'>
      <h1>
        Potluck <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='name'>Event Name</label>
          <input ref={register({ required: true })} type='text' name='name' />
          {errors.name && <p>This is required</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='location'>Event Location</label>
          <input
            ref={register({ required: true })}
            type='text'
            name='location'
          />
          {errors.location && <p>This is required</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone Number</label>
          <input ref={register({ required: true })} type='text' name='phone' />
          {errors.phone && <p>This is required</p>}
        </div>
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
        <input type='submit' 
        />
      </form>
    </div>
  );
};

export default Register;
