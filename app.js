

const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoFilter = document.getElementById("todo-filter");


const getTodosFromStorage = () => {
    const storage = JSON.parse(localStorage.getItem("todos"));
    return (storage) ? storage : [];
    
}
const todos = getTodosFromStorage()
// const todos = ["evi topla", "isi tamamla"];

const getTodosToPage = () => {
    todos.map((todo) => {
        createTodoItem(todo)
    })
}
const saveTodosToStorage = (todo) => {
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    createTodoItem(todo)
}

todoButton.addEventListener("click", () => {
    const input = todoInput.value;
    if(input) saveTodosToStorage(input);
        todoInput.value = "";

    
})

//sayfa yenilendiği zaman yapılacak olan işler silinmeyecek.
window.addEventListener("load",()=>{
    getTodosToPage()
})
//1
const createTodoItem = (text) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item", "todo");
    const todoItemLi = document.createElement("li");
    todoItemLi.innerHTML = text
    const todoItemCheck = document.createElement("i");
    todoItemCheck.classList.add("fas", "fa-square");
    todoItemCheck.setAttribute("onclick", "checkTodo(this)");
    const todoItemRemove = document.createElement("i");
    todoItemRemove.classList.add("fas", "fa-trash-alt");
    todoItemRemove.setAttribute("onclick", "removeTodo(this)");
    todoItem.appendChild(todoItemLi)
    todoItem.appendChild(todoItemCheck)
    todoItem.appendChild(todoItemRemove)
    todoList.appendChild(todoItem)


}
