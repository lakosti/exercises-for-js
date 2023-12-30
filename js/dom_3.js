// ДЕЛЕГУВАННЯ ПОДІЙ --  коли додаємо прослуховувач на контейнер і слухаємо його дітей
// ДЕЛЕГУВАННЯ ПОДІЙ КРАЩЕ ОБРОБЛЯТИ ЧЕРЕЗ КЛАСИ
//
// closest() шукає першого спільного батька з таким класом /айді/селектором
// closest() = document.querySelector()
// evt.stopPropagination -- зупиняє подальше всплиття
// evt.stopImmediatelyPropagination -- зупиняє не тільки всплиття а і обробку однакової події на поточному елементі;

// evt.currentTarget --- ТОЙ ЯКИЙ ВИКЛИКАВ ПОДІЮ (батько)
// evt.target --- ТОЙ НА ЯКОМУ ПОДІЯ СПРАЦЮВАЛА (дитина)};

// ЗАДАЧА ПРИ КЛІЦІ ОТРИМАТИ КОЛІР (поганий приклад давати прослуховувача на всі кліки)

// const container = document.querySelector('.container-lesson_3');
// container.addEventListener('click', onClick);
// // [...container.children].forEach(item => item.addEventListener('click', onClick));

// function onClick(evt) {
//     // console.dir(evt.currentTarget.dataset.color);

//     if (!evt.target.classList.contains('js-box')) {
//         return;
//     }
//     // console.log(evt.currentTarget); // ТОЙ ЯКИЙ ВИКЛИКАВ ПОДІЮ (батько)
//     console.log(evt.target.dataset.color); // ТОЙ НА ЯКОМУ ПОДІЯ СПРАЦЮВАЛА (дитина)};
// }

///ПІДКЛЮЧЕННЯ БІБЛІОТЕКИ (СТВ МОДАЛКИ (метод show))

// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `);
// console.log(instance);
// instance.show();

//ЗАДАЧА ДЕЛЕГУВАННЯ (по айді клацуючи на зображення показувати його на весь екран) (CARS)__________________________

// const cars = [
//     {
//         id: 1,
//         car: 'Honda',
//         type: 'Civic',
//         price: 12000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
//     },
//     {
//         id: 2,
//         car: 'Audi',
//         type: 'Q7',
//         price: 40000,
//         img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
//     },
//     {
//         id: 3,
//         car: 'BMW',
//         type: '5 siries',
//         price: 9000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
//     },
//     {
//         id: 4,
//         car: 'Honda',
//         type: 'Accord',
//         price: 20000,
//         // number: '+380000000000',
//         img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
//     },
//     {
//         id: 5,
//         car: 'Volvo',
//         type: 'XC60',
//         price: 7000,
//         img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
//     },
// ];

// const container = document.querySelector('.js-container-3');
// console.log(container);

// //там де потрібен буде клік робимо відповідний клас і слідкуємо за відступами

// const markup = cars.map(
//     ({ id, car, img }) => `<li class="js-target " data-car-id = "${id}">
//             <img class="js-target" src="${img}" alt="${car}" width='300'/>
//             <h2 class="js-target">Марка: ${car}</h2>
//         </li>`
// );
// container.insertAdjacentHTML('beforeend', markup.join(''));

// //реалізовуємо делегування подій

// container.addEventListener('click', onClick);

// function onClick(evt) {
//     const { target } = evt;
//     if (!target.classList.contains('js-target')) {
//         return;
//     }
//     //якщо приходить андефінед з датасет то беремо з найближчого спільного батька з таким класом / айдійшніком / селектором
//     //?? -- оперетор нульового злиття (undefined/null)

//     const carId = target.dataset.carId ?? target.closest('li').dataset.carId;
//     console.log(carId);

//     //дата атрибут повертає рядок тому приводимо до числа бо айді в об'єкті числа!!!!!
//     const findCar = cars.find(({ id }) => Number(carId) === id);
//     console.log(findCar);

//     //відмалювуємо розмітку за допомогою бібліотеки
//     const instance = basicLightbox.create(`
// <div class="instance-style">
//     <img src="${findCar.img}" alt="${findCar.car}" width="700" height="400">
//     <h2>Марка: ${findCar.car}</h2>
//     <h3>Модель: ${findCar.type}</h3>
//     <p>Ціна:${findCar.price}</p>
// </div>
//     `);

//     //закриття при Escape

//     document.addEventListener('keydown', evt => {
//         if (evt.code === 'Escape') {
//             instance.close();
//             // removeEventListener('keydown', closeEsape) // + зняти подію
//         }
//     });
//     console.log(instance);
//     instance.show();
// }

//////////////////////////////// ALEX ////////////////////////////////////

//ЗАДАЧА РОБОТА З МОДУЛЬНОЮ БІБЛІОТЕКОЮ_______________________
/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox
 */

const products = [
    {
        id: 1,
        img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
        name: 'Monitor',
        price: 3000,
        description: '23-inch monitor with Full HD resolution.',
    },
    {
        id: 2,
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX',
        name: 'Laptop',
        price: 20000,
        description: 'Lightweight and powerful laptop with a 15-inch display and SSD.',
    },
    {
        id: 3,
        img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
        name: 'Smartphone',
        price: 8000,
        description: 'Equipped with a triple camera and a multi-core processor.',
    },
    {
        id: 4,
        img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
        name: 'Tablet',
        price: 12000,
        description: '10-inch tablet with high performance and a Retina display.',
    },
];
const phoneList = document.querySelector('.phone-list');
const markup = products
    .map(
        ({ id, img, name, price }) => `            <li data-id='${id}'>
                <div>
        <img src="${img}" alt="${name}" width='300'>
                    <h3>${name}</h3>
                    <p>Ціна: ${price} грн</p>
                </div>
            </li>`
    )
    .join('');

phoneList.insertAdjacentHTML('beforeend', markup);
phoneList.addEventListener('click', onClick);

function onClick(evt) {
    //
}
