// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arWords = ['hello world', 'lorem ipsum', 'javascript is cool']
arWords.map(x => console.log(x))


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
arWords = arWords.map(x => x.toUpperCase())
arWords.map(x => console.log(x))


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
arWords = arWords.map(x => x.toLowerCase())
arWords.map(x => console.log(x))


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyString = ' dirty string   ';
dirtyString = dirtyString.trim()
console.log(dirtyString)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Кожен мисливець бажає знати';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str1 = 'Кожен мисливець бажає знати';
let writeLn = (str) => str.split(' ')
str1 = writeLn(str1)
console.log(str1)


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let deleteWords = (str, n) => {
    str = str.split(' ');
    return str.filter(obj => obj.length === n)
}
console.log(deleteWords('some new village', 4))


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str2 = "HTML JavaScript PHP";
let insertDash = (str) => {
    return str.toUpperCase().split(' ').join('-')
}
console.log(insertDash(str2))


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let capitalizeStr = (str) => {return str.replace(`${str[0]}`, `${str[0].toUpperCase()}`);}
console.log(capitalizeStr('hello there dude'))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let capitalize = (str) => {
    return str.split(" ").map(elem => capitalizeStr(elem)).join(' ')
}
console.log(capitalize('I wonder if it works'))