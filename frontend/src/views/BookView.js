import React from "react"
import NavBar from "../components/NavBar"
import Category from "../components/Category"

function BookView(){

    let props = [
        {title: "Breakfast", recipes: [{title: "test"},{title: "test"},{title: "test"},{title: "test"},{title: "test"},{title: "test"},{title: "test"},{title: "test"},{title: "test"},{title: "test"}]}, 
        {title: "Lunch", recipes: [{title: "test"},{title: "test"},{title: "test"},{title: "test"},{title: "test"},{title: "test"},{title: "test"},{title: "test"},{title: "test"},{title: "test"}]}, 
        {title: "Dinner", recipes: [{title: "test"},
        {title: "test"},
        {title: "test"},
        {title: "test"},
        {title: "test"},
        {title: "test"},
        {title: "test"},
        {title: "test"},
        {title: "test"},
        {title: "test"}]}
    ]


    function CreateCategories(props){
        return(
            <div id= "Categories">
                {props.map((c) => {
                    return(
                        <Category title = {c.title} recipes={c.recipes}/>
                    )
                }
                )}
            </div>
        )
    }

    return(
        <>
            <NavBar/>
            {CreateCategories(props)}
        </>
        
    )
}

export default BookView