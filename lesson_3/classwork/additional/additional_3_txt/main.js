// 1. Створити пустий масив та :
let array_number = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
let i = 0;
while (array_number.length < 50) {
    i++;
    if (i % 2 === 0) {
        array_number.push(i);
    }
}
//     b. заповнити його 50 непарними числами за допомоги циклу.
i = 0;
while (array_number.length < 100) {
    i++;
    if (i % 2 !== 0) {
        array_number.push(i);
    }
}
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
for (i = 0; i < 20; i++) {
    array_number.push(Math.random());
}
//     d. Заповнити масив 20ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (i = 0; i < 20; i++) {
    array_number.push(Math.floor(Math.random() * (732 - 8 + 1)) + 8);
}

console.log(array_number)
// 2. Вивести за допомогою console.log кожен третій елемент
for (i = 0; i < array_number.length; i = i + 3) {
    console.log(array_number[i]);
}
// 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.
for (i = 0; i < array_number.length; i = i + 3) {
    if (array_number[i] % 2 === 0) {
        console.log(array_number[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив
let newArray_number = []
for (i = 0; i < array_number.length; i = i + 3) {
    if (array_number[i] % 2 === 0) {
        newArray_number.push(array_number[i]);
    }
}
for (i = 0; i < array_number.length; i++) {

}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let arrayExample = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (i = 0; i < arrayExample.length; i++) {
    if (arrayExample[i + 1] % 2 === 0) {
        console.log(arrayExample[1])
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let sum = 0
let arrayArith = [100, 250, 50, 168, 120, 345, 188];
for (let elem of arrayArith) {
    sum += elem;
}
console.log(sum / arrayArith.length)


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let rArray = []
for (i = 0; i < 20; i++) {
    rArray.push(Math.random());
}
let new_rArray = []
for (let elem of rArray) {
    new_rArray.push(elem * 5);
}
console.log(new_rArray)


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let randomArray = [];
for (i = 0; i < 1000; i++) {
    let b = 0;
    if ((b = Math.random()) < 0.25) {
        randomArray.push(true)
    } else if (b < 0.5 && 0.25 < b) {
        randomArray.push(false)
    } else if (b > 0.5 && b < 0.75) {
        randomArray.push(Math.round(Math.random() * 10))
    } else if (b > 0.75) {
        randomArray.push('string')
    }

}
console.log(randomArray)
let onlyNumberFromRandomArray = [];
for (let elem of randomArray){
    if (typeof elem == 'number') {
        onlyNumberFromRandomArray.push(elem)
    }
}
console.log('What a time to be alive!')
console.log(onlyNumberFromRandomArray)


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = []
for (let i = 0; i < usersWithId.length; i++){
    for (let j = 0; j < citiesWithId.length; j++){
        if(citiesWithId[j].user_id === usersWithId[i].id){
            usersWithCities[i] = usersWithId[i];
            usersWithCities[i].address = citiesWithId[j];
        }
    }
}
console.log(usersWithCities)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let strange = [0,1,2,3,4,5,6,7,8,9,10];
for (let elem of strange){
    if (elem % 2 === 0){
        console.log(elem);
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let strange_empty = [];
for (let elem of strange){
    strange_empty.push(elem);
}


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc = [ 'a', 'b', 'c'];
let someString = '';
for (i=0; i < abc.length;i++){
    someString += abc[i];
}
console.log(someString);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
i = 0;
someString = '';
while (i<abc.length){
    someString += abc[i];
    i++;
}
console.log(someString);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
someString = '';
for (let elem of abc){
    someString += elem;
}
console.log(someString);
