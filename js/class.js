//СУТЬ ООП -- СТВОРЮЄМО ЩОСЬ СПІЛЬНЕ (МЕТОДИ, ВЛАСТИВОСТІ) І НАСЛІДУЄМО
// Клас -- це функція яка відповідає за створення нових об'єктів(екземплярів) за своїм шаблоном, кожен екзампляр буде повязаний із класом через ланцюг прототипів (все спільне збегірається на одному класі)
//Constructor -- це метод який викликаєтсья під час ств екземпляру класу (ств нового об'єкта) займається ініціалізацією об'єкта, однак тут можна писати і будь який інший код
// new -- ств новий екзампляр (пустий об'єкт) // викликає конструктор класу // вказує контруктору що this буде посилатися на новий пустий об'єкт
// публічні методи: публічний інтерфейс - методи за допомогою яких можете керувати вашими екземплярами // доступні всім // наслідуються
// приватні властивості / методи -- вони доступні тільки всередині класу їх не можна викликати на межею класу буде помилка // приватні часто працюють в парі з методами аксесорами та реалізують принцип інкапсуляції
//ПРИНЦИПИ ООП (4-5)
// 1. інкапсуляція -- ховаємо методи та власивості які не хочемо щоб хтось змінив
// 2. аксесор --
// статичні властивості / методи --
// інтерфейс --
// геттер --
// сеттер --

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
    //приватні властивості
    //статичні властивості / методи
    constructor(firstName, secondName, birthDate) {
        console.log('User class');
        this.firstName = firstName;
        this.secondName = secondName;
        this.birthDate = birthDate;
    }

    //публічні методи

    //геттери та сеттери
}

const user = new User('Oleg', 'Davidson', 1978);
console.log(user);
const user1 = new User('Vika', 'Stefanova', 1998);
console.log(user1);
