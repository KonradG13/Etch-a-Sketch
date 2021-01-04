const container = document.querySelector('.container');
const width = 16;
const length = 16;
const elements = length*width;

for (i = 0; i<elements; i++ ){
    const gridbox = document.createElement('div');
gridbox.classList.add('box');
container.appendChild(gridbox);
}
