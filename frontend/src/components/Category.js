import React from "react"
import {Plus} from "react-bootstrap-icons"
function Category(props){
    return(
        <div id="Category">
            <h1>{props.title}</h1>
            <a id="Icon">
                <Plus/>
            </a>
            
            {ListRecipes(props)}
        </div>
    )
}

function ListRecipes(props){
    return(
        <div id="RecipeList">
            {props.recipes.map(r => {
                return(
                    <div id="Recipe">
                        <img src={r.image}/>
                        <a>{r.title}</a>
                    </div>
                )
            })}
        </div>
    )
}



export default Category