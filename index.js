// create 16 div elements located inside a container
const container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
  const div = document.createElement('div');
  container.appendChild(div);
}





// make the divs change color when the mouse goes over them and back when out
const divs = document.querySelectorAll('#container div');

divs.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = getRandomColor();
    });
   
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // add button on top of screen in center
  const button = document.createElement('button');
  button.textContent = 'Click Me';
  button.style.position = 'absolute';
  button.style.top = '20px';
  button.style.left = '50%';
  button.style.transform = 'translateX(-50%)';



  // when user presses button prompt them for a number (max of 100)
  button.addEventListener('click', () => {
    let input;
    do {
      input = prompt('Enter a number (max 100):');
    } while (input !== null && (isNaN(input) || input < 1 || input > 100));
  
    if (input !== null) {
        // remove current grid divs keeping the container as is
        while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
    }
      // generate new grid in the container
  // After clearing the container:
  const count = parseInt(input);
  const total = count * count;
  const containerSize = 320;
  const boxSize = containerSize / count;

  for (let i = 0; i < total; i++) {
    const div = document.createElement('div');
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
  

  // Hover color behavior
  const color = getRandomColor();
  div.addEventListener('mouseover', () => {
    div.style.backgroundColor = color;
  });
  
  container.appendChild(div);
}

  });

  document.body.appendChild(button);
  
 
