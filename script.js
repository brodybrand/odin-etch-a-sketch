const standardGridWidth = 16;
const standardGridHeight = 16;
let gridSize = (standardGridWidth, standardGridHeight);

const container = document.querySelector(".container");
function createGrid(width=standardGridWidth, height=standardGridHeight) {
    for (i = 1; i < width + 1; i++) {
        const col = document.createElement('div')
        col.setAttribute('class', 'col');
        container.appendChild(col);
        for (j = 1; j < height + 1; j++) {
            const cell = document.createElement("div");
            cell.setAttribute('class', 'cell');
            cell.setAttribute("id", "x"+ i + 'y' + j);
            col.appendChild(cell);
        }
    }
    let cells = document.querySelectorAll(".cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseenter", () => {
            paintCell(cells[i], "yellow");
    });
    }
}

function clearGrid() {
    let cells = document.querySelectorAll(".cell");
    for (i = 0; i < cells.length; i++) {
        cells[i].parentNode.removeChild(cells[i]);
    }
    let cols = document.querySelectorAll(".col")
    for (i = 0; i < cols.length; i++) {
        cols[i].parentNode.removeChild(cols[i]);
    }
}

function paintCell(cell, color) {
    cell.style.backgroundColor = color;
}

const resizeButton = document.querySelector("#resize");
resizeButton.addEventListener("click", () => {
    let newSize = +prompt("Gid Size (up to 100)");
    if (newSize >= 100) {
        alert("Grid size too large, select a size under 100.");
        clearGrid();
        createGrid(gridSize, gridSize);
    } else {
        gridSize = (newSize, newSize);
        clearGrid();
        createGrid(newSize, newSize);
    }
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    clearGrid();
    createGrid(gridSize, gridSize);
})

createGrid();
