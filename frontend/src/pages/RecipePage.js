import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import { Dash } from "react-bootstrap-icons"


function RecipePage(){
    let r = {
        title: "Bread",
        author: "Username",
        image: "../../Bread.jpg",
        description: "description description description description description description description description description description description description description description description description description description description description description description description description ",
        ingredients: ["3/4 cup of flour", "3/4 cup of flour", "3/4 cup of flour", "3/4 cup of flour" ,"3/4 cup of flour", "3/4 cup of flour"],
        equipment: ["bowl","oven"],
        instructions: ["add 3/4 cup of flower to bowl", "bake 300F",]
    }
    
    const [data, setData] = useState(r)

    return(
        <>
            <NavBar/>
            <div id="RecipeInfo">
                <h2>{data.title}</h2>
                <button id="IconButton">
                    <Dash/>
                </button>
                <p id="Author"> Recipe by {data.author}</p>
                <p id="Description">{data.description}</p>
                <img src={data.image} alt={data.title}/>
                {ListIngredients(data.ingredients)}
                {ListEquipment(data.equipment)}
                {ListInstructions(data.instructions)}
            </div>
        </>
    )
}

function ListIngredients(ingredients){
    return(
        <div id="List">
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map(i => {
                    return (<p>{i}</p>)
                })}
            </ul>
        </div>
        
    )
}
function ListEquipment(equipment){
    return(
        <div id="List">
            <h3>Equipment</h3>
            <ul>
                {equipment.map(e => {
                    return (<p>{e}</p>)
                })}
            </ul>
        </div>
    )
}

function ListInstructions(instructions){
    let count = 0;
    return(
        <>
            {instructions.map(i => {
                count++
                return (
                    <div id="Step">
                        <h3>{"Step "+ count}</h3>
                        <p>{i}</p>
                    </div>
                )
            })}
        </>
    )
}

export default RecipePage