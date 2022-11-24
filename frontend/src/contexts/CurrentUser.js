import {React, createContext, useState, useEffect} from "react";

export const CurrentUser= createContext()

function CurrentUserProvider({children}){
    const [currentUser, setCurrentUser] = useState()

    //Uncomment Later
    // useEffect(async () => {
    //     const getLoggedInUser = async () => {
    //         let response = await fetch('/api/user/profile',{
    //             credentials: 'include'
    //         })
    //         let user = await response.json()
    //         setCurrentUser(user)
    //     }
    //     getLoggedInUser()
    // },[])

    return (
        <CurrentUser.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider