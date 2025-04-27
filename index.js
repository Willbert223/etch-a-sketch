// create 16 div elements located inside a container
const container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
}

// make the divs appear using flexbox aligned in grid format
// box the divs with a border in the center of the screen
// make the divs change color when the mouse goes over them and back when out

// ask user for number of divs per side
// once input is recived remove current grid and generate new grid