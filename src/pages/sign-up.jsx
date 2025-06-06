import React, { useState } from 'react'
import supabase from '../util/supabase';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        
        if (error) {
            console.error('Error signing up:', error.message);
            alert(error.message);
        } else {
            console.log('Sign Up successful:', data);
            navigate("/");
        }
        
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4 mx-auto bg-gray-100'>
            <h1 className='mb-4 text-2xl font-bold'>Sign Up</h1>
            <form className='space-y-4 shadow-xl w-96 p-9' onSubmit={handleSubmit}>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Email</label>
                    <input
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        type='email'
                        className='block w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500' placeholder='Enter your email'
                    />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Password</label>
                    <input
                        onChange={(e) => { setPassword(e.target.value) }}
                        value={password}
                        type='password'
                        className='block w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500' placeholder='Enter your password' />
                </div>
                <button type='submit' className='w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>Sign Up</button>
                <p className='mt-2 text-sm text-gray-600'>Have an account? <a href='/sign-in' className='text-blue-600 hover:underline'>Sign In</a></p>
            </form>
        </div>
    )
}
