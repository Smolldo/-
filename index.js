const Btn = document.querySelector('.btn');
const Box = document.querySelector('.cover');

const wh = Box.offsetHeight - Btn.offsetHeight;
const ww = Box.offsetWidth - Btn.offsetWidth;

let result = 0;

Btn.onclick = () => {
    let randomTop = Math.floor(Math.random() * wh);
    let randomLeft = Math.floor(Math.random() * ww);

    // Перевірка, щоб кнопка не виходила за межі блоку
    randomTop = Math.max(randomTop, 0);
    randomLeft = Math.max(randomLeft, 0);

    Btn.style.top = randomTop + "px";
    Btn.style.left = randomLeft + "px";

    result++;
};
Strt.onclick = () =>{
    Start()
}

let count = 20

const Start = () =>{


    if(count >= 0){
        Res.textContent = count
        count--
        console.log(count)

        setTimeout(Start, 1000)

        count == 0 ? alert("TIME") : ""
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var block = document.querySelector('.block');

    document.addEventListener('mousemove', function(e) {
        var mouseX = e.clientX;
        var mouseY = e.clientY;
        block.style.left = mouseX + 'px';
        block.style.top = mouseY + 'px';
    });
});