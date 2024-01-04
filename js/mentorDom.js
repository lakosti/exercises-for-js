//  TASK 1 BASE WORK WITH DOM
const bodyEl = document.body; // лише боді так
// console.log(bodyEl);

const h1EL = document.querySelector('#title');

const dataEls = document.querySelectorAll('[data-topic]');
// console.log(dataEls);

const lastEl = document.querySelector('[data-topic="manipulation"]');
// console.log(lastEl);
// console.log(dataEls[dataEls.length - 1]);

//сусід

const firstSibling = h1EL.nextElementSibling;
// console.log(firstSibling);

const titles = document.querySelectorAll('h3');
titles.forEach(title => console.log(title.textContent));
