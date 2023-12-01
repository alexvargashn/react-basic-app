import React from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'

const RegisterPage = () => {
    const { register, handleSubmit } = useForm()
    const { signUp, user } = useAuth();

    console.log(user);

    const onSubmit = handleSubmit( async (values) => { 
        signUp(values);
    })

    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            <form onSubmit={ onSubmit }>
                <input 
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    type="text" placeholder='name' 
                    {...register('name', { required: true })} />
                <input 
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    type="email" placeholder='email' 
                    {...register('email', { required: true })} />
                <input 
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    type="password" name="password" placeholder='password' 
                    { ...register('password', { required: true })} />
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
