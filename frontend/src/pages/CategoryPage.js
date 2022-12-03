import React from "react"
import NavBar from "../components/NavBar"
import Category from "../components/Category"
import {useEffect, useState, useContext} from "react"
import {CurrentUser} from "../contexts/CurrentUser"


function CategoryPage(){

    const [data, setData] = useState()

    useEffect(() => {
        fetch("/api/categories")
        .then(res => res.json())
        .then(c => {
            console.log(c)
            setData(c)
        })
    }, []);

    function CreateCategories(data){
        if(data){
        
            console.log(data)
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
    }

    return(
        <>
            <NavBar/>
            {CreateCategories(data)}
        </>
        
    )


    
}

export default CategoryPage