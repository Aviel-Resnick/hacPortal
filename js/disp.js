var tableCount = 0;

function addTable() {
  tableCount++;
  var oldInput = document.getElementById("container");
  var newDiv = document.createElement("table");
  newDiv.name = "table";
  // ↓ Not sure what this does
  newDiv.value = "wHaTIsThIs??";
  oldInput.insertBefore(newDiv);
}
