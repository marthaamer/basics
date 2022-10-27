const form = document.querySelector('#add-task');

form.addEventListener('submit', addTask)

var totalItems = 2

function addTask(e) {
    let taskInput = document.querySelector('#task');

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = 'collection-item'

    const x = document.createElement('a')
    x.appendChild(document.createTextNode('X'))
    x.setAttribute('href', '#')

    x.setAttribute('id', 'close-button-' + totalItems++)
    x.setAttribute('onclick', 'deleteTask(this.id)')


    x.className = 'secondary-content'

    li.appendChild(x)

    const ul = document.querySelector('ul')
    ul.appendChild(li)

    taskInput.value = ''

    e.preventDefault()
}
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this item?')) {
        document.getElementById(id).parentElement.remove()
    }
}

let taskList = document.querySelector('u')
function deleteTasks () {
   while (taskList.firstChild) {
       taskList.removeChild(taskList.firstChild)
   }
}