//localStarage -- не можемо передевати функції чи методи об'єкту лише рядки
//JSON.parse -- привести до того типу даних шо було
//JSON.stingify -- привести до рядка

// localStorage.setItem('key', 'value') -- зберегти значення  одне
// localStorage.getItem('key'); -- отримати значення одне
// localStorage.removeItem(); -- видалити шось одне
// localStorage.clear(); -- очистити все

localStorage.setItem('TEST', JSON.stringify([1, 2, 3, 4]));
console.log(JSON.parse(localStorage.getItem('TEST')));
