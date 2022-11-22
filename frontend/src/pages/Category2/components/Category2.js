import React from "react"
import {Plus, Search} from "react-bootstrap-icons"
function Category2(props){
    return(
        <div id="Category2">
            <h1>{props.title}</h1>
            <a id="Icon">
                <Plus/>
            </a>
            
            {ListRecipes(props)}
            <a id="Search">
                <Search/>
            </a>
        </div>
    )
}

function ListRecipes(props){
    return(
        <div id="RecipeList2">
            {props.recipes.map(r => {
                return(
                    <div id="Recipe2">
                        <img src={r.image}/>
                        <a>{r.title}</a>
                    </div>
                )
            })}
        </div>
    )
}



export default Category2