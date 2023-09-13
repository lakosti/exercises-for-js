// //функція вищого порядку
// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback); // це посилання на функцію
//     callback(100); // і це визов fnB функції
// };
// //сallback функція
// const fnB = function (number) {
//     console.log('це лог при визові fnB', number);
// };
// fnA('message', fnB);

////перевикористання функції
function doMath(a, b, callback) {
    const result = callback(a, b);

    console.log(result);
}

// function add(x, y) {
//     return x + y;
// }
// function sub(x, y) {
//     return x - y;
// }

// doMath(2, 3, add);
// doMath(10, 2, sub);

//інлайнові функції / анонімні // та яка передається як колбек // одноразові

// doMath(10, 2, function (x, y) {
//     return x - y;
// });
// doMath(2, 3, function (x, y) {
//     return x + y;
// });

//
// function myltiply(a, b, callback) {
//     const sum = callback(a, b);
//     console.log(sum);
// }
// function call(a, b) {
//     return a * b;
// }
// myltiply(2, 5, call);

//ПРИКЛАДИ ВИКОРИСТАННЯ

//відкладений виклик: реєстрація подій//відкладена функція // при такій події виконай цю функцію_______________________________

const buttonRef = document.querySelector('.js-btn');

const handleBtnClick = function () {
    console.log('клик по кнопке' + Date.now());
};

//callback - функція виконається при якомусь собитію
buttonRef.addEventListener('click', handleBtnClick); //слушатель собитій (1 параметр - по якому собитію, 2-й що саме робить(функція))
