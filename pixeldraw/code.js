var rows = 24;
var cols = 24;
var storedColor = getPixelColor();


// initialize
function initialize() {
    createTable();
}

// lay out the board
function createTable() {
    var gridContainer = document.getElementById("gridContainer");
    if (!gridContainer) {
        // throw error
        console.error("Problem: no div for the grid table!");
    }
    var table = document.createElement("table");
    table.setAttribute("id", "canvas")

    for (var i = 0; i < rows; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < cols; j++) {
            var cell = document.createElement("td");
            cell.setAttribute("id", i + "_" + j);
            cell.setAttribute("class", "off");
            cell.setAttribute("class", "cell");
            cell.onclick = cellClickHandler;
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridContainer.appendChild(table);
}

function cellClickHandler() {
    var classes = this.getAttribute("class");
    if (classes.indexOf("on") > -1) {
        this.setAttribute("class", "off");
    } else {
        this.setAttribute("class", "on");
        var storedColor = getPixelColor();
        this.style.backgroundColor = storedColor;


    }
}

function clearButtonHandler() {
    var cellsList = document.getElementsByClassName("off");
    var cells = [];
    for (var i = 0; i < cellsList.length; i++) {
        cells.push(cellsList[i]);
    }
    for (var i = 0; i < cells.length; i++) {
        cells[i].setAttribute("class", "on");
    }
}

function changeCanvas() {
    var x = document.getElementById("input_canvasColor").value;
    document.getElementById("canvas").style.backgroundColor = x;
}

function getPixelColor() {
    var storedColor = document.getElementById("input_pixelColor").value;
}


// start everything

window.onload = initialize;
