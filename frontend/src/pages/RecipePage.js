import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar"


let r = {
    title: "Spicy Gluten-Free Chicken and Cheddar Waffles with Blackberry-Maple Syrup",
    author: "Username",
    image: "./Bread.jpg",
    description: "These crispy Cheddar waffles combine with chicken tenders and a spicy blackberry-muddled maple syrup for a sophisticated version of a classic Southern dish that's also gluten free!",
    ingredients: ["3/4 cup of flour", "3/4 cup of flour", "3/4 cup of flour", "3/4 cup of flour" ,"3/4 cup of flour", "3/4 cup of flour"],
    equipment: ["bowl","oven"],
    instructions: ["add 3/4 cup of flower", "bake 300F",]
}


function RecipePage(){
    const [data, setData] = useState(r)

    return(
        <>
            <NavBar/>
            <div id="RecipeInfo">
                <h2>{data.title}</h2>
                <p id="Author"> Recipe by {data.author}</p>
                <p id="Description">{data.description}</p>
                <img src={data.image}/>
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
            <ul>
                {ingredients.map(i => {
                    return (<li>{i}</li>)
                })}
            </ul>
        </div>
        
    )
}
function ListEquipment(equipment){
    return(
        <div id="List">
            <ul>
                {equipment.map(e => {
                    return (<li>{e}</li>)
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