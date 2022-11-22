import React from "react"
import NavBar from "../components/NavBar"

function UserPage(){
    return(
        <>
            <NavBar/>
            <div id="UserPanel">
                <div id="SignUp">
                    <h2>SignUp</h2>
                    <form>
                        <label>Email</label>
                        <input required type="text"/>
                        <label>Password</label>
                        <input required type="text"/>
                        <input required type="submit" id="Submit"/>
                        
                    </form>

                </div>

                <div id="Line"></div>

                <div id="Login">
                    <h2>Login</h2>
                    <form>
                        <label>Email</label>
                        <input required type="text"/>
                        <label>Password</label>
                        <input required type="text"/>
                        <input required type="submit" id="Submit"/>
                    </form>

                </div>
            </div>
        </>
        
    )
}

export default UserPage