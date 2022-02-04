// --створити масив з:
//     - з 5 числових значень
let numberArray = [0,1,2,3,4];
// - з 5 стічкових значень
let stringArray = ['a','b','c','d','e'];
// - з 5 значень стрічкового, числового та булевого типу
let mixedArray = [0,false,1,true,'hello'];
// - та вивести його в консоль
console.log(numberArray)
console.log(stringArray)
console.log(mixedArray)

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyToFullArray = [];
emptyToFullArray[0] = 'A';
emptyToFullArray[1] = 'B';
emptyToFullArray[2] = 'C';
emptyToFullArray[3] = 'D';
emptyToFullArray[4] = 'E';
console.log(emptyToFullArray)


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++){
    document.write(`<div>some_text</div>` + '<br>')
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++){
    document.write(`<div>${i}some_text</div>` + '<br>')
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i<20){
    document.write(`<h1>SOMETHING IS COMMING</h1>`);
    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
i = 0;
while (i<20){
    document.write(`<h1>${i}.SOMETHING IS COMMING</h1>`);
    i++;
}



// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let newNumberArray = [0,1,2,3,4,5,6,7,8,9,10];
for (let number of newNumberArray){
    console.log(number);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let newStringArray = ['0','1','2','3','4','5','6','7','8','9','10'];
for (let number of newStringArray){
    console.log(number);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let booleanArray = [true,false,true,0,true,false,1,false,false,false]
for ( let elem of booleanArray){
    console.log(elem)
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let newMixedArray = [true,'hd',true,0,true,"hm",1,false,5,false]
for ( let elem of newMixedArray){
    if (typeof elem === 'boolean'){
        console.log(elem)
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for ( let elem of newMixedArray){
    if (typeof elem === 'number'){
        console.log(elem)
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for ( let elem of newMixedArray){
    if (typeof elem === 'string'){
        console.log(elem)
    }
}



// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let mars = [];
mars[0] = 1;
mars[1] = -1;
mars[2] = "one";
mars[3] = "two";
mars[4] = 999;
mars[5] = false;
mars[6] = 5;
mars[7] = true;
mars[8] = 13;
mars[9] = 117;
for (let elem of mars){
    console.log(elem)
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0;i<10;i++){
    console.log(i)
    document.write(`<div>${i}</div>`)
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0;i<100;i++){
    console.log(i)
    document.write(`<div>${i}</div>`)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0;i<100;i = i+2){
    console.log(i)
    document.write(`<div>${i}</div>`)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0;i<100;i++){
    if (i%2===0){
    console.log(i)
    document.write(`<h2>${i}</h2>`)
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0;i<100;i++){
    if (i%2 !== 0){
        console.log(i)
        document.write(`<h1>${i}</h1>`)
    }
}
