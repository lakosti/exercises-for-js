//try{}
//catch (){ } --обробляє помилки під час коду синхронного чи асинхронного аналогічно до.then().catch()
//дозволює виконувати код далі навіть пр помилці
//catch{} --- можна писати і БЕЗ ПАРАМЕТРА, якщо він нам не потрібен!!!
// throw new Error('Error') -- //самостійний викид помилки

//(СИНХРОННА ПОМИЛКА)

// try {
//     console.log(drtt);
// } catch (err) {
//     console.log(err);
// }
// console.log('hello');

//АСИНХРОННА ПОМИЛКА ЯК ВІРНО ОБРОБИТИ

// setTimeout(() => {
//     try {
//         console.log(drtt);
//     } catch (err) {
//         console.dir(err);
//         console.dir(err.name);
//         console.dir(err.message);
//         console.dir(err.stack);
//         //ОБ'ЄКТ ПОМИЛКИ
//         //name -- назва помилки
//         //message -- яка саме помилка шо трапилось
//         //stack -- це рядок з назвою і повідомленням про помилку
//     }
//     console.log('hello');
// }, 1000);

// //НЕВІРНО
// try {
//     setTimeout(() => {
//         console.log(drtt);
//     }, 1000);
// } catch (err) {
//     console.log(err);
// }
// console.log('hello');

////////////////////////////////////////////////////////////////// ASYNC //////////////////////////////////////////////////////////

/**
 * Синтаксис async/await
 * try...catch
 */

/*
* - async/await(результат як у then) - фактично допомагає нам зробити імітацію синхронності виконання асинхронного коду (як заміна then, але then також можна викор)
* - async - оголошення асинхронної функції. Будь-яка асинхронна фукнція повертає Promise!!!
  async function foo() {
    return 5; // Promise
  }

  foo().then(data => console.log(data))

* - await - його можна використовувати тільки в асинхронній функції, яка оголошена оператором async. Цей оператор заморожує виконання усієї фукнції, до тих пір поки проміс, який ви напишете справа від оператору не виконається(тобто, не перейде у стан Fullfilled або Rejected). І як тільки проміс виконався - ми можемо повернути результат його виконання (і далі можемо робити з ним те ж саме, що і завжди в синхронному коді, наприклад, зберегти у змінну). Також, важливо памʼятати, якщо проміс виконається неуспішно, то await викине нам помилку, тому не забуваємо її оброблювати за допомогою try catch

*/

//AWAIT - витягує результа з промісу
//ПРОМІС МОЖНА ОБРОБИТИ АБО THEN/CATCH АБО ASYNC/AWAIT

// const fetchTodos = async () => {
//     //фетч виносимл в змінну
//     // щоб дістати дані з феча викорс await
//     const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
//     if (!resp.ok) {
//         throw new Error(resp.statusText);
//     }
//     //масив даних витягаємо за допомогою await
//     const data = await resp.json();
//     return data;
// };

// //тут then / catch можна залишити, бо створити асинх функцію займе більше коду
// fetchTodos()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

/// АСИНХРОННА ОБРОБКА (альтернатива then/catch) (обов'язково оброблюємо помилки)

// async function start() {
//     try {
//         const todosData = await fetchTodos();
//         console.log(todosData);
//     } catch (err) {
//         console.log(err);
//     }
// }
// start();

// ------------------ЗВИЧАЙНА СТРІЛОЧНА ФН-----------------------

// const fetchTodos = () => {
//     return fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             return;
//         });
// };

// fetchTodos()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });
