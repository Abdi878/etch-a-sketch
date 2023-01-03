body = document.querySelector("body")
container = document.querySelector(".container")
for(let i = 0; i<256;i++){
    container.appendChild(document.createElement("div"))
}

divs = document.querySelectorAll(".container>div")

divs.forEach(function(div){
    div.addEventListener("mouseover",function(e){
        div.style.backgroundColor="black";
    })
})