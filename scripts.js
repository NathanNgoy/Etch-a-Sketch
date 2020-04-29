function drawGrid(size) {
    let gridContainer = document.querySelector('#grid');
    const gridSize = size;
    for(let i = 0; i < gridSize; i++){
        gridContainer.appendChild(createBox());
    }
}

function createBox() {
    const box = document.createElement('div');
    box.className = 'box';
    box.addEventListener('mouseover', function(){
        box.style.backgroundColor = 'black';
    })
    return box;
}

function reset() {
    let allBox = document.querySelectorAll(".box");
    allBox.forEach(box => {
        box.style.backgroundColor = 'white';
    })
    console.log("reset")
}

function newgrid() {
    let size = Number(window.prompt("What size of grid do you want?", "30"))
    let gridContainer = document.querySelector("#grid");
    while(gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.firstChild)
    }
    drawGrid(size**2);
}

drawGrid(30**2);
console.log("running script");