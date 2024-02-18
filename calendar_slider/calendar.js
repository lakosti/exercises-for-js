import refs from './refs.js';
const { monthEl, dayEl, dayNumberEl, yearsEl } = refs;

// const data = Date.now(); // використовуємо при роботі з таймером / годдинником - не така затратна як ств нового екземпляру класу
const data = new Date(); // для календарів
// console.log(data.toLocaleDateString('en-UK', { month: 'long' })); // 'uk-UA' --по укр

const month = data.toLocaleDateString('en-UK', { month: 'long' });
const day = data.toLocaleDateString('en-UK', { weekday: 'long' });
const dayNum = data.toLocaleDateString('en-UK', { day: 'numeric' });
const year = data.toLocaleDateString('en-UK', { year: 'numeric' });

monthEl.textContent = month;
dayEl.textContent = day;
dayNumberEl.textContent = dayNum;
yearsEl.textContent = year;
