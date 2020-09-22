import React from 'react';
import { useForm } from 'react-hook-form';

export const Register = () => {
    const { register, handleSubmit, watch, error } = useForm();

    const onSubmit = data => console.log(data)

    return (
        <div className='form-container'>
            <h1>
                Potluck <span className='text-primary'>Register</span>
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <label htmlFor='name'>Event Name</label>
                    <input
                        ref={register({ required: true })}
                        type='text'
                        name='name'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='location'>Event Location</label>
                    <input
                        ref={register({ required: true })} type='text' name='location' />
                </div>
                <div className='form-group'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input
                        ref={register({ required: true })} type='text' name='phone' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        ref={register({ required: true, minLength: 6 })}
                        type='password'
                        name='password'
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password2'>Confirm password</label>
                    <input
                        ref={register({ required: true, minLength: 6 })}
                        type='password'
                        name='password2'
                    />
                </div>
                <input
                    ref={register({ required: true })}
                    type='submit'
                    value='Register'
                    className='btn btn-primary btn-block'
                />
            </form>
        </div>
    );
};

export default Register;