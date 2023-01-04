body = document.querySelector("body")
container = document.querySelector(".container")
function gridCreation(sideLength=16){
    container.innerHTML=""
    let squareNum = sideLength**2;
    for(let i = 0; i<squareNum;i++){
        newDiv = document.createElement("div");
        divWidth = 100/sideLength;
        newDiv.style.width=`${divWidth}%`;
        newDiv.style.height=`${divWidth}%`;
        container.appendChild(newDiv)
    divs = document.querySelectorAll(".container>div")
    divs.forEach(function(div){
        div.addEventListener("mouseover",function(e){
            div.style.backgroundColor="black";
        })
    })    
}
}

gridCreation()

button = document.querySelector("button");
button.addEventListener("click",function(e){
    let gridSize = parseInt(prompt("Number of Squares per side?"))
    gridCreation(gridSize)
})