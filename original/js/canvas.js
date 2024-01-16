/* ---------------------*/
// script.js
let colorOptions = ['#FF5733', '#33FF57', '#5733FF', '#FF33E9', '#33FFFF'];

const addColor = document.querySelector('#addColor');
const colorOptionsContainer = document.querySelector('.color-options');
const selectedColorElement = document.querySelector('#selectedColorElement');
let selectedColor = colorOptions[0];
selectedColorElement.style.backgroundColor = selectedColor;

addColor.addEventListener("change", (event) => {
  const selectedColor = event.target.value;
  colorOptions.push(selectedColor);
  updateColors();
});

function generateColourElement(color) {
  const c = color.substring(1);
  const cID = "color-" + c;

  const colorWrap = document.createElement('div');
  colorWrap.classList.add('color-wrap');

  const colorOption = document.createElement('div');
  colorOption.classList.add('color-option');
  colorOption.style.backgroundColor = color;
  colorOption.id = cID;

  colorOption.addEventListener('click', event => {
    selectedColorElement.style.backgroundColor = color;
    selectedColor = color;
  });

  const removeButton = document.createElement("button");
  removeButton.id = cID;
  removeButton.className = "shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded";
  removeButton.addEventListener("click", event => {
    colorOptions = colorOptions.filter(cl => cl !== color);
    updateColors();
  });

  removeButton.innerText = "Remove";

  colorWrap.appendChild(colorOption);
  colorWrap.appendChild(removeButton);

  colorOptionsContainer.appendChild(colorWrap);
}

function updateColors() {
  colorOptionsContainer.innerHTML = "";
// Create color option elements
  colorOptions.forEach(color => {
    generateColourElement(color);
  });
}

updateColors();



const rowsInput = document.getElementById('rows');
const colsInput = document.getElementById('cols');
const gridCanvas = document.getElementById('gridCanvas');
const counter = document.getElementById('counter');
const context = gridCanvas.getContext('2d');
let colorGrid = [];

function createGrid(rows, cols) {
  gridCanvas.width = cols * 30;
  gridCanvas.height = rows * 30;
  colorGrid = [];

  context.clearRect(0, 0, gridCanvas.width, gridCanvas.height);
  context.strokeStyle = '#000';

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      context.fillStyle = '#FFFFFF';
      context.fillRect(j * 30, i * 30, 30, 30);
      context.strokeRect(j * 30, i * 30, 30, 30); // Draw grid lines
      row.push('#FFFFFF');
    }
    colorGrid.push(row);
  }
}

function countColors() {
  const colors = {};
  colorGrid.forEach(row => {
    row.forEach(color => {
      colors[color] = (colors[color] || 0) + 1;
    });
  });

  counter.innerHTML = '';
  for (const color in colors) {
    const colorCount = document.createElement('div');
    colorCount.className = 'color-count';
    colorCount.style.backgroundColor = color;
    colorCount.textContent = colors[color];
    counter.appendChild(colorCount);
  }
}

rowsInput.addEventListener('input', () => {
  const rows = parseInt(rowsInput.value);
  const cols = parseInt(colsInput.value);
  createGrid(rows, cols);
  countColors();
});

colsInput.addEventListener('input', () => {
  const rows = parseInt(rowsInput.value);
  const cols = parseInt(colsInput.value);
  createGrid(rows, cols);
  countColors();
});

createGrid(parseInt(rowsInput.value), parseInt(colsInput.value));
countColors();

gridCanvas.addEventListener('click', (e) => {
  const rect = gridCanvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / 30);
  const y = Math.floor((e.clientY - rect.top) / 30);
  colorGrid[y][x] = selectedColor;
  context.fillStyle = selectedColor;
  context.fillRect(x * 30, y * 30, 30, 30);
  countColors();
});
