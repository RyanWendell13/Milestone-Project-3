import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"

function RecipePage(){
    const [data, setData] = useState()

    return(
        <>
            <NavBar/>
            <div id="RecipeContainer">
                <img></img>
                <div id="RecipeInfo">
                    <h2>{data.title}.</h2>
                    <p>{data.description}</p>
                    {ListIngredients(data.ingredients)}
                    {ListSteps(data.steps)}
                </div>
            </div>
        </>
    )
}

function ListIngredients(ingredients){
    return(
        <ul>
            {ingredients.map(i => {
                return (<li>{ingredients.name + ": " + ingredients.quantity}</li>)
            })}
        </ul>
    )
}

function ListSteps(steps){
    return(
        <ol>
            {steps.map(s => {
                return (<li>{s}</li>)
            })}
        </ol>
    )
}

export default RecipePage