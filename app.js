// Task 1
let elementH1 = document.querySelector("h1")
elementH1.remove();

let body = document.querySelector("body")
let script = document.querySelector("script")

let ListText = document.querySelector("li")
ListText.textContent = "RTX3000";
body.insertBefore(ListText, script)
console.log(ListText);













