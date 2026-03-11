let tasks = []

function addTask(){

let input = document.getElementById("taskInput")

let task = input.value

if(task === "") return

tasks.push(task)

input.value = ""

displayTasks()

saveTasks()

}

function displayTasks(){

let list = document.getElementById("taskList")

list.innerHTML = ""

tasks.forEach((task,index)=>{

let li = document.createElement("li")

li.innerHTML = `
${task}
<button onclick="deleteTask(${index})">Delete</button>
`

list.appendChild(li)

})

}

function deleteTask(index){

tasks.splice(index,1)

displayTasks()

saveTasks()

}

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks))

}

function loadTasks(){

let data = localStorage.getItem("tasks")

if(data){

tasks = JSON.parse(data)

displayTasks()

}

}

loadTasks()