let list = document.querySelectorAll("li");
list.forEach(element => {
    element.classList.add('item')
    if (element.classList.contains("primary") == false){
                element.classList.add("secondary")
    }
});
console.log(list);











