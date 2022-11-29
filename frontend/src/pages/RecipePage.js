import React, { useContext, useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import { Dash } from "react-bootstrap-icons"
import {CurrentUser} from '../contexts/CurrentUser'

function RecipePage({recipe}){
    const {currentUser} = useContext(CurrentUser)

    recipe = {author: "1"}

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


    function DeleteButton(){
        if(currentUser && currentUser._id === recipe.author){
            return(
                <button id="IconButton">
                    <Dash/>
                </button>
            )
        }
    }
    
    function ListIngredients(ingredients){
        return(
            <div id="List">
                <h3>Ingredients</h3>
                <ul>
                    {ingredients.map((i,index )=> {
                        return (<p key={index}>{i}</p>)
                    })}
                </ul>
            </div>
            
        )
    }
    
    function ListEquipment(equipment){
        return(
            <div id="List">
                <h3>Equipment</h3>
                    {equipment.map((e,index) => {
                        return (<p key={index}>{e}</p>)
                    })}
            </div>
        )
    }
    
    function ListInstructions(instructions){
        let count = 0;
        return(
            <>
                {instructions.map((i, index) => {
                    count++
                    return (
                        <div id="Step" key={index}>
                            <h3>{"Step "+ count}</h3>
                            <p>{i}</p>
                        </div>
                    )
                })}
            </>
        )
    }

    return(
        <>
            <NavBar/>
            <div id="RecipeInfo">
                <h2>{data.title}</h2>
                {DeleteButton(currentUser, recipe)}
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



export default RecipePage