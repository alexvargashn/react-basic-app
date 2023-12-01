import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const { 
            register, 
            handleSubmit, 
            formState: { errors } 
        } = useForm();
    const { signUp, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated) navigate('/tasks');
    }, [isAuthenticated])

    const onSubmit = handleSubmit( async (values) => { 
        signUp(values);
    })

    return (
        <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            {
                RegisterErrors.map(({ msg }, i) => (
                    <div className='bg-red-500 p-2 text-white' key={ i }>
                        { msg }
                    </div> 
                ))
            }
            <form onSubmit={ onSubmit }>
                <input 
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    type="text" placeholder='name' 
                    {...register('name', { required: true })} 
                />
                { errors.name && <p className='text-red-500'> Username is required</p> }
                <input 
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    type="email" placeholder='email' 
                    {...register('email', { required: true })} 
                />
                { errors.email && <p className='text-red-500'> Email is required</p> }
                <input 
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    type="password" name="password" placeholder='password' 
                    { ...register('password', { required: true })} 
                />
                { errors.password && <p className='text-red-500'> Password is required</p> }
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
