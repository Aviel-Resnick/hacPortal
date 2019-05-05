function addTable() {
  window.alert("I am button");
  var table = document.createElement('table');

  // this will be the number of assignments = number of objects pulled
  var rows = 4

  // creates column heads
  var tr = document.createElement('tr');

  // hardcoded column names
  var th1 = document.createElement("th")
  var th2 = document.createElement("th")
  var th3 = document.createElement("th")
  var th4 = document.createElement("th")

  var col1 = document.createTextNode('Name');
  var col2 = document.createTextNode('Earned Points');
  var col3 = document.createTextNode('Max Points');
  var col4 = document.createTextNode('Percent');

  th1.appendChild(col1)
  th2.appendChild(col2)
  th3.appendChild(col3)
  th4.appendChild(col4)

  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);

  table.appendChild(tr);

  for (var i = 0; i < rows; i++){
    var tr = document.createElement('tr');

    // data section
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');

    var text1 = document.createTextNode('cells test');
    var text2 = document.createTextNode('65');
    var text3 = document.createTextNode('100');
    var text4 = document.createTextNode('65');

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);
  }
  document.getElementById("tableContainer").appendChild(table);
}
