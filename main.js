// close button
var toDoList = document.getElementsByTagName('li');
var i;
for(i = 0; i < toDoList.length; i++) {
    var span = document.createElement("span");
    // sinal de multiplicação
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    toDoList[i].appendChild(span);
}

// hiding current list item when clicking close button
var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// checking finished tasks
var list = document.querySelector('ul');
list.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);

// create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("taskTitle").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("taskTitle").value = "";

    // close button
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}