import { useState, useEffect } from 'react'
import supabase from 'util/supabase'

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

  if (!session) {
    return (<h1>Hell</h1>)
  }
  else {
    return (<div>Logged in!</div>)
  }
}