import React, { useContext } from "react"
import {Person, House} from 'react-bootstrap-icons'
import { CurrentUser } from "../contexts/CurrentUser"
function NavBar(){

    const {currentUser} = useContext(CurrentUser)

    function ManageLogin(){
        if (currentUser){
            return(
                <div id="UserText">
                    <p>Logged In As {currentUser.username}</p>
                </div>
            )
        }
        else{
            return(
                <a id="Icon" href="/User">
                    <Person/>
                </a>
            )
        }
    }

    return(
        <header>
            <h1>Recipes</h1>
            <div id="NavIcons">
               {ManageLogin()}
                <a id="Icon" href="/">
                    <House/>
                </a>
            </div>
        </header>
    )
}

export default NavBar