const container = document.getElementById("container");
container.style.display = 'flex';
container.style.flexWrap = 'wrap'
container.style.boxSizing = 'border-box';

const hover = document.querySelector('.hover');

hover.addEventListener('hover', (color) => {
    onmouseover = fnPickColor(newDiv);
})

for(let i = 0; i < 256; i++){
    const newDiv = document.createElement('div');
    newDiv.textContent = `Div ${i + 1}`;
    newDiv.style.width = '100px';
    newDiv.style.height = '100px';
    newDiv.style.border = '1px solid black';
    newDiv.style.aspectRatio = '1 / 1';
    newDiv.style.background = <COLOR RANDOM GENERATED COLOR>
    container.appendChild(newDiv);


}