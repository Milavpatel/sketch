const button = document.querySelector(".grid");
const container = document.querySelector("#container");
const reset = document.querySelector(".reset");
const era = document.querySelector(".erase");
let isErase = false;
function createGrid(grid) {
    container.innerHTML = '';
    const containerSize = 500;
    const squareSize = containerSize / grid;

    for (let i = 0; i < grid*grid; i++) {
        const sqr = document.createElement("div");
        sqr.style.width = `${squareSize}px`;
        sqr.style.height = `${squareSize}px`;
        sqr.addEventListener("mouseover", () => {
            sqr.style.backgroundColor = isErase ? 'white' : `rgb(${rand()}, ${rand()}, ${rand()})`;
        });
        container.appendChild(sqr);
    }
}


function reSet() {
    const squars = document.querySelectorAll("#container div");
    squars.forEach(sqr => sqr.style.backgroundColor = 'white');    
}


function rand() {
  return Math.floor(Math.random() * 256);
}


era.addEventListener("click", ()=>{
    if(era.innerText === "Erase"){
        era.innerText = "Pen";
        isErase = true;
    }
    else{
        era.textContent = "Erase";
        isErase = false;
    }
})


button.addEventListener("click",() =>{
    reSet();
    grid = parseInt(prompt("Enter grid size"));

    if(!Number.isInteger(grid) || grid <= 0){
        alert("Please enter valid value");
        grid = 16;
    }
    createGrid(grid);
})


reset.addEventListener("click", () =>{
    reSet();
})

createGrid(16);