// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами "а" і "б"
function rectangle_area(a, b) {
    return a * b;
}
console.log(rectangle_area(1,2))

// - створити функцію яка обчислює та повертає площу кола з радіусом "r"
function circle_area(r) {
    return 2 * Math.PI * (r ** 2);
}
console.log(circle_area(2))

// - створити функцію яка обчислює та повертає площу циліндру висотою "h", та радіусом "r"
function cylinder_area(h, r) {
    return 2 * Math.PI * (r ** 2) + h * (2 * r * Math.PI);
}
console.log(cylinder_area(2),4)

// - створити функцію яка приймає масив та виводить кожен його елемент
function iteration(lst) {
    for (let i = 0; i < lst.length; i++) {
        console.log(lst[i]);
    }
    return true
}

console.log(iteration([1,2,3,4,5,6,7,8,9]))

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphWtext(text) {
    document.write(`<h1>${text}</h1>>`)
}
paragraphWtext("Hello!")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function simpleList(text) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>>`);
    }
    document.write(`</ul>`)
}
simpleList("hey!")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function moreComplexList(text, li_count) {
    document.write(`<ul>`)
    for (let i = 0; i < li_count; i++) {
        document.write(`<li>${text}</li>>`);
    }
    document.write(`</ul>`)
}
moreComplexList("wordle", 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function evenMoreComplexList(lst) {
    document.write(`<ul>`)
    for (const elem of lst) {
        document.write(`<li>${elem}</li>>`);
    }
    document.write(`</ul>`)
}
evenMoreComplexList([1,2,3,4,true,false,'hey'])
// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.
function objectList(lst) {
    document.write(`<div>`)
    for (const lstElement of lst) {
        document.write(`<ul>`)
        document.write(`<li>${lstElement.id}</li>`)
        document.write(`<li>${lstElement.name}</li>`)
        document.write(`<li>${lstElement.age}</li>`)
        document.write(`</ul>`)
    }
    document.write(`</div>`)
}
objectList([{id:'hm',name:'anton',age:'23'}])