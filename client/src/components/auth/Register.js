import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FormContainer, FormGroup, Input, Header } from '../../Styled/Forms';

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
    <FormContainer>
      <Header>
        Potluck <span className='text-primary'>Register</span>
      </Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* UserName */}
        <FormGroup>
          <Input ref={register({ required: true })} type='text' name='username' placeholder='Event Name' />
          {errors.username && <p>This is required</p>}
        </FormGroup>
        {/* Password */}
        <FormGroup>
          <Input
            ref={register({ required: true, minLength: 6 })}
            type='password'
            name='password'
            placeholder='Event Password'
          />
          {errors.password && errors.password.type ==="required" && (<p>This is required</p>)}
          {errors.password && errors.password.type === "minLength" && (<p>Password must be 6 characters or more</p>)}
        </FormGroup>
        {/* Date */}
        <FormGroup>
          <Input ref={register({ required: true })} type='text' name='date' placeholder='Date of Event'/>
          {errors.date && <p>This is required</p>}
        </FormGroup>
        {/* Location */}
        <FormGroup>
          <Input
            ref={register({ required: true })}
            type='text'
            name='location'
            placeholder = 'Location of Event'
          />
          {errors.location && <p>This is required</p>}
        </FormGroup>
        <Input submit type='submit' 
        />
      </form>
    </FormContainer>
  );
};

export default Register;
