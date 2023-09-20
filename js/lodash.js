//isEmpty() -- перевірити чи порожній об'єкт
//Get() -- подивитися щось глибоко
//? --- необов'язкове свойство
//union() -- поєднує унікальні / ті що не повторюються елементи в один масив
//range() -- якщо потрібно почати з чогось і до якогось числа ( з 3 до 10)
//sortBy() -- сортірує по возростанію (сортірує зразу все)
//sum() / sumBy() -- знаходить суму масиву та об'єкту
//uniq() / uniqBy -- вибрать унікальний не повторяющийся
//sortedUniq() / sortedUniqBy() -- відсортований унікальний масив
//min / max // minBy / maxBy -- максим чи мінімальне число
//camelCase / capitalize / kebabCase / upperCase -- пустоту заповнює тирем -; // h-e-l-l-o

//____________________________isEmpty____________________________

// console.log(_.isEmpty({})); // true
// console.log(_.isEmpty({ a: 1 })); //false

//__________________________Get_______________________________________
// const user = {
//     name: 'mango',
//     // location: {
//     //     coords: [1, 2],
//     //     city: 'Lviv',
//     // },
// };
// // console.log(_.get(user, 'location.city')); //тут повернеться андефайнд
// // console.log(user.location.city); //може бути помилка якщо не буде взагалі локейнш

// if (user && user.location && user.location.city) {
//     console.log(user.location.city);
// } // якщо не буде локейнш то код просто не виповниться

// console.log(user?.location?.city); // якщо немає локейшн то сіті далі не шукай //замість помилки буде андефінед

//__________________________union_________________________________

// console.log(_.union([1, 2, 3], [3, 4, 5])); // [1 2 3 4 5]

//______________________range____________________

// console.log(_.range(1, 6, 2)); // починає з 1 до 5 з шагом 2 // 1,3,5

//_____________________sortBy__________________________

// const users = [
//     {
//         user: 'fred',
//         age: 48,
//     },
//     {
//         user: 'barney',
//         age: 36,
//     },
//     {
//         user: 'fred',
//         age: 40,
//     },
//     {
//         user: 'barney',
//         age: 34,
//     },
// ];
// console.log(_.sortBy(users, ['user', 'age']));

//___________________Sum /sumBy____________________________

// console.log(_.sum([1, 2, 3, 4, 5, 6])); //21

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'node.js'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['js', 'html', 'node.js'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'node.js', 'react'] },
// ];

// // // console.log(_.sumBy(tweets, like => like.likes)); //32

// // //____________________min / max ________________________

// // //Знайти користувача / юзера з найменшим лайком________________

// console.log(_.minBy(tweets, tweet => tweet.likes).id);

//_________________camelCase / capitalize / kebabCase/upperCase_________

// console.log(_.kebabCase('h e l l o'));
