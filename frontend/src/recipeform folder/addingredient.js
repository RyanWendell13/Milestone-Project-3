//Add ingredients and Directions to list
//create two variables (Ingredient list)

const addIng = document.querySelector('#add-info')
const addIBtn = document.querySelector('#addIBtn')
const ingList = document.querySelector('.add-ingredient-list')


//create two variables (Direction list)
const addDir = document.querySelector('.add-input')
const addDBtn = document.querySelector('#addDBtn')
const dirLst = document.querySelector('.add-direction-list')


//create function for adding to Ingredient list
addIBtn.addEventListener('click', (addI)=> {
  if (addIng.value ==='') {
    alert('Enter Ingredient');
} else {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addIng.value;
    ul.appendChild(li);
    const listISpan = document.createElement('span')
    listISpan.innerHTML = 'x';
    li.appendChild(listISpan)
}
})
//create function for adding to Direction list
addDBtn.addEventListener('click', (addD) => {
  if (addDir.value ==='') {
      alert('Enter Cooking Steps');
  } else {
    const ol = document.querySelector('ol');
    const li = document.createElement('li');
    li.innerHTML = addDir.value;
    ol.appendChild(li);
    const listDSpan = document.createElement('span')
    listDSpan.innerHTML = 'x';
    li.appendChild(listDSpan)
}
})



//add direction when enter is pressed

//addDBtn.addEventListener('keyup', (event) => {
//  if(event.which === 13) {
//    add2ListD();
//  }
//});


