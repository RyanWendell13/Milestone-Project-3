//Add ingredients and Directions to list
//create two variables (Ingredient list)

const addIng = document.querySelector('#add-info')
const addIBtn = document.querySelector('#addIBtn')

//create two variables (Direction list)
const addDir = document.querySelector('.add-input')
const addDBtn = document.querySelector('#addDBtn')

//create function for adding to Ingredient list
function add2ListI() {
    if (addIng.value ==='') {
        alert('Enter Ingredient');
    } else {
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.innerHTML = addIng.value;
        addIng.value = '';
        ul.appendChild(li);
        createBtn(li);
  }
}

//create function for adding to Direction list
function add2ListD() {
  if (addDir.value ==='') {
      alert('Enter Cooking Steps');
  } else {
      const ul = document.querySelector('ol');
      const li = document.createElement('li');
      li.innerHTML = addDir.value;
      addDir.value = '';
      ul.appendChild(li);
      createBtn(li);
}
}

// add ingredient to list when button is clicked
addIBtn.addEventListener('click', () => {
    add2ListI();
});

// add direction to list when button is clicked
addDBtn.addEventListener('click', () => {
  add2ListD();
});

//add ingredient when enter is pressed
//13 == enter button
addIng.addEventListener('keyup', (event) => {
    if(event.which === 13) {
      add2ListI();
    }
  });

//add direction when enter is pressed

addDir.addEventListener('keyup', (event) => {
  if(event.which === 13) {
    add2ListD();
  }
});
