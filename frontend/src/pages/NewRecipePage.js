import React from "react"
import NavBar from "../components/NavBar"
import {useState, useContext, useEffect} from "react"
import ListInput from "../components/ListInput"
import {CurrentUser} from "../contexts/CurrentUser"
import { useParams } from "react-router-dom"

function NewRecipePage(){

    const {currentUser} = useContext(CurrentUser)
    const {category} = useParams()

    let test = [
        {title: "Breakfast", recipes: [{image: "./Bread.jpg",title: "TEST1 TEST2 TEST3 TEST4 TEST5 TEST6 TEST7 TEST8 TEST9 TEST10 TEST11 TEST12 TEST13 TEST14 TEST15"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]}, 
        {title: "Lunch", recipes: [{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]}, 
        {title: "Dinner", recipes: [{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]},
        {title: "Breakfast2", recipes: [{image: "./Bread.jpg",title: "TEST1 TEST2 TEST3 TEST4 TEST5 TEST6 TEST7 TEST8 TEST9 TEST10 TEST11 TEST12 TEST13 TEST14 TEST15"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]}, 
        {title: "Lunch2", recipes: [{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]}, 
        {title: "Dinner2", recipes: [{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},{image: "./Bread.jpg",title: "test"},]}
        
    ]


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

    console.log(recipe)
    return(
        <>
            <NavBar/>
            <div className="box"> 
                <form className="form-class">
                    <div className="form-column">
                        <div className="input-wrap">
                            <label>Title</label>
                            <input required className="input-field" type="text" name="title" onChange={e => setRecipe({ ...recipe, title: e.target.value})}/>
                        </div>
                        
                        {/* value={currentUser.username} */}
                         <div className="input-wrap">
                            <label>Author</label>
                            <input className="input-field" type="text" value={currentUser.username} disabled/>
                        </div>

                        <div className="input-wrap">
                            <label>Image</label>
                            <input required className="input-field" type="text" name="image" onChange={e => setRecipe({...recipe, image: e.target.value})}/>
                        </div>
                        <div className="input-wrap">
                            <label>Description</label>
                            <textarea required className="short-desc" name="description" onChange={e => setRecipe({...recipe, description: e.target.value})}/>
                        </div>
                        {CategoryInput(test, setRecipe, recipe)}
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
                    {categories.map((c, index)=> {
                        let checked = false
                        if(recipe.categories.includes(c.title) == true){
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
}

export default NewRecipePage

// <main>
//     <div class="box">
//         <div class="inner-box">
//             <div class="forms-wrap">
//                 <form action="index.html" autocomplete= "off">
//                     <div class="logo">
//                         <img src="./img/logo.png" alt="TheWorkoutApp" />
//                         <h4>The Recipe</h4>
//                     </div>

//                     <div class="heading">
//                         <h2>Add Recipes</h2>
//                         <h6> Not ready to add a recipe?</h6>
//                         <a href="#" class="toggle">Take Me Back!</a>
//                      </div>

//                     <!--Actual Recipe Form --->
//                     <div class="add-recipe-form">
//                         <div class="row">
//                             <div class = "form-column">
//                                 <div class="input-wrap">
//                                 <label> Recipe Name</label>
//                                 <input
//                                     type="textarea" 
//                                     class="input-field" 
//                                     placeholder="Enter Recipe Name"
//                                     maxlength="200"
//                                     required
//                                 />
//                     </div>

//                     <div class="input-wrap">
//                         <label> Short Description </label>
//                         <textarea
//                           class="short-desc" 
//                           cols="30" 
//                           rows="5"
//                           placeholder="Enter Description"
//                           required
//                         ></textarea>
//                     </div>

//                     <div class="input-wrap">
//                         <label> Ingredients </label>
//                         <div class="addform">
//                         <ul class="add-ingredient-list"
//                             style="list-style-type:circle"  data-idLists>
//                             <i class="fa-solid fa-trash-can"></i>
//                         </ul>
                   
//                         <form class="add-ing" action="" data-new-info-form>
//                             <input 
//                                 type="text"
//                                 class="add-input"
//                                 data-new-input
//                                 placeholder="enter ingredients"
//                                 aria-label="new ingredient entered here"
//                             />
//                             <button class="add-ingredient-submit-btn"
//                                 aria-label="add new ingredient"> Add
//                             </button>
//                         </form>
//                     </div >
//                     </div>
                  
//                   <div class="input-wrap">
//                     <label class="custom_select">Select Dietary Restrictions</label> 
//                      <h6> Hold down Ctrl(pc) or Cmd(mac) to select 2 or more</h6>
//                          <select multiple class="mult">
//                              <option value= "Gluten Free">Gluten Free</option>
//                              <option value="Vegan">Vegan</option>
//                              <option value="Vegetarian">Vegetarian</option>
//                              <option value="Pescatarian">Pescatarian</option>
//                              <option value="Nut Allergy">Nut Allergy Friendly</option>
//                              <option value="Lactose Free">Lactose Free</option>
//                          </select multiple>
//                        </div> 
//                     </div>
//               </div>  

//               <div class="form-column">
                
//                 <div class="input-wrap">
//                   <label> Difficulty</label>
//                   <select class="diff">
//                     <option value= "Easy">Easy</option>
//                     <option value="Moderate">Moderate</option>
//                     <option value="Hard">Hard</option>
//                   </select>
//                 </div>

//               <div class="row">
//                 <div class="input-wrap">
//                 <label> Prep Time</label>
//                   <input
//                         type="text" 
//                         class="input-field" 
//                         placeholder="Prep Time"
//                         required
//                   />
//                 </div>

//                 <div class="input-wrap">
//                 <label> Cook Time</label>
//                   <input
//                         type="text" 
//                         class="input-field" 
//                         placeholder="Cook Time"
//                         required
//                    />
//                 </div>
//               </div>
//                 <div class="row">
//                   <div class="input-wrap">
//                     <label> Total Time</label>
//                       <input
//                             type="text" 
//                             class="input-field" 
//                             placeholder="Total Time"
//                             required
//                        />
//                     </div>
//                 <div class="input-wrap">
//                 <label> Servings </label>
//                   <input
//                         type="number" 
//                         class="input-field" 
//                         placeholder="# of Servings"
//                         required
//                   />
//                 </div>
//                 </div>
  
//                 <div class="input-wrap">
//                 <label> Directions</label>
//                 <div class="addform">
//                 <ol class="add-direction-list" data-idLists>
//                     <!--<li class="active directions">Pre-heat to 350 Degrees</li>
//                     <li>Mix in batter</li>
//                     <li>Add Sugar, Cream and Eggs</li> -->
//                     <i class="fa-solid fa-trash-can"></i> 
//                 </ol>
             
//                     <form class="add-dir" action="" data-new-info-form>
//                         <input 
//                             type="text"
//                             class="add-input"
//                             data-new-input
//                             placeholder="enter cooking steps"
//                             aria-label="new direction  here"
//                         />
//                         <button class="add-direction-submit-btn"
//                                 aria-label="add new direction"> Add
//                         </button>
//                      </form>
//                 </div   >
//                 </div>

//                 <div class="input-wrap">
//                 <label> Recipe Tips </label>
//                     <textarea
//                           class="tips" 
//                           rows="5"
//                           placeholder="Enter Tips"
//                     ></textarea>
//                 </div>

//                 <input type="submit" value="Add Recipe" class="add-recipe-btn" />
//               </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>  
// </main>