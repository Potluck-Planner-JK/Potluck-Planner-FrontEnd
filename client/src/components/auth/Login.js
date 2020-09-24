import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios'
import { FormContainer, FormGroup, Input, Header } from '../../Styled/Forms';




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
    <FormContainer>
      <Header>
       <span className='text-primary'>Potluck Login</span>
      </Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Input
            ref={register({required: true})}
            type='text'
            name='username'
            placeholder= 'Event Name'
          />
          {errors.username && <p>Please enter your event name</p>}
        </FormGroup>

        <FormGroup>
          <label htmlFor='password'>Password</label>
          <Input
            ref={register({required: true, minLength: 6})}
            type='password'
            name='password'
            placeholder='Event Password'
          />
          {errors.password && errors.password.type ==="required" && (<p>Please enter your password</p>)}
          {errors.password && errors.password.type === "minLength" && (<p>Password must be 6 characters or more</p>)}
        </FormGroup>

        <Input submit
          ref={register({required: true})}
          type='submit'
          name='submit'
          value='Login'
        />
      </form>
    </FormContainer>
  )
}

export default Login;