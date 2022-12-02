const db = require('../models')

db.Category.create([{
    title: "Breakfast",
    recipes: []
},{
    title: "Lunch",
    recipes: []
},{
    title: "Dinner",
    recipes: []
},{
    title: "Dessert",
    recipes: []
},{
    title: "Vegan",
    recipes: []
},{
    title: "Miscellaneous",
    recipes: []
}]).then(()=> {
    console.log('Success')
    process.exit()
}).catch(err => {
    console.log('Failure', err)
    process.exit()
})