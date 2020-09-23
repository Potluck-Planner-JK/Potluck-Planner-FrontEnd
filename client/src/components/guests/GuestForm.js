import React from 'react';
import {useForm } from 'react-hook-form'


const GuestForm = () => {
  const {register, errors, handleSubmit, reset} = useForm()








  const onSubmit = ({name, email, item},e) => {
    e.target.reset()
    console.log(`${name}, ${email}, ${item}`)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        ref={register({ required: true })}
        type='text'
        placeholder='Name'
        name='name'
      />
      {errors.name && <p>Please enter your name</p>}
      <input
        ref={register({ required: true })}
        type='text'
        placeholder='Email'
        name='email'
      />
      {errors.email && <p>Please Enter your Email</p>}
      <h5>Item Bringing</h5>
      <input name="item" type="radio" value="Appetizers" ref={register({ required: true })}/>{' '}
      Appetizer{' '}
      <input name="item" type="radio" value="Entree" ref={register({ required: true })}/>
{' '}
      Entree{' '}
      <input name="item" type="radio" value="Dessert" ref={register({ required: true })}/>
{' '}
      Dessert{' '}
      <input name="item" type="radio" value=" Utensils" ref={register({ required: true })}/>
{' '}
      Utensil
      <div>
        <input
          ref={register}
          type='submit'

        />
        {errors.item && <p>Please Select an Item</p>}
      </div>
    </form>
  );
};

export default GuestForm;
