// cdn -- підкл сторонніх файлів перед скриптами в дж (сдн - береться найближчий до клієнта) не викор в нових проектах
// npm -- найчастіше використовується саме таке підлючення
// ярн -- найчастіше використовується саме таке підлючення

// з бібліотеки
/// throttle -- затримка (асинхрон) -- НЕ ПРАЦЮЄ curentTarget -- він зчитується прямо під час події але асинхронні методи його втрачають
/// debounce -- затримка (асинхрон) -- НЕ ПРАЦЮЄ curentTarget
// РІЗНИЦЯ МІЖ НИМИ throttle -- починає відлік від першого натискання клавіші, debounce -- відлік від останньої натисненої клавіші

// випадаючі підсказки під час пошуку -- тротл
// коли користувачу необхідно все написати (наприклад валідація) -- дебоунс

//ЗАТРИМКИ використовується в інпуті під час пошуку товару (search) - шоб користтувач встиг більше написати і менше подій спрацювало і запустилось менше циклів

// console.log(_.throttle(fn, 200, {
//  leading: false,
//   trailing: false,
//}; // (приймає колбек + час затримки + об'єкт налаштувань(необов'язковий))
// console.log(_.debounce);

//ВАЛІДАЦІЯ ДЕБОУНС

// const input = document.querySelector('.input');
// input.addEventListener('input', _.throttle(onSearch, 800));

// const worldLength = 7;
// function onSearch(evt) {
//     if (evt.target.value.trim().length < worldLength) {
//         evt.target.classList.remove('invalid');
//         evt.target.classList.add('valid');
//     } else {
//         evt.target.classList.remove('valid');
//         evt.target.classList.add('invalid');
//     }
// }

//LAZYLOAD (loading = 'lazy' - атрибут) -- пізніше підзавантажуються картинки (в залежності від швидкості інтернету і контексту на ст)

// const cats = [
//     'https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg',
//     'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg',
//     'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg',
//     'https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8',
//     'https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all',
//     'https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU',
//     'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU',
//     'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU',
//     'https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg',
//     'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
//     'https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg',
//     'https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU',
// ];
// const container = document.querySelector('.cats-container');
// const markup = cats
//     .map(
//         cat => `<li >
//                 <img src="${cat}" alt="cat" width='400' loading='lazy'/>
//                 <p>
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero odit, laudantium
//                     ab aperiam cum eum corporis blanditiis sint molestias temporibus reiciendis
//                 </p>
// </li>`
//     )
//     .join('');

// container.insertAdjacentHTML('beforeend', markup);

///////////////////////ПРАКТИКА МУТАЦІЯ ОБ'ЄКТУ///////////////////////////////

//ЗАДАЧА 1. Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)_________________________________________

// const products = [
//     {
//         id: 'sku1',
//         qty: 1,
//     },
//     {
//         id: 'sku2',
//         qty: 2,
//     },
//     {
//         id: 'sku3',
//         qty: 3,
//     },
//     {
//         id: 'sku1',
//         qty: 6,
//     },
//     {
//         id: 'sku1',
//         qty: 8,
//     },
//     {
//         id: 'sku1',
//         qty: 6,
//     },
//     {
//         id: 'sku1',
//         qty: 6,
//     },
//     {
//         id: 'sku1',
//         qty: 6,
//     },
//     {
//         id: 'sku2',
//         qty: 19,
//     },
//     {
//         id: 'sku4',
//         qty: 1,
//     },
//     {
//         id: 'sku1',
//         qty: 8,
//     },
// ];

// //порівнюємо перший з наступними -- використовуємо цикл в циклі

// function getQuantity(arr) {
//     for (let i = 0; i < arr.length; i += 1) {
//         for (let j = i + 1; j < arr.length; j += 1) {
//             if (arr[i].id === arr[j].id) {
//                 arr[i].qty += arr[j].qty;
//                 arr.splice(j, 1);
//                 j -= 1;
//             }
//         }
//     }
// }
// getQuantity(products);
// console.log(products);

//ЗАДАЧА 2 У кожному масиві, а є унікальний рядок, у якому не повторюються літери. Знайдіть і виведіть цей рядок__________________________

// ["abc", "acb", "bac", "foo", "bca", "cab", "cba"]

//////////////////////////////////////////////////////////////////

////TASK LIBRARY__________________________________________________________________________

// const books = [
//     {
//         id: '1',
//         title: `Apple. Computer evolution`,
//         author: `Володимир Невзоров`,
//         img: `https://bukva.ua/img/products/449/449532_200.jpg`,
//         plot: `Richly illustrated chronological guide to the history of computers in which
//        and structured information about the creation and development of Apple technology against the backdrop of history
//        personal computers in general.
//        The book contains descriptions of dozens of the most significant models of devices from both Apple and other manufacturers,
//        accompanied by a large number of original studio photographs.
//        The book is intended for a wide range of readers interested in the history of electronics.
//        It can also serve as a source of inspiration for designers, marketers and entrepreneurs.`,
//     },
//     {
//         id: '2',
//         title: `How to explain `,
//         author: `Керол Вордерман`,
//         img: `https://bukva.ua/img/products/480/480030_200.jpg`,
//         plot: `Illustrated encyclopedia in infographic format on technical, social and cultural aspects
//        in informatics. Explains step by step how children can get the most out of computers and internet services,
//        staying safe.
//        The book covers everything from data storage to life on the Internet,
//        from programming to computer attacks. About how computers function, about modern software
//        software, the device of the Internet and digital etiquette. All concepts - from hacker to bitcoin -
//        explained clearly with illustrations and diagrams.`,
//     },
//     {
//         id: '3',
//         title: `The path of the Scrum`,
//         author: `Зузана Шохова`,
//         img: `https://bukva.ua/img/products/480/480090_200.jpg`,
//         plot: `This book will help you become an outstanding Scrum Master and achieve great results with your team.
//        It is illustrated and easy to understand - you can read it in a weekend, and use the resulting
//        knowledge throughout your career.
//        Based on 15 years of experience, Zuzana Shokhova explains the roles and responsibilities of a Scrum Master,
//        how to solve everyday tasks, what competencies are needed to become an outstanding scrum master,
//        What tools does he need to use?`,
//     },
// ];

// const right = document.querySelector('.right-box');
// const left = document.querySelector('.left-box');

// const markup = books
//     .map(
//         ({ id, title, img }) => `
//         <div class='div-el' data-id='${id}'>
//         <img src="${img}" alt="${title}" width = '200'/>
//         <h3>${title}</h3>
//         <button class='btn-preview'>Show more info</button>
//         </div>`
//     )
//     .join('');

// left.innerHTML = markup;

// const btns = document.querySelectorAll('.btn-preview');
// btns.forEach(btn => btn.addEventListener('click', onClick));

// function onClick(evt) {
//     //ВИТЯГТИ АЙДІ
//     //1 спосіб
//     const idEl = evt.target.closest('.div-el').dataset.id;
//     //2 спосіб
//     // const bookId = evt.target.parentElement.dataset.id;
//     const findEL = books.find(({ id }) => id === idEl);
//     const instance = basicLightbox.create(`<div class='modal-window'>
//                     <img src="${findEL.img}" alt="">
//                     <h2>${findEL.title}</h2>
//                     <p>${findEL.plot}</p>
//                 </div>`);
//     instance.show();
//     // right.innerHTML = instance;
// }
