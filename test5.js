let addToDoButton = document.getElementById('clicktoadd');
let toDoContainer = document.getElementById('toDothis');
let inputField = document.getElementById('text');

addToDoButton.addEventListener('click', add);
function add(){
    var items = document.createElement('p');
    items.classList.add('itemss');
    items.innerText = text.value;
    toDoContainer.appendChild(items);
    text.value = "";



    items.addEventListener('click', done);
    
     function done(){
        items.style.color = "#ff0000";
     }



     items.addEventListener('dblclick', m);
    
function m(){
    toDoContainer.removeChild(items);
}

}

// items.addEventListener('dblclick', m);
    
// function m(){
//    items.style.color = "#ff0000";
// }
