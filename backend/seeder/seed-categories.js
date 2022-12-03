const db = require('../models')

db.Category.create([{
    title: "Breakfast"
},{
    title: "Lunch"
},{
    title: "Dinner"
},{
    title: "Dessert"
},{
    title: "Vegan"
},{
    title: "Miscellaneous"
}]).then(()=> {
    console.log('Success')
    process.exit()
}).catch(err => {
    console.log('Failure', err)
    process.exit()
})