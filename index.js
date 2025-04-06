const container = document.getElementById("container");
container.style.display = 'flex';
container.style.flexWrap = 'wrap'

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


let currentColor = getRandomColor();

function changeBackgroundColorOnHover(newDiv) {
  
  newDiv.style.backgroundColor = 'hsl(0, 0%, 70%)';; 

  newDiv.addEventListener('mouseover', function() {
    newDiv.style.backgroundColor = currentColor;
  });

  
}


/*for(let i = 0; i < 256; i++){
    const newDiv = document.createElement('div');
    newDiv.textContent = `Div ${i + 1}`;
    newDiv.style.width = '100px';
    newDiv.style.height = '100px';
    newDiv.style.border = '1px solid black';
    newDiv.style.aspectRatio = '1 / 1';
    changeBackgroundColorOnHover(newDiv);
    container.appendChild(newDiv);
    
    
  
};*/


    const newGridButton = document.getElementById('myButton');
    const gridContainer = document.getElementById('container');
    const initialGridSize = 64; // Default grid size
    let currentGridSize = initialGridSize;

    newGridButton.addEventListener('click', function() {
      newGridButton.style.Color = getRandomColor();
    });
    

    function createGrid(size) {

      currentColor = getRandomColor();

      gridContainer.innerHTML = ''; // Clear existing grid

      const containerSize = gridContainer.clientWidth;
      const squareSize = containerSize / size; // Calculate square size to maintain space
      
      for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('gridSquare');
        square.textContent = `Div ${i + 1}`;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        gridContainer.appendChild(square);
        changeBackgroundColorOnHover(square);

      }
    }

    newGridButton.addEventListener('click', () => {
      let newSize = prompt("Enter the number of squares per side (max 100):", currentGridSize);

      if (newSize !== null && newSize !== "") {
        newSize = parseInt(newSize);

        if (newSize > 0 && newSize <= 100 && !isNaN(newSize)) {
          currentGridSize = newSize;
          createGrid(currentGridSize);
        } else {
          alert("Please enter a valid number between 1 and 100.");
        }
      }
    });

    // Initial grid creation
    createGrid(initialGridSize);