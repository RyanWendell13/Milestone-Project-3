import React from "react"
import {Person, House} from 'react-bootstrap-icons'
function NavBar(){
    return(
        <header>
            <h1>Recipes</h1>
            <div id="NavIcons">
                <a id="Icon" href="/">
                    <House/>
                </a>
                <a id="Icon" href="/User">
                    <Person/>
                </a>
            </div>
        </header>
    )
}

export default NavBar