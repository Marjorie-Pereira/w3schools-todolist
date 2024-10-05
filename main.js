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