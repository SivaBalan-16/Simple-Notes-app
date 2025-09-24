// select popup_box, popup 

let popupBox = document.querySelector("#popup_box")
let popUp = document.querySelector(".popup")
let add_New = document.querySelector("#add_new")
let Cancel = document.querySelector("#cancel_popup")
let addBook = document.querySelector("#popup_add")
let Add = document.querySelector(".book_container")
let Input_box = document.querySelector("#input_text")
let container = document.getElementsByClassName("container")

add_New.addEventListener("click",()=>{
    popupBox.style.display="block"
    popUp.style.display ="block"
})

Cancel.addEventListener("click",()=>{
    popupBox.style.display="none"
    popUp.style.display ="none"
})

addBook.addEventListener("click",()=>{
    let div = document.createElement("div")
    div.setAttribute("class","book_container")
    div.innerHTML=`<p>${Input_box.value}</p><button onclick="deletion(event)">Delete</button>`
    container[0].appendChild(div)
    popupBox.style.display="none"
    popUp.style.display ="none"
    
})

function deletion(event){
    event.target.parentElement.remove();
}

