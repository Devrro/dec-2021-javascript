// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код,  котрий :

// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content')
console.log(content.innerHTML);


// -- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules')
console.log(rules.innerHTML);

// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerHTML = 'Hello there'
console.log(content.innerHTML);

// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerHTML = 'My name is Eren Yeager!'
console.log(rules.innerHTML);

// -- змініть кожному елементу колір фону на червоний
let entireContent = document.body.children
for (const elem of entireContent){
    elem.style.backgroundColor='red'
}

// -- змініть кожному елементу колір тексту на синій
for (const elem of entireContent){
    elem.style.color='blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rules.classList)

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fc_rules = document.getElementsByClassName('fc_rules')
for(let elem of fc_rules){
    elem.style.color = '#730000';
}