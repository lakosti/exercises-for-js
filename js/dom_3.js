//ДЕЛЕГУВАННЯ ПОДІЙ --  коли додаємо прослуховувач на контейнер і слухаємо його дітей
//ДЕЛЕГУВАННЯ ПОДІЙ КРАЩЕ ОБРОБЛЯТИ ЧЕРЕЗ КЛАСИ

// evt.currentTarget --- ТОЙ ЯКИЙ ВИКЛИКАВ ПОДІЮ (батько)
//evt.target --- ТОЙ НА ЯКОМУ ПОДІЯ СПРАЦЮВАЛА (дитина)};

//ЗАДАЧА ПРИ КЛІЦІ ОТРИМАТИ КОЛІР (поганий приклад давати прослуховувача на всі кліки)

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

const instance = basicLightbox.create(`
    <h1>Dynamic Content</h1>
    <p>You can set the content of the lightbox with JS.</p>
`);
console.log(instance);
instance.show();

//ЗАДАЧА ДЕЛЕГУВАННЯ (по айді клацуючи на зображення показувати його на весь екран) (CARS)__________________________

const cars = [
    {
        id: 1,
        car: 'Honda',
        type: 'Civic',
        price: 12000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU',
    },
    {
        id: 2,
        car: 'Audi',
        type: 'Q7',
        price: 40000,
        img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg',
    },
    {
        car: 'BMW',
        type: '5 siries',
        price: 9000,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU',
    },
    {
        id: 4,
        car: 'Honda',
        type: 'Accord',
        price: 20000,
        // number: '+380000000000',
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg',
    },
    {
        id: 5,
        car: 'Volvo',
        type: 'XC60',
        price: 7000,
        img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320',
    },
];

const container = document.querySelector('.js-container-3');
console.log(container);

const markup = cars
    .map(
        ({ id, car, img }) => `        <li data-id = '${id}'>
            <img src="${img}" alt="${car}" width='300'/>
            <p>Марка: ${car}</p>
        </li>`
    )
    .join('');

container.insertAdjacentHTML('beforeend', markup);
