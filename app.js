var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var to_dos = [
    'Begin a new project',
    'Make coffee',
    'Buy Bitcoins'
];

function renderToDos(){

    listElement.innerHTML = '';

    for(to_do of to_dos){

        var todoElement = document.createElement('li');
        var textElement = document.createTextNode(to_do);
        var linkElement = document.createElement('a');
        var textLink = document.createTextNode('Excluir');

        linkElement.setAttribute('href', '#');

        todoElement.appendChild(textElement);
        linkElement.appendChild(textLink);
        listElement.appendChild(todoElement);
        todoElement.appendChild(linkElement);
        
    }
}

function addToDo(){

    var to_do_text = inputElement.value;

    inputElement.value = '';

    to_dos.push(to_do_text);

    renderToDos();
}

function deleteToDo(pos){
    to_dos.splice(pos, 1);
    renderToDos();
}

renderToDos();

buttonElement.onclick = addToDo;