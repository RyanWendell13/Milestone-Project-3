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
    const [loginMessage, setLoginMessage] = useState()

    const [signUpMessage, setSignUpMessage] = useState()

    return(
        <>
            <NavBar/>
            <div id="UserPanel">
                <div id="Sign Up">
                    <h2>SignUp</h2>
                    <form onSubmit={HandleSignupSubmit}>
                        <label>Username</label>
                        <input required type="text" placeholder="Enter Username" onChange={e => {setSignUp({...signUp,username: e.target.value })}}/>
                        <label>Password</label>
                        <input required type="password" placeholder="Enter Password" onChange={e => {setSignUp({...signUp,password: e.target.value })}}/>
                        {signUpMessage ? <p id="ErrorMessage">{signUpMessage}</p> : <></>}
                        <input required type="submit" id="Submit"/>
                    </form>
                </div>

                <div id="Line"></div>

                <div id="Login">
                    <h2>Login</h2>
                    <form onSubmit={HandleLoginSubmit}>
                        <label>Username</label>
                        <input required type="text" placeholder="Enter Username" onChange={e => {setLogin({...login,username: e.target.value })}}/>
                        <label>Password</label>
                        <input required type="password" placeholder="Enter Password" onChange={e => {setLogin({...login,password: e.target.value })}}/>
                        {loginMessage ? <p id="ErrorMessage">{loginMessage}</p> : <></>}
                        <input required type="submit" id="Submit"/>
                    </form>
                </div>
            </div>
        </>
        
    )

    async function HandleSignupSubmit(e){
        e.preventDefault()
        fetch("/api/users/new", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signUp)
        }).then(async m => {
            let response = await m.json()
            if(!response.message){
                await fetch("/api/users/authenication", {
                    method: "POST",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(signUp)
                })
                window.location.href = '/';
            }
            else{
                setSignUpMessage(response.message)
            }
            
        })
        

    }
    async function HandleLoginSubmit(e){
        e.preventDefault()
        fetch("/api/users/authenication", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login)
        }).then(async m => {
            let response = await m.json()
            console.log(response)
            if (!response.message){
                console.log("Redirect")
                window.location.href = '/';
            }
            else{
                setLoginMessage(response.message)
            }
        })
        
    }
}

export default UserPage