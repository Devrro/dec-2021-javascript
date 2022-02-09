//
// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let theSmallest = (a, b, c) => {
    let lst = [a, b, c]
    let theSmallestNumber = lst[0];
    for (const numberElement of lst) {
        if (numberElement < theSmallestNumber) {
            theSmallestNumber = numberElement;
        }
    }
    console.log(theSmallestNumber)
}
theSmallest(1,2,3)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let theBiggest = (a, b, c) => {
    let lst = [a, b, c]
    let theBiggestNumber = lst[0];
    for (const numberElement of lst) {
        if (numberElement > theBiggestNumber) {
            theBiggestNumber = numberElement;
        }
    }
    console.log(theBiggestNumber)
}
theBiggest(999, 2, 5)
// - створити функцію яка повертає найбільше число з масиву
let returnTheBiggest = (lst) => {
    let theBiggestNumber = lst[0];
    for (const numberElement of lst) {
        if (numberElement > theBiggestNumber) {
            theBiggestNumber = numberElement;
        }
    }
    return theBiggestNumber
}

console.log(returnTheBiggest([88, 33, 1215, 325, 1477, 241, 1515, 22]))
// - створити функцію яка повертає найменьше число з масиву
returnTheSmallest = (lst) => {
    let theSmallestNumber = lst[0];
    for (const numberElement of lst) {
        if (numberElement < theSmallestNumber) {
            theSmallestNumber = numberElement;
        }
    }
    return theSmallestNumber
}

console.log(returnTheSmallest([123, 123, 5435, -4564564, 123, 35, 22, 75]))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
sumOfAll = (lst) => {
    let theSum = 0;
    for (const numberElement of lst) {
        theSum += numberElement
    }
    return theSum
}
let sSum = sumOfAll([1,2,151,23462,13])
console.log(sSum)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
arithmeticMean = (lst) => {
    sum = sumOfAll(lst);
    return sum / lst.length
}

console.log(arithmeticMean([124, 2561, 62323, 24, 4, 15, 7]))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
 let strangeReturn = (...lst) => {
    let theSmallestNumber = lst[0];
    for (const numberElement of lst) {
        if (numberElement < theSmallestNumber) {
            theSmallestNumber = numberElement;
        }
    }
    let theBiggestNumber = lst[0];
    for (const numberElement of lst) {
        if (numberElement > theBiggestNumber) {
            theBiggestNumber = numberElement;
        }
    }
    console.log(theBiggestNumber)
    return theSmallestNumber
}

let number = strangeReturn(1, 2, 3, 4, -123, 6, 7, 7, 8, 8);
// - створити функцію яка заповнює масив рандомними числами
let randomArray = (count) => {
    let lst = [];
    for (let i = 0; i < count; i++) {
        lst.push(Math.random());
    }
    return lst
}
console.log(randomArray(25));
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randomArrayRanged = (count) => {
    let lst = [];
    for (let i = 0; i < count; i++) {
        lst.push(Math.round(Math.random() * 100));
    }
    console.log(lst)
}
randomArrayRanged(20);
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomArrayLimited = (count, limit) => {
    let lst = [];
    for (let i = 0; i < count; i++) {
        lst.push(Math.random() * (limit + 1));
    }
    console.log(lst)
    return lst
}
console.log(randomArrayLimited(100, 999));

// - Функція приймає масив та робить з нього новий масив у зворотньому порядку. [1,2,3] -> [3, 2, 1].
let lstRevers = (lst) => {
    let reversed = []
    for (let i = lst.length - 1; i >= 0; i--) {
        reversed.push(lst[i])
    }
    return reversed
}
let smthnew = lstRevers([32,14,12,6,124,12,66,11,22,33])
console.log(smthnew)