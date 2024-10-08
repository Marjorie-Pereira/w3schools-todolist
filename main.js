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
