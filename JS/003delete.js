const RemoveToDo = (e) => {
    let i = getIndexOfRemoveBTN(e)
    console.log(i)
    removeToDoInDB(i)
    removeToDoInDom(i)
}

const getIndexOfRemoveBTN = (e) => {
    var targetButtons = document.getElementById("ul_todo").getElementsByTagName("button")
    var nodes = Array.from(targetButtons);
    selected = nodes.indexOf(e.target);
    return selected
}
const removeToDoInDom = (i) => {
    let listul = document.getElementById("ul_todo")
    listul.removeChild(listul.childNodes[i + 1])

}
const removeToDoInDB = (i) => {
    let listul = document.getElementById("ul_todo")
    let liId = listul.childNodes[i + 1].id
    console.log(liId)
    deleteRequestToDo(liId)
}