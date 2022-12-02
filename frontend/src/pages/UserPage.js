import React, { useState } from "react"
import NavBar from "../components/NavBar"

function UserPage(){

    const [signUp, setSignUp] = useState({
        username: "",
        password: ""
    })
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })

    return(
        <>
            <NavBar/>
            <div id="UserPanel">
                <div id="SignUp">
                    <h2>SignUp</h2>
                    <form onSubmit={HandleSignupSubmit}>
                        <label>Username</label>
                        <input required type="text" onChange={e => {setSignUp({...signUp,username: e.target.value })}}/>
                        <label>Password</label>
                        <input required type="password" onChange={e => {setSignUp({...signUp,password: e.target.value })}}/>
                        <input required type="submit" id="Submit"/>
                    </form>
                </div>

                <div id="Line"></div>

                <div id="Login">
                    <h2>Login</h2>
                    <form onSubmit={HandleLoginSubmit}>
                        <label>Username</label>
                        <input required type="text" onChange={e => {setLogin({...login,username: e.target.value })}}/>
                        <label>Password</label>
                        <input required type="password" onChange={e => {setLogin({...login,password: e.target.value })}}/>
                        <input required type="submit" id="Submit"/>
                    </form>
                </div>
            </div>
        </>
        
    )

    async function HandleSignupSubmit(e){
        e.preventDefault()
        await fetch("/api/users/new", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signUp)
        })


    }
    async function HandleLoginSubmit(e){
        e.preventDefault()
        await fetch("/api/users/authenication", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        })
        
    }
}

export default UserPage