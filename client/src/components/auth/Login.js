import React from 'react';
import {useForm} from 'react-hook-form';

export const Login = () => {
  const {register, handleSubmit, watch, error} = useForm();

  const onSubmit = data => console.log(data)

  return (
    <div className='form-container'>
      <h1>
        Potluck <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='name'>Event Name</label>
          <input
            ref={register({required: true})}
            type='text'
            name='name'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            ref={register({required: true})}
            type='password'
            name='password'
          />
        </div>

        <input
          ref={register({required: true})}
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  )
}

export default Login;