import { useState, useEffect } from 'react'
import supabase from './util/supabase'
import Navbar from './components/navbar'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import NotFound from './pages/NotFound';
import CreateRequest from './pages/CreateRequest';

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <BrowserRouter>
      <Navbar session={Boolean(session)}/>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/create-request' element={session? <CreateRequest /> : <SignIn/>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

// SPA : React 