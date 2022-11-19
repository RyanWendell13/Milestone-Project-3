import React from "react"
function Category(props){
    return(
        <div id="Category">
            <h1>{props.title}</h1>
            {ListRecipes(props)}
        </div>
    )
}

function ListRecipes(props){
    return(
        <div id="Recipes">
            {props.recipes.map(r => {
                return(
                    <h3>{r.title}</h3>
                )
            })}
        </div>
    )
}



export default Category