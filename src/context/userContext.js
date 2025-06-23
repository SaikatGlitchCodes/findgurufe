import React, { useContext, useEffect, useState } from "react"
import supabase from "../util/supabase"

const UserContextAPI = React.createContext(null)

const UserContext = ({ children }) => {
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
        <UserContextAPI.Provider value={{ session, profile: session?.user || null }}>
            {children}
        </UserContextAPI.Provider>
    )
}

const useUser = () => {
    const userData = useContext(UserContextAPI)
    if (userData === undefined) {
        throw new Error("useUserContext must be used within a UserContext")
    }
    return userData
}

export { UserContextAPI, useUser }
export default UserContext;