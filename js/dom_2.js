//=============================EVENTS / ПОДІЇ

// 1. CLICK
const clickBtn = document.querySelector('.main-btn');
const box = document.querySelector('.box-container');

let step = 0;
clickBtn.addEventListener('click', event => {
    // console.log(event);
    // console.log(event.target);
    step += 50;
    box.style.marginTop = `${step}px`;
    box.style.marginLeft = `${step}px`;
});

// 2. WORK WITH INPUT
