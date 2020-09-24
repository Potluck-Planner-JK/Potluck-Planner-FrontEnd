import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios'

export const Login = () => {
  const {register, handleSubmit, watch, errors} = useForm();

  const onSubmit = (data )=> {
    axios.post('https://potluck-planner-webpt16.herokuapp.com/login', data)
    .then(res=>{
      console.log(res)
      console.log(res.data)
    })
    .catch(err=>{
      console.error(err)
    })
  }

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
            name='username'
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