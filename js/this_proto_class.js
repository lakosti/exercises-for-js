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

//call() - fn.call(obj,parament1,paramentr2)
//apply() - fn.apply(obj, [5,2,3,[25,6]])
//bind() - робить копію з прив'язаним контекстом

//exercise // перевикористання функції -- примусовий виклик

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

class Car {
    //стандратні властивості класу
    static description = 'Опис автомобіля';
    static logInfo(carObj) {
        console.log('CarObj', carObj);
    }
    #test = 'private properties'; //приватна властивість // не можна достукатися //на екземплярі

    constructor({ brand, model, price } = {}) {
        this.brand = brand;
        this._model = model;
        this.price = price;
    }

    //те шо йде на прототип

    changePrice(newPrice) {
        this.price = newPrice;
    }
    changeModel(newModel) {
        this.model = newModel;
    }
    //GET/SET
    get model() {
        return this._model;
    }
    set model(newModel) {
        this._model = newModel;
    }
}

const carInstanse = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});
// console.log(Car.description);
// Car.logInfo(carInstanse);
console.log(carInstanse);
console.log(carInstanse.model); //get
carInstanse.model = 'Q4'; // set
// carInstanse.changeModel('RS-7');
// console.log(Object.getPrototypeOf(carInstanse) === Car.prototype); // true
console.log(carInstanse);