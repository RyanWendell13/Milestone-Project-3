const addidContainer = document.querySelector('[data-idLists]')
const newInfoForm= document.querySelector('[data-new-info-form]')
const newInput= document.querySelector('[data-new-input]')

const Local_Storage = 'id.lists'

let lists = JSON.parse(localStorage.getItem(Local_Storage)) || []  

newInfoForm.addEventListener('submit', e => {
    e.preventDefault()
    const listName = newInput.value
    if (listName == null || listName === '')return
    const list = createList(listName)
    newInput.value = null
    lists.push(list)
    saveNRender()
})

function createList(name) {
   return {id: Date.now().toString(), name: name, tasks:[] }
}

function saveNRender() {
    saveLists()
    render ()
}


function saveLists(){
    localStorage.setItem(Local_Storage,JSON.stringify(lists))
}

function render() {
    clearElement(addidContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("list-name")
        listElement.innerText = list.name
        addidContainer.appendChild(listElement)
    })
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()