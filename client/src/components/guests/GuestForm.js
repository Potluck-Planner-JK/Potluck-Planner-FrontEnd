import React from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer, FormGroup, Input, Header, Select } from '../../Styled/Forms';


const GuestForm = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();
    console.log(data);
  };

  return (
    <FormContainer>
      <Header>
        <span className='text-primary'>Sign Up for Potluck!</span>
      </Header>
      <form onSubmit={handleSubmit(onSubmit)}>

        <Input
          ref={register({ required: true })}
          type='text'
          placeholder='Name'
          name='name'
        />
        {errors.name && <p>Please enter your name</p>}
       


        <Input
          ref={register({ required: true })}
          type='text'
          placeholder='Email'
          name='email'
        />
        {errors.email && <p>Please Enter your Email</p>}
   

        <Header>Item Bringing</Header>
        <Input select
          name='item'
          type='radio'
          value='Appetizers'
          ref={register({ required: true })}
        />{' '}
        Appetizer{' '}
        <Input select
          name='item'
          type='radio'
          value='Entree'
          ref={register({ required: true })}
        />{' '}
        Entree{' '}
        <Input select
          name='item'
          type='radio'
          value='Dessert'
          ref={register({ required: true })}
        />{' '}
        Dessert{' '}
        <Input select
          name='item'
          type='radio'
          value=' Utensils'
          ref={register({ required: true })}
        />{' '}
        Utensil
        <div>
          <Input submit ref={register} type='submit' />
          {errors.item && <p>Please Select an Item</p>}
        </div>
      </form>
    </FormContainer>
  );
};

export default GuestForm;
