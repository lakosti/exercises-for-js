//PROTATYPE - місце для зберігання значень, методів = _ _proto_ _:
//_ _proto_ _ -- можливість зв'язати об'єкти по силці -
// _ _proto_ _: - лише для об'єкта
//prototape ---- лише у функції
//У кожного об'єкта є властивіть proto де зберігається посилання на його прототип (другий об'єкт)
//При створенні літерала об'єкта у властивість proto записується посилання на функцію.ptototype і вони = один одному
//прототипна цепочка
//починаємо з кінця
// методи збергіються на протатипі функції (саме посилання на них), бо якщо писати в конструкторі буде буже багато копій Car.prototype.sayHello = function () {}
//геттери - отримують / виводять на екран
//сеттери - устанавляють якісь зміни

//ПРИВАТНІ властивості та методи недоступні в глобальній області видимості, доступні лише у своїй
//статичні методи та властивості - залишаються на своєму конструкторі
// якщо є приставка static  то this посилається на констуктор (клас) не на інстанс

//якщо не знайшло метода - то помилка
//якщо не знайшло властивості то underfined (властивість це - ключ і значення)
//методи класів ідуть на прототип, а властивості пишуться як власні

///КЛАСС = ЧЕРТЕЖ
//ЄКЗЕМПЛЯР = ФІЗИЧНО СТВ (об'єкт) // ств через new
// const myCar = new Car();
// клас та екземпляр = однакові властивості(машини) але різні значення(для чого використовують/колір/сідення)
// ІНТЕРФЕЙС = набір доступних властивостей та методів

//ФУНКЦІЯ КОНСТРУКТОР (ств екземпляр)
// з великої літери
// в однині

//якщо функція ств через new - то десь в пам'яті свт пустий об'єкт
// this в цій фукції буде зсилатися на ств пустий об'єкт

//ГЕТТЕРИ / СЕТТЕРИ
//дають змогу змінити та відобразити власні властивості #property
//мають однакові назви і працюють з однією властивістью
//працюють із приватними властивостями - #location
//get  -- повертає / return  //// не містить параметри //get locate (){ return this.#location}
//set  -- устанавляє /// містить параметри // set locate (city){ this.#location = city}
//сеттери та геттери пишуться як методи а викликаютсься як властивості obj.locale, у сеттері додатково пишемо значення obj.locale = 'Sumy'

///THIS
// 1. Якщо this викликаємо в контексті об'єкта(зліва від функції) то воно посилається на цей об'єкт

// const user = {
//     showText() {
//         console.log('Hello', this);
//     },
// };
// user.showText(); THIS == OBJ

//2. якщо this викликається всередині функції без об'єкту то this буде underfined або буде посилатися на об'єкт window без суворого режиму
// const foo = function () {
//     console.log('foo', this);
// };
// foo(); // THIS == UNDERFINED

//3. при передачі this як метода об'єкта контекст не сохраняється і буде underfined________________________________

//Отже якщо функція посилається на об'єкт obj.fn() -- буде об'єкт у this
//якщо не посилається на об'єкт а просто функція то буде underfined, оскільки вони не пов'язані між собою
//Методи об'єкта не знаю нічого в якому об'єкті вони знаходяться

//ПРИМУСОВО ВИКЛИКАЮТЬ ФУНКЦІ У КОНТЕКСТІ ОБ'ЄКТУ

// call() - fn.call(obj,parament1,paramentr2) -- викликає функцію тут і зараз // для рядків // одноразово
// apply() - fn.apply(obj, [5,2,3,[25,6]]) -- викликає функцію тут і зараз // для масивів // одноразово
// bind() - робить копію з прив'язаним контекстом // this завжди посилається на той об'єкт що її викликав // параметри в bind передаєм під час виклику, бо вони не перебиваються //декілька разів

// exercise // перевикористання функції -- примусовий виклик

// const changeColor = function (color) {
//     console.log('changeColor', this);
//     this.color = color;
//     //this.color = hat.color перший раз а sweater.color в другий раз
// };
// const hat = {
//     color: 'black',
// };
// //викликаємо функцію на об'єкті hat і змінюємо колір на оранжевий
// // changeColor.call(hat, 'orange'); //примусово викликаємо функцію в контексті об'єкту
// // console.log(hat);

// const sweater = {
//     color: 'green',
// };
// // changeColor.call(sweater, 'yellow');
// // console.log(sweater);

// //копія bind // завжди посилається на той об'єкт який передали в неї

// const changeHatColor = changeColor.bind(hat); // завжди посинається на об'єкт hat
// changeHatColor();
// changeHatColor('pink');
// console.log(hat); // змінили колір

//exercise
// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement', this);
//         this.value -= value;
//     },
// };

// const updatedCounter = function (value, operation) {
//     operation(value);
// };
// // updatedCounter(10, counter.increment) //this = underfined
// // updatedCounter(5,counter.decrement) //this = underfined

// updatedCounter(10, counter.increment.bind(counter)); //this = obj
// updatedCounter(5, counter.decrement.bind(counter)); //this = obj
// console.log(counter);

////
//PROTATYPE - місце для зберігання значень, методів = _ _proto_ _:
//_ _proto_ _ -- можливість зв'язати об'єкти по силці
//прототипна цепочка
//починаємо з кінця

// const objC = {
//     z: 3,
// };
// const objB = Object.create(objC); //повертає пустий об'єкт
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.y);

///КЛАСС = ЧЕРТЕЖ
//ЄКЗЕМПЛЯР = ФІЗИЧНО СТВ (об'єкт чи ще шось) // ств новий екзмепляр через new // const myCar = new Car();
// клас та екземпляр = однакові властивості(машини) але різні значення(для чого використовують/колір/сідення)
// интерфейс = набір доступних властивостей та методів

//ФУНКЦІЯ КОНСТРУКТОР (ств екземпляр) (стрілки не можуть бути констуктором)
// з великої літери
//в однині
// const Car = function ({ brand, model, price } = {}) {
//     // = {} - значення по замовчуванню
//     // console.log(this); //зсилається  на пустий об'єкт//посилання на об'єкт повертається в місце виклику
//     this.brand = brand;
//     this.price = price;
//     this.model = model;
//     // this.changePrice = function (newPrice) {
//     //     this.price = newPrice;
//     // };
// };
// console.log(Car.prototype); // використовується для того щоб додати загальні методи

// Car.prototype.sayHello = function () {
//     console.log('Hello', this);
// };
// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// };

// const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 35000 }); // ств новий екземпляр через new
// console.log(myCar);

// myCar.changePrice(100000);

// const myCar2 = new Car({ brand: 'Mazda', model: 'CS3', price: 28000 }); // ств новий екземпляр через new
// console.log(myCar2);

////CLASS (той самий конструктор але новий синтаксис)

// class Car {
//     //стандратні властивості класу
//     static description = 'Опис автомобіля';
//     static logInfo(carObj) {
//         console.log('CarObj', carObj);
//     }
//     #test = 'private properties'; //приватна властивість // не можна достукатися //на екземплярі

//     constructor({ brand, model, price } = {}) {
//         this.brand = brand;
//         this._model = model;
//         this.price = price;
//     }

//     //те шо йде на прототип

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }
//     changeModel(newModel) {
//         this.model = newModel;
//     }
//     //GET/SET
//     get model() {
//         return this._model; // получить
//     }
//     set model(newModel) {
//         this._model = newModel; //  установить
//     }
// }

// const carInstanse = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });
// // console.log(Car.description);
// // Car.logInfo(carInstanse);
// console.log(carInstanse);

// // carInstanse.changeModel('RS-7');
// // console.log(Object.getPrototypeOf(carInstanse) === Car.prototype); // true
// console.log(carInstanse.model); //get
// carInstanse.model = 'Q4'; // set
// console.log(carInstanse);

//НАСЛІДУВАННЯ // ГЕРОЇ

// class Hero {
//     constructor({ name = 'hero', xp = 0 } = {}) {
//         this.name = name;
//         this.xp = xp;
//     }
//     gainXp(amount) {
//         console.log(`${this.name} отримує ${amount} очків `);
//         this.xp += amount;
//     }
// }
// //клас воїн наслідує клас hero
// //потрібно в класі дитини(варіор) викликати батьківський клас
// class Warrior extends Hero {
//     constructor({ weapon, ...restProps } = {}) {
//         super(restProps); // виклик конструктора
//         this.weapon = weapon;
//     }
//     attack() {
//         console.log(`${this.name} атакує використовуючи ${this.weapon}`);
//     }
// }
// //берсерк наслідує воїна тому від нього extend

// class Mage extends Hero {
//     constructor({ spells, ...restProps } = {}) {
//         super(restProps);
//         this.spells = spells;
//     }
//     cast() {
//         console.log(`${this.name} кастует`);
//     }
// }
// class Berserk extends Warrior {
//     constructor({ warcry, ...restProps } = {}) {
//         super(restProps);

//         this.warcry = warcry;
//     }
//     babyRange() {
//         console.log(this.warcry);
//     }
// }
// const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'алебарда' });
// console.log(mango);

// const poly = new Mage({ name: 'poly', xp: 500, spells: 'water' });
// console.log(poly);

// const ajax = new Berserk({ name: 'ajax', xp: 200, weapon: 'axe', warcry: 'aaaaaaa' });
// console.log(ajax);
// ajax.babyRange();
// ajax.attack();
// ajax.gainXp(300);

// mango.attack();
// mango.gainXp(1000);
// poly.cast();
// poly.gainXp(200);

// console.log(Object.getPrototypeOf(mango) === Warrior.prototype); // true
// console.log(Warrior.prototype.__proto__ === Hero.prototype); //true
// console.log(Hero.prototype.__proto__ === Object.prototype); //true

/////CLASS

// class User {
//     static counter = 0; // рахує кількість юзерів
//     static addUser() {
//         //user.counter += 1
//         this.counter += 1;
//         console.log(`number of users ${this.counter}`);
//     }
//     // #location;
//     constructor({ name, email, age = 18, location = 'Word', password } = {}) {
//         this.name = name;
//         this.email = email;
//         this.age = age;
//         // this.#location = location;
//         this.password = password;
//         User.addUser(); //у конструкторі this посилаються на екзмепляр, але статичні методи посилаються на клас
//     }
//     sayHello() {
//         console.log(this.name);
//     }
//     // #getEmail() {
//     //     console.log(this.email);
//     // }

//     //get / set мають однакову назву, але не таку як назва ключа // опрацювують одну властивість
//     // get locate() {
//     //     return this.#location;
//     // }
//     // set locate(city) {
//     //     const input = prompt('Enter password');
//     //     this.#getEmail;
//     //     if (input === this.password) {
//     //         this.#location = city;
//     //         console.log(this.#location);
//     //     } else {
//     //         console.log('Wrong passwprd');
//     //     }
//     // }
// }
// // гра
// class Avatar extends User {
//     constructor({ name, email, location, password, age, damage }) {
//         super({ name, email, location, password, age, damage }); //з'єднується із батківським конструктором
//         this.damage = damage;
//     }
//     attack() {
//         console.log(`Attack with damage ${this.damage}`);
//     }
// }
// const gamer = new Avatar({
//     name: 'Avatar',
//     email: 'terfef@gmail.com',
//     location: 'Lviv',
//     password: 'dfeofmwesf',
//     damage: 700,
// });
// ///////////////////
// //
// //
// //
// const test = new User({
//     name: 'User A',
//     email: 'test@gmail.com',
//     location: 'Lviv',
//     password: 'qwerty111',
// });
// // test.sayHello();
// // console.log(test.locate);
// // test.locate = 'Dnipro';

// const test1 = new User({
//     name: 'User B',
//     email: 'gmail@gmail.com',
//     age: 99,
//     password: 'dfrtghy121',
// });

// console.log(test);
// console.log(test1);
// console.log(gamer);

///////////////////////////////////////////ПРАКТИКА/////////////////////////////////////////////////////////////////////////

// Example 1 - Блогер________________________________________________________

// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class Blogger {
//     constructor({ name, age, numberOfPosts, topics }) {
//         (this.email = name),
//             (this.age = age),
//             (this.numberOfPosts = numberOfPosts),
//             (this.topics = topics);
//     }
//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//     }
//     updatePostCount(value) {
//         return (this.numberOfPosts += value);
//     }
// }

// const userA = new Blogger({
//     name: 'yaroslava@gmail.com',
//     age: 17,
//     numberOfPosts: 4,
//     topics: ['food', 'health'],
// });

// const userB = new Blogger({
//     name: 'hovenko@gmail.com',
//     age: 16,
//     numberOfPosts: 2,
//     topics: ['war', 'comics'],
// });
// userA.updatePostCount(2);
// console.log(userA.getInfo());
// console.log(userB);

//// Example 2 - Сховище________________________________________________________

// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items;
//     }
//     addItem(item) {
//         if (!this.items.includes(item)) {
//             this.items.push(item);
//             return; // воно додасть банан а потім буде писати що банан є , тому тут потрібен return
//         }

//         console.log(`You already have this ${item}. Pease choose another item`);
//     }
//     removeItem(item) {
//         const idx = this.items.indexOf(item);
//         if (!!~idx) {
//             // !!~  те шо було 0 = -1  === !(idx === -1) be twice not // якщо є елем
//             // !! приведення до буля
//             this.items.splice(idx, 1);
//             return;
//         }
//         console.log(`You haven't this ${item}`);
//     }
// }

// const storage = new Storage(['apple', 'lemon', 'grapes', 'peach']);

// const items = storage.getItems();
// console.log(items);

// storage.addItem('banana');
// storage.addItem('apple');
// console.log(storage.items);

// storage.removeItem('lemon');
// console.log(storage.items);

//EXAMPLE 3 геттери та сеттерию. Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та  email__________________________________________________

class User {
    #login; // обов'язково оголошуємо їх зверху
    #email;
    constructor({ login, email }) {
        this.#login = login;
        this.#email = email;
    }
    get login() {
        return this.#login; // повертаємо значення (типу консолі)
    }
    set login(newLogin) {
        this.#login = newLogin; // перевизначаємо
    }
}

const polly = new User({ login: 'yaroslava', email: 'hovenko@gmail.com' });

console.log(polly.login); // виклик гетера
polly.login = 'susanna'; // виклик сеттера
console.log(polly.login);
polly.email = 'valentyna@gmail.com';
console.log(polly.email);

//     // set locate(city) {
//     //     const input = prompt('Enter password');
//     //     this.#getEmail;
//     //     if (input === this.password) {
//     //         this.#location = city;
//     //         console.log(this.#location);
//     //     } else {
//     //         console.log('Wrong passwprd');
//     //     }
//     // }

//EXAMPLE 4 Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.________________________________________________
