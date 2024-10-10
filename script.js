const canvas = document.querySelector('#drawingCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hand = document.createElement('img');

hand.src = 'assets/hand.png';

let paintbrush = hand;

const context = canvas.getContext('2d');

const handleMouseMove = (event) => {
    const left = event.clientX;
    const top = event.clientY;

    context.drawImage(paintbrush, left, top-100);
}


canvas.addEventListener('mousemove', handleMouseMove);