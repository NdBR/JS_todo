console.log("test: script file JS")


const BTNAddToDo = document.querySelector("#BTNAddToDoItem")
const resultToDoList = document.querySelector(".toDoList > ul")

// toevoegen van todo
doWhenClickedOnBtnAdd = () => {
    const todo = getTodoFromTextField()
    const ToDoInObject = putToDoInObject(todo)
    const toDoInHTML = generateToDoHTML(ToDoInObject)
    postRequestNewToDo(ToDoInObject)
    addToResultListDOM(toDoInHTML)
}

// Event toevoegen wanneer er op Add geclickt wordt
BTNAddToDo.addEventListener("click", () => { doWhenClickedOnBtnAdd() })

// get value todo
getTodoFromTextField = () => document.querySelector(".todoInput > input").value

//put it in object
putToDoInObject = (todo) => makeObjectOfTodo = { todo: todo }


// array van todo uit db halen
async function getTodoArrayFromDb() { return (await getRequestToDo()) };

// html li maken
function generateToDoHTML(todo) {
    // li 
    const newLi = document.createElement("li");
    newLi.innerText = todo.todo;
    newLi.id = todo._id
    newLi.classList.add("liStyle")
        // remove btn
    const removeBTN = document.createElement("button")
    removeBTN.innerHTML = "Remove Task";
    removeBTN.addEventListener("click", (e) => RemoveToDo(e))

    newLi.appendChild(removeBTN)
    return newLi;
};

// functie object in dom to voegen
const addToResultListDOM = (li) => resultToDoList.appendChild(li);

// bestaande todo ophalen en in dom zetten
async function GetExistingToDoInDom() {
    const arrayTodo = await getTodoArrayFromDb()
    arrayTodo // deze misschien weg al ik er geen array van wil maekn bij functie getTodoArrayFromDb
        .map(generateToDoHTML)
        .forEach(addToResultListDOM)
}
GetExistingToDoInDom()





// postRequestNewToDo(newToDo) //returnt nu alleen het id
// putRequestToDo(idOfObjectToChange,changeToDo)
// deleteRequestToDo(idOfObjectToDelete)
// getRequestToDo()