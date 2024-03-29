var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

button.addEventListener("click", function() {
    if (inputLength() > 0) {
        createListElement();
    }
})

input.addEventListener("keydown", function (event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement();
    }
})