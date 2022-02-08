// - створити функцію, яка якщо приймає один аргумент, просто виводить його, якщо два аргументи - складає або конкатенує їх між собою.
function bobDoSomething() {
    if (arguments.length === 1) {
        console.log(arguments[0])
    } else if (arguments.length === 2) {
        console.log(arguments[0] + arguments[1]);
    }
}
bobDoSomething(1,2)

// - створити функцію яка приймає два масиви та складає значення елементів з однаковими індексами та повертає новий результатуючий масив.
//
//
// EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]
//
function arrayAdd(lst1, lst2) {
    if (lst1.length === lst2.length) {
        for (let i = 0; i < lst1.length; i++) {
            lst1[i] += lst2[i];
        }
        return lst1
    } else {
        console.log('Something is wrong!')
    }

}
console.log(arrayAdd([1,2,3,4,5],[1,2,3,4,5]))

// - Створити функцію яка приймає масив будь яких об'єктів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
function arrayOfKeys(array) {
    let keys = []
    for (let elem of array) {
        for (let elemKeys of (Object.keys(elem))) {
            keys.push(elemKeys)
        }
    }
    return keys
}
console.log(arrayOfKeys([{name: 'Dima', age: 13}, {model: 'Camry'}] ))

//- Створити функцію яка приймає масив будь-яких об'єктів, та повертає масив значень всіх обєктів
//EXAMPLE:
//[{name: 'Dima', age: 13}, {model: 'Camry'}] ===> [ Dima, 13, Camry ]
//Окей, цей було складнувато прописати на ходу
function arrayOfVars(array) {
    let key_groups = [];
    let vars = [];

    for (let elem of array) {
        key_groups.push(Object.keys(elem))
    }
    for (let i = 0; i < array.length; i++) {
        for (let key of key_groups[i]){
            vars.push(array[i][`${key}`])
        }
    }
    return vars
}

let som = arrayOfVars([{name: 'Dima', age: 13}, {model: 'Camry'}])
console.log(som)