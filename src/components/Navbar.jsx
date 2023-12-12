import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {

    const { user, isAuthenticated, logout } = useAuth();

    return (
        <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
            <Link to='/'>
                <h1 className=' text-2xl font-bold'>Categories Manager</h1>
            </Link>
            <ul className='flex gap-x-2'>
                {isAuthenticated ? (
                    <>
                        <li>
                            {`Welcome ${user.name}`}
                        </li>
                        <li>
                            <Link to='/categories'>Categories</Link>
                        </li>
                        <li>
                            <Link to='/login' onClick={ () => {logout()}}>Logout</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                    </>
                )}

            </ul>
        </nav>
    )
}

export default Navbar
