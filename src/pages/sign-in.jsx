import React, { useRef } from 'react'
import supabase from '../util/supabase';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const email_val = useRef('');
    const password_val = useRef('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = email_val.current.value;
        const password = password_val.current.value;
        const { data, error } = await supabase.auth.signInWithPassword({email, password});

        console.log('Sign In successful:', { email, password });
        if (error) {
            console.error('Error signing in:', error.message);
            alert(error.message);
        } else {
            console.log('Sign In successful:', data);
            navigate("/");
            
        }
    }
    
    console.log('Rendering SignIn component');
    
    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4 mx-auto bg-gray-100 '>
            <h1 className='mb-4 text-2xl font-bold'>Sign In</h1>
            <form className='space-y-4 shadow-lg p-9' onSubmit={handleSubmit}>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Email</label>
                    <input ref={email_val} type='email' className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500' placeholder='Enter your email' />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Password</label>
                    <input ref={password_val} type='password' className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500' placeholder='Enter your password' />
                </div>
                <button type='submit' className='w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>Sign In</button>
                <p className='mt-2 text-sm text-gray-600'>Don't have an account? <a href='/sign-up' className='text-blue-600 hover:underline'>Sign Up</a></p>
            </form>
        </div>
    )
}
