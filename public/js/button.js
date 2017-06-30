// get the showTable and hideTable buttons
var showTable = document.getElementById("showTable");
var hideTable = document.getElementById("hideTable");

// get the id of the Table
var mainTable = document.getElementById("fellowsTable");

// attach onclick funtion to showTable
showTable.onclick = function() {
    mainTable.style.display = "block";
}

// attach onclick function to hideTable
hideTable.onclick = function() {
    mainTable.style.display = "none";
}
