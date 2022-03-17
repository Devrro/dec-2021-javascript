// - створити 2 форми по 2 інпути в кожній. Створити кнопку при натисканні на яку зчитується та виводиться на консоль інформація з цих двох форм.
// Кнопка повинна лежати за межами форм (Щоб уникнути перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже, дайте формі та інпутам всі необхідні атрибути.
let mainFormBlock = document.createElement('div')
mainFormBlock.classList.add('main_form')

let divFromBlock1 = document.createElement('div')
let title1 = document.createElement('h2')
title1.innerText = 'FORM 1'
divFromBlock1.append(title1)

let divFromBlock2 = document.createElement('div')
let title2 = document.createElement('h2')
title2.innerText = 'FORM 2'
divFromBlock2.append(title2)

mainFormBlock.append(divFromBlock1, divFromBlock2)
document.body.append(mainFormBlock)

let form1 = document.createElement('form')
let form2 = document.createElement('form')
form1.setAttribute('name', 'form1')
form2.setAttribute('name', 'form2')
divFromBlock1.append(form1)
divFromBlock2.append(form2)

let form1_input1 = document.createElement('input')
let form1_input2 = document.createElement('input')
let form2_input1 = document.createElement('input')
let form2_input2 = document.createElement('input')
form1_input1.setAttribute('name', 'input1')
form1_input2.setAttribute('name', 'input2')
form2_input1.setAttribute('name', 'input1')
form2_input2.setAttribute('name', 'input2')

form1.append(form1_input1, form1_input2)
form2.append(form2_input1, form2_input2)


let btn1 = document.createElement('button')
btn1.innerText = 'BUTTON'
mainFormBlock.append(btn1)


btn1.addEventListener('click', function () {
    console.log(document.forms.form1.input1.value)
    console.log(document.forms.form1.input2.value)
    console.log(document.forms.form2.input1.value)
    console.log(document.forms.form2.input2.value)
})


// - Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість клітинок, третій вміст клітинок.
//   При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
let blockWithTable = document.createElement('div')
blockWithTable.classList.add('block_table')
let table_rows = document.createElement('input')
let table_columns = document.createElement('input')
let tableInnerValue = document.createElement('input')
let btnTable = document.createElement('button')
btnTable.innerText = 'PRESS ME'
blockWithTable.append(table_rows, table_columns, tableInnerValue, btnTable)
document.body.append(blockWithTable)
btnTable.addEventListener('click', function () {
    let tr = table_rows.value;
    let tc = table_columns.value;
    let valueInnerText = tableInnerValue.value;


    let generateTable = (tr, tc, content) => {
        let table = document.createElement("table");
        table.classList.add('table')
        let tableBlock = document.createElement('div');
        table.style.border = '2px solid #grey';
        tableBlock.append(table);

        for (let i = 0; i < tr; i++) {
            let row = document.createElement('tr');
            for (let j = 0; j < tc; j++) {
                let cell = document.createElement('td');
                cell.style.border = '1px solid black';
                cell.innerText = content;
                row.append(cell);
            }
            table.append(row);
        }
        blockWithTable.append(tableBlock);
    }
    generateTable(tr, tc, valueInnerText)

})

let nWords = ["сука", "блять", "блядь", "єбати", "йобаний", "хуй", "мудак", "дебіл", "єбаний", "підар", "підор", "підарас", "бляцтво", "єбало",]

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let nWordChecker = document.createElement('div')
nWordChecker.classList.add('nWordChecker')
document.body.append(nWordChecker)

let nWordForm = document.createElement('form')
let nWordInput = document.createElement('input')
nWordInput.classList.add('nWordInput')

nWordInput.setAttribute('name','Form_nWordInput')
let btnNWord = document.createElement('button')
btnNWord.innerText = 'BUTTON'
nWordChecker.append(nWordForm)
nWordForm.append(nWordInput,btnNWord)

btnNWord.addEventListener('click', function (){
    for(const nWord of nWords){
        if(nWordInput.value.toLocaleLowerCase() === nWord){
            alert('Nope!Try use different word boy')
        }
    }
})


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let nWordChecker2 = document.createElement('div')
nWordChecker2.classList.add('nWordChecker')
document.body.append(nWordChecker2)

let nWordFormSecond = document.createElement('form')
let nWordInputSecond = document.createElement('input')
nWordInputSecond.classList.add('nWordInput')
nWordInputSecond.setAttribute('name', 'Form_nWordInput')
let btnNWord2 = document.createElement('button')
btnNWord2.innerText = 'BUTTON'
nWordChecker2.append(nWordFormSecond)
nWordFormSecond.append(nWordInputSecond, btnNWord2)

btnNWord2.addEventListener('click', function () {
    for (const nWord of nWords) {
        for (const normalWord of nWordInputSecond.value.toLocaleLowerCase().split(' '))
            if (normalWord === nWord) {
                alert('Nope!Try use different word boy')
            }
    }
})
