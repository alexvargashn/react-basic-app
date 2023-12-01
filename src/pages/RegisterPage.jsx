import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterPage = () => {
    const { register, handleSubmit } = useForm()

    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            <form onSubmit={ handleSubmit( (values) => { console.log(values) })}>
                <input 
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    type="text" placeholder='username' 
                    {...register('username', { required: true })} />
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
