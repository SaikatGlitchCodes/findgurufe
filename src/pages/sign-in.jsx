import React from 'react'

export default function SignIn() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4 mx-auto bg-gray-100 '>
            <h1 className='mb-4 text-2xl font-bold'>Sign In</h1>
            <form className='space-y-4 shadow-lg p-9'>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Email</label>
                    <input type='email' className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500' placeholder='Enter your email' />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Password</label>
                    <input type='password' className='block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500' placeholder='Enter your password' />
                </div>
                <button type='submit' className='w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>Sign In</button>
                <p className='mt-2 text-sm text-gray-600'>Don't have an account? <a href='/sign-up' className='text-blue-600 hover:underline'>Sign Up</a></p>
            </form>
        </div>
    )
}
