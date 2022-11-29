import React from "react"
import NavBar from "../components/NavBar"
import Category from "../components/Category"
import {useEffect, useState, useContext} from "react"
import {CurrentUser} from "../contexts/CurrentUser"


function CategoryPage(){

    let test = [
        {title: "Breakfast", recipes: [{image: "./Bread.jpg",title: "TEST1 TEST2 TEST3 TEST4 TEST5 TEST6 TEST7 TEST8 TEST9 TEST10 TEST11 TEST12 TEST13 TEST14 TEST15"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]}, 
        {title: "Lunch", recipes: [{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]}, 
        {title: "Dinner", recipes: [{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]},
    ]

    const [data, setData] = useState(test)

    useEffect(() => {
        setData(test)
    }, []);

    function CreateCategories(data){
        return(
            <div id= "Categories">
                {
                data.map((c,i) => {
                    return(
                        <Category key ={i} title = {c.title} recipes={c.recipes}/>
                    )
                }
                )}
            </div>
        )
    }

    return(
        <>
            <NavBar/>
            {CreateCategories(data)}
        </>
        
    )


    
}

export default CategoryPage