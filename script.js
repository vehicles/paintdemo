
const canvas = document.querySelector('#draw');  
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';

function draw(x, y) {
    const circle = new Path2D();
    circle.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fill(circle);
}

let isMouseDown = false;

canvas.addEventListener('mousedown', (e) => {
isMouseDown = true;
})

canvas.addEventListener('mouseup', (e) => {
isMouseDown = false;
})

canvas.addEventListener('mousemove', (e) => {
    if (!isMouseDown) {
        return
    }

    const{
        clientX, 
        clientY
    } = e

    const react = canvas.getBoundingClientRect();
    draw(clientX - react.left, clientY - react.top);
})

const colorPickers = [... document.querySelectorAll('.color-picker')]
colorPickers.forEach(colorPicker => {
    colorPicker.addEventListener('click', (e) => {
        console.log(e.target.style)
        
        ctx.fillStyle = e.target.style.backgroundColor;  
        console.log(ctx);
    })
})

document.querySelector('#btn_clear').addEventListener('click', (e) => {
    ctx.clearRect(0,0, 600, 600);
})

