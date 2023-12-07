import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { signIn, errors: signInErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(data => {
        signIn(data);
    });

    useEffect(() => {
      if(isAuthenticated) navigate('/categories');
    }, [isAuthenticated])
    

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                {
                    signInErrors.map(({ msg }, i) => (
                        <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
                            {msg}
                        </div>
                    ))
                }
                <h1 className='text-2xl font-bold'>Login</h1>
                <form onSubmit={onSubmit}>
                    <input
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        type="email" placeholder='email'
                        {...register('email', { required: true })}
                    />
                    {errors.email && <p className='text-red-500'> Email is required</p>}
                    <input
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        type="password" name="password" placeholder='password'
                        {...register('password', { required: true })}
                    />
                    {errors.password && <p className='text-red-500'> Password is required</p>}
                    <button type="submit">
                        LogIn
                    </button>
                </form>
                <p className='mt-2 flex gap-x-2 justify-between'>
                    ¿No tienes una cuenta aún? <Link to='/register' className='text-sky-500'>Registrate</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage
