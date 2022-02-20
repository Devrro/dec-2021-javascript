//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let mainGroup = document.getElementById('main_header')
mainGroup.className = 'groupMainHeader'
console.log(mainGroup);


// b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul')
console.log(ul)
ul[0].style.width = '400px';

// c) робить ширину всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList')
for (const elem of linkList) {
    elem.style.width = '50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2text = document.getElementsByClassName('listElement2')
console.log(listElement2text);


// e) отримує всі елементи li та змінює ім колір фону на сірий
let li = document.getElementsByTagName('li')
for (const elem of li) {
    elem.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let aAnchor = document.getElementsByTagName('a');
for (const elem of aAnchor) {
    elem.className = 'anchor'
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let aText3 = document.getElementsByTagName('a')
for (const elem of aText3) {
    if (elem.innerText === 'link3') {
        elem.style.fontSize = '40px'
    }
}


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aElementReplace = document.getElementsByTagName('a')
for (const elem of aElementReplace) {
    elem.className = 'element_' + elem.innerText
}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subColorChanger1 = document.getElementsByClassName('sub-header')
for (const elem of subColorChanger1) {
    elem.style.backgroundColor = prompt()


// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()
}
let subColorChanger2 = document.getElementsByClassName('sub-header')
for (const elem of subColorChanger1) {
    if (elem.innerText === 'content 2 segment') {
        elem.style.backgroundColor = prompt()
    }
}

// k) отримує елемент з класом content_1 та заміняє в ньому тест на довільний. Текст отримати з prompt()

let content1 = document.getElementsByClassName('content_1')
content1[0].innerText = prompt()


// l) отримати елементи p та змінити їм padding на 20px

let p = document.getElementsByTagName('p')
for (const elem of p){
    elem.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2')
for(const elem of text2){
    elem.innerText = 'dec-2021'
}
