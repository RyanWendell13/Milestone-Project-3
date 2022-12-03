import React from "react"
import NavBar from "../components/NavBar"
import {useState, useContext, useEffect} from "react"
import ListInput from "../components/ListInput"
import { CurrentUser } from "../contexts/CurrentUser"
import { useParams } from "react-router-dom"

function NewRecipePage(){
    const {category} = useParams()

    const [categories, setCategories] = useState()
    
    useEffect(() => {
        fetch("/api/categories")
        .then(res => res.json())
        .then(c => {
            setCategories(c)
        })
    }, []);


    const [recipe, setRecipe] = useState({
        title: "",
        image: "",
        description: "",
        categories: [],
        ingredients: [],
        equipment: [],
        instructions: []
    })

    useEffect(() => {
        setRecipe({...recipe, categories: [category]})
        
    },[]);

    const {currentUser} = useContext(CurrentUser)
    console.log(currentUser)
    return(
        <>
            <NavBar/>
            <div className="box"> 
                <form className="form-class" onSubmit={HandleSubmit}>
                    <div className="form-column">
                        <div className="input-wrap">
                            <label>Title</label>
                            <input required className="input-field" type="text" name="title" onChange={e => setRecipe({ ...recipe, title: e.target.value})}/>
                        </div>
                         <div className="input-wrap">
                            <label>Author</label>
                            <input className="input-field" type="text" value={!currentUser ? "Loading...": currentUser.username} disabled/>
                        </div>

                        <div className="input-wrap">
                            <label>Image</label>
                            <input required className="input-field" type="text" name="image" onChange={e => setRecipe({...recipe, image: e.target.value})}/>
                        </div>
                        <div className="input-wrap">
                            <label>Description</label>
                            <textarea required className="short-desc" name="description" onChange={e => setRecipe({...recipe, description: e.target.value})}/>
                        </div>
                        {CategoryInput(categories, setRecipe, recipe)}
                    </div>
                    
                    <div className="form-column">
                        <ListInput field ={"ingredients"} data ={recipe} set ={setRecipe} label ={"Ingredients"} formtype ="text"/>
                        <ListInput field ={"equipment"} data ={recipe} set ={setRecipe} label ={"Equipment"} formtype ="text"/>
                        <ListInput field ={"instructions"} data ={recipe} set ={setRecipe} label ={"Instructions"} formtype ="textarea"/>
                        <input className="add-recipe-btn" type="submit"/>
                    </div>
                </form>
            </div>
        </>
    )

    function CategoryInput(categories, setRecipe, recipe){
        return(
            <div className="category-input">
                <label>Categories</label>
                <div className="mult">
                    {!categories ? "Loading..." : categories.map((c, index)=> {
                        let checked = false
                        if(recipe.categories.includes(c.title) == true || (c.title == "Miscellaneous" && recipe.categories.length == 0)){
                            checked = true
                        }
                        return(
                            <div key={index}>
                                <label>{c.title}</label>
                                <input type="checkbox" name={c.title} checked = {checked} value={c.title} onChange={e => {
                                    if(recipe.categories.includes(c.title) == true){
                                        let temp = recipe.categories.filter(j => {return j != c.title})
                                        setRecipe({...recipe, categories: temp})

                                    }
                                    else{
                                        let temp = recipe.categories
                                        temp.push(c.title)
                                        setRecipe({...recipe, categories: temp})
                                    }
                                }}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    function HandleSubmit(e){
        e.preventDefault()
        if(recipe.categories.length == 0){
            setRecipe({...recipe, categories: ["Miscellaneous"]})
        }
        fetch("/api/recipes/new", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        })
    }
}

export default NewRecipePage