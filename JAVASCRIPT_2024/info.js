//*Приведення до числа
// - приведення до цілого числа  -- Number.parseInt('27.5ps'); // 27
// - приведення до цілого числа  -- Number.parseInt('a27.5ps'); // NaN
// - приведення до дробового числа -- Number.parseFloat('27.556ps'); // 27.556
// - приведення до цілого числа  -- Number.parseInt('27.5ps'); // 27

// - приведення до числа -- Number('25') //25
// - приведення до числа -- Number('25ef') //NaN //? NaN === NaN // false || NaN == NaN // false

// - isNaN() -- console.log(isNaN('25.2rrd)) //true -- виконує привeдення типу до числа, isNaN приводить саме до типу даних намбер
// - Number.isNaN() -- console.log(Number.isNaN('25.2rrd)) //false -- не приводить тип до числа, очікує NaN,  (string === NaN) //false

//*ТИПИ ДАНИХ
// -- примітивні (число, рядок, boolean, null, undefined)
// -- складні (масиви та об'єкти)

//* ПОРІВНЯННЯ
// console.log(21 > '16'); // true -- оськільки виконується приведення типів до Number (і рядок стає числом)

// console.log(null == 0); //false
// console.log(null === 0); //false
// console.log(null > 0); //false
// console.log(null >= 0); //true
// console.log(null <= 0); //true

// console.log('0' == false); //true

//*ОПЕРАТОРИ
// / ?? -- реагує лише на null та undefined (оператор нульового поєднання), якщо немає null чи undefined -- повертає перше значення, якщо undefined ?? null буде останнє значення (в даномоу випадку null)
// && -- повертає перше FALSE (перериваєтсья на першому негативному значенні), або останнє true //*шукає перше false
// || -- виводить перше TRUE, або останнє false значення //*шукає перше true