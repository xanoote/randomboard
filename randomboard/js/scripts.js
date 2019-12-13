let board = document.getElementById("board");
let colorArray = ['red', 'blue', 'green', 'yellow', 'purple'];
let colorArrayCounter = [0, 0, 0, 0, 0];
let row = null;
let box = null;
let randomNumber = 0;

for ($x = 0; $x < 5; $x++) {
  row = document.createElement('div');
  row.className = 'row';
  for ($y = 0; $y < 7; $y++) {
    randomNumber = Math.floor(Math.random() * colorArray.length);
    colorArrayCounter[randomNumber]++;
    box = document.createElement('div');
    box.className = 'box ' + colorArray[randomNumber];
    row.appendChild(box);
  }
  board.appendChild(row);
}
for ($z = 0; $z < 5; $z++) {
  row = document.createElement('div');
  row.className = 'row';
  row.innerHTML = colorArray[$z] + ': ' + colorArrayCounter[$z];
  board.appendChild(row);
}
