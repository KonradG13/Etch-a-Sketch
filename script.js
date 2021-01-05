const container = document.querySelector('.container');
var width = 16;
var length = 16;



var elements = length*width;
for (i = 0; i<elements; i++ ) {
    var gridbox = document.createElement('div');
gridbox.classList.add('box');
container.appendChild(gridbox);
};

var boxes = document.querySelectorAll('.box')

boxes.forEach( item => { item.addEventListener('mouseenter', () => 
{item.setAttribute('style', 'background-color: black;')})
     
 });


 const resetbutton = document.createElement('button')
 resetbutton.innerHTML = "Redraw the grid!";
 resetbutton.setAttribute('style', 'margin-bottom: 25px;')
 resetbutton.setAttribute('id', 'resetbutton');
 document.body.prepend(resetbutton);

var redrawGrid = function () {

    var customWidth = prompt("How many columns?", 16);
    var customLength = prompt("How many rows?", 16);
    var customElements = customLength*customWidth
    
    var oldBoxes = document.querySelector('.container');
    while (oldBoxes.firstChild) {oldBoxes.removeChild(oldBoxes.lastChild)};
    
    var pxWidth = Math.min(window.innerWidth/customWidth*0.99, 20);
    var pxLength = Math.min((window.innerHeight-50)/customLength*0.99, 20);
    var pxSize = Math.min(pxWidth, pxLength);

    var gridStyle = document.querySelector('.container');
    gridStyle.style.setProperty('grid-template-columns', 'repeat(' + customWidth + ', '+ pxSize + 'px');
    gridStyle.style.setProperty('grid-template-rows', 'repeat(' + customLength + ', '+ pxSize + 'px');
    
    
    for (i = 0; i<customElements; i++ ) {
        var gridbox = document.createElement('div');
    gridbox.classList.add('box');
    container.appendChild(gridbox);
    };

    const boxStyle = document.querySelectorAll('.box');
     
    boxStyle.forEach( item => { item.addEventListener('mouseenter', () => 
    {item.setAttribute('style', 'background-color: black;')})
         
     });
}



 const thebutton = document.querySelector('#resetbutton')
 thebutton.addEventListener('click', redrawGrid);
 