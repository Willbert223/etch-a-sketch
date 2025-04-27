// create 16 div elements located inside a container
const container = document.getElementById('divContainer');

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
}



// box the divs with a border in the center of the screen
// make the divs change color when the mouse goes over them and back when out
const divs = document.querySelectorAll('#divContainer div');

divs.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'blue';
    });
    div.addEventListener('mouseout', () => {
        div.style.backgroundColor = 'lightgray';
    });
});


// ask user for number of divs per side
// once input is recived remove current grid and generate new grid