const container = document.getElementById("container");
container.style.display = 'flex';
container.style.flexWrap = 'wrap'


for(let i = 0; i < 256; i++){
    const newDiv = document.createElement('div');
    newDiv.textContent = `Div ${i + 1}`;
    newDiv.style.width = '100px';
    newDiv.style.height = '100px';
    newDiv.style.border = '1px solid black';
    newDiv.style.aspectRatio = '1 / 1';
    changeBackgroundColorOnHover(newDiv);
    container.appendChild(newDiv);
    
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    
      function changeBackgroundColorOnHover(newDiv) {
        const originalBackgroundColor = newDiv.style.backgroundColor;
      
        newDiv.addEventListener('mouseover', function() {
          newDiv.style.backgroundColor = getRandomColor();
        });
      
        newDiv.addEventListener('mouseout', function() {
          newDiv.style.backgroundColor = originalBackgroundColor || 'hsl(0, 0%, 70%)';
        });
      }
      

}
