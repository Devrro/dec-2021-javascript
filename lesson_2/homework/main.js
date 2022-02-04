// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
// let a = 1;
// let b = 1;
// let result = a + b < 4 ? "Мало" : "Багато";
// alert(result)


//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).


let time = 30;
if (time <= 15) {
    alert('Time is in the first part!');
} else if (time <= 30 && time > 15) {
    alert('Time is in the second part');
} else if (time <= 45 && time > 30) {
    alert('Time is in the third part');
} else if (time <= 59 && time > 45) {
    alert('Time is in the fourth part');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 25;
if (day < 0 || day > 31) {
    alert('There is no such day at all!');
}
if (day <= 10) {
    alert('It`s the first decade of month');
} else if (day <= 20 && day > 10) {
    alert('It`s the second decade of month');
} else if (day <= 31 && day > 20) {
    alert('It`s the third decade of month');
}


//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = parseInt(prompt("Чому дорівнює а?"));
if (a !== 0) {
    console.log("Вірно")
} else {
    console.log("Невірно")
}

//- У нас є змінна test, якщо не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = true;
//I variant
if (test !== true) {
    alert("Вірно")
} else {
    alert("Неправильно")
}
//II variant
alert(test ?  "Неправильно" : "Вірно")


//- Скласти розклад на тиждень за допомогою switch. Користувач вводить порядковий номер дня тижня і на екрані зображається інфа що заплановано на цей день.
let day_2 = 5;
switch (day_2) {
    case 1:
        console.log('Вправи на груди');
        break;
    case 2:
        console.log('Відпочинок');
        break;
    case 3:
        console.log('Плавання');
        break;
    case 4:
        console.log('Вправи на ноги');
        break;
    case 5:
        console.log('Відпочинок');
        break;
    case 6:
        console.log('Біг');
        break;
    case 7:
        console.log('Вправи на всі групи м\'язів ');
        break;
}

//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = prompt("Введіть рік, щоб дізнатись чи він високосний")
console.log(year % 4 === 0 ? "Цей рік високосний" : "Ні, цей рік не високосний")

//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let answer = prompt('Яка «офіційна» назва Javascript?')
if (answer==='ECMAScript'){
    alert("Правильно!")
} else {
    alert("Не знаєте? ECMAScript!")
}
