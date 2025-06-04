import React from 'react'
import supabase from '../util/supabase'

export default function Navbar({session}) {
  const signout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) console.error('Error signing out:', error.message)
  }
  return (
    <div className='flex items-center justify-between p-4 text-white bg-gray-800'>  
        <div className='text-2xl font-bold'>MyApp</div>
        <nav className='space-x-4'>
            <a href="/" className='hover:text-gray-400'>Home</a>
            <a href="/about" className='hover:text-gray-400'>About</a>
            <a href="/contact" className='hover:text-gray-400'>Contact</a>
        </nav>
        <div className='flex items-center space-x-4'>
            { !session ? 
            <a href='/sign-in' className='px-4 py-2 bg-blue-600 rounded hover:bg-blue-700'>Login</a> :
            <button onClick={signout} className='px-4 py-2 bg-red-600 rounded hover:bg-red-700'>Logout</button>}
        </div>
    </div>
  )
}
