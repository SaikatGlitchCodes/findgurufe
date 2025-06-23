import { useState, useEffect } from 'react'
import supabase from './util/supabase'
import Navbar from './components/navbar'
import { BrowserRouter, Route, Routes } from "react-router";
import Home from './pages/Home';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import NotFound from './pages/NotFound';
import CreateRequest from './pages/CreateRequest';
import UserContext from './context/userContext';

export default function App() {


  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/create-request' element={true ? <CreateRequest /> : <SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

// SPA : React 