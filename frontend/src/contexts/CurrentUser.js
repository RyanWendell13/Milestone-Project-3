import {React, createContext, useState, useEffect} from "react";

export const CurrentUser= createContext()

function CurrentUserProvider({children}){
    const [currentUser, setCurrentUser] = useState()

    useEffect(async () => {
        const getLoggedInUser = async () => {
            let response = await fetch('/api/users/profile',{
                credentials: 'include'
            })
            let user = await response.json()
            console.log("USER")
            console.log(user)
            setCurrentUser(user)
        }
        getLoggedInUser()
    },[])

    return (
        <CurrentUser.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider