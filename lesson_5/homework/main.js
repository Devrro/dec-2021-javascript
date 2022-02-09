// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка обчислює та повертає площу прямокутника висотою
let squareArea = (a,b) => a * b;
console.log(squareArea(1,2));


// - створити функцію яка обчислює та повертає площу кола
let circleArea = (r) => 2 * Math.PI * Math.pow(r,2);
console.log(circleArea(8));


// - створити функцію яка обчислює та повертає площу циліндру
let cylinderArea = (r,h) => 2 * Math.PI * (r ** 2) + h * (2 * r * Math.PI);
console.log(cylinderArea(8,5));


// - створити функцію яка приймає масив та виводить кожен його елемент
let logArray = (lst) => {for(let elem of lst){console.log(elem)}};
logArray([1,2,3,4,5,6,7,8,9]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let textParagraph = (text) => {document.write(`<h1>${text}</h1>`)};
textParagraph('Hello there, Stranger!')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let threeOfLi = (text) => {
    document.write(`<ul>`)
    for (let i =0; i < 3; i++){document.write(`<li>${text}</li>`)}
    document.write(`</ul>`)
}
threeOfLi("Hello again C:")


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let anyOfLi = (text,count) => {
    document.write(`<ul>`)
    for (let i = 0; i < count; i++){document.write(`<li>${text}</li>`)}
    document.write(`</ul>`)
}
anyOfLi('Hello once more!', 10)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listOfAnyElements = (lst) => {
    document.write(`<ul>`)
    for (let elem of lst){document.write(`<li>${elem}</li>`)}
    document.write(`</ul>`)
}
listOfAnyElements([true,false,true,false,1,2,3,1,true,'he'])


// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.
let listOfSomeObjects = (lst) => {
    document.write(`<ul>`)
    for (let elem of lst){
        document.write(`<li> ID - ${elem.id}</li>`);
        document.write(`<li> Name - ${elem.name}</li>`);
        document.write(`<li> Age - ${elem.age}</li>`);}
    document.write(`</ul>`)
}
listOfSomeObjects([{id:1,name:"serhii",age:13,},{id:2,name:"michael",age:15,},{id:3,name:"vlad",age:25,}])

