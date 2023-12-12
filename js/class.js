//СУТЬ ООП -- СТВОРЮЄМО ЩОСЬ СПІЛЬНЕ (МЕТОДИ, ВЛАСТИВОСТІ) І НАСЛІДУЄМО
// Клас -- це функція яка відповідає за створення нових об'єктів(екземплярів) за своїм шаблоном, кожен екзампляр буде повязаний із класом через ланцюг прототипів (все спільне збегірається на одному класі)
//Constructor -- це метод який викликаєтсья під час ств екземпляру класу (ств нового об'єкта) займається ініціалізацією об'єкта, однак тут можна писати і будь який інший код
// new -- ств новий екзампляр (пустий об'єкт) // викликає конструктор класу // вказує контруктору що this буде посилатися на новий пустий об'єкт

//ПРИНЦИПИ ООП (4-5)
// 1. інкапсуляція -- ховаємо методи та власивості які не хочемо щоб хтось змінив
// 2. аксесор -- методи які отримують доступ до чогось (геттери / сеттери)
// статичні властивості / методи -- доступні з самого класу, звертатися до неї можна тільки через клас // НЕ НАСЛІДУЮТЬСЯ
// публічні методи: публічний інтерфейс - методи за допомогою яких можете керувати вашими екземплярами // доступні всім // наслідуються
// приватні властивості / методи -- вони доступні тільки всередині класу їх не можна викликати на межею класу буде помилка // приватні часто працюють в парі з методами аксесорами та реалізують принцип інкапсуляції // НЕ НАСЛІДУЮТЬСЯ // З приватними властивостями можна працювати тільки в класі де вони оголошені
// інтерфейс --
// геттер (повертає/return)(приватні властивості) -- методи аксетори дозволяють задавати значення приватним полям НЕ МІСТИТЬ ПАРАМЕТР
// сеттер (встановлює) (приватні властивості) -- методи аксетори дозволяють задавати значення приватним полям МІСТИТЬ в собі ПАРАМЕТР

///об'єкт юзера

// const user = {
//     firstName: 'Oleg',
//     secondName: 'Davidson',
//     birthDate: 1987,
//     getUserAge() {
//         return new Date().getFullYear() - this.birthDate;
//     },
//     getFullName() {
//         return `${this.firstName} ${this.secondName}`;
//     },
// };

// console.log(user.getUserAge());
// console.log(user.getFullName());

//робимо клас щоб не перевикористовувати по декілька разів одні і ті самі методи та властивості
class User {
    //статичні властивості / методи
    static counter = 0;
    static incrementUserAmount() {
        this.counter += 1;
        console.log(`Created new User. User amount ${this.counter}`);
    }

    #password;
    //приватні властивості
    constructor(firstName, secondName, birthDate, password) {
        User.incrementUserAmount();
        this.firstName = firstName;
        this.secondName = secondName;
        this.birthDate = birthDate;
        this.#password = password;
    } //публічні методи
    getUserAge() {
        return new Date().getFullYear() - this.birthDate;
    }
    getFullName() {
        return `${this.firstName} ${this.secondName}`;
    }
    #checkPassword() {
        const userPass = prompt('Enter password');
        return userPass === this.#password;
    }

    //геттери та сеттери
    get password() {
        if (this.#checkPassword()) {
            return this.#password;
        } else {
            return 'Wrong password';
        }
    }
    set password(newPassword) {
        if (this.#checkPassword() && newPassword.trim().length >= 4) {
            this.#password = newPassword;
        } else {
            alert('Incorrect data!');
        }
    }
}

const user = new User('Oleg', 'Davidson', 1978, 'qwerty');
console.log(user);
const user1 = new User('Vika', 'Stefanova', 1958, 'qwerty');
const user2 = new User('Anna', 'Stefanova', 1925, 'qwerty');
const user3 = new User('Egor', 'Stefanova', 1936, 'qwerty');

console.log(user1);
// console.log((user.password = '1111')); // сеттер // задаємо нове значення
// console.log(user1.password); // геттер
// console.log(user.password);
console.log(user.counter);

///----------НАСЛІДУВАННЯ КЛАСІВ

class Student extends User {
    constructor(firstName, secondName, birthDate, password, points) {
        super(firstName, secondName, birthDate, password, points); // -- викликає контруктор батківсього класу

        this.points = points;
    }
}
const student = new Student('Victor', 'Davidson', 1976, 'qwerty', 87);
console.log(student);
