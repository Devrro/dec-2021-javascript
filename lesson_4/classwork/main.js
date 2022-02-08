// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function theSmallest(a, b, c) {
    let lst = [a, b, c]
    let theSmallestNumber = lst[0];
    for (const numberElement of lst) {
        if (numberElement < theSmallestNumber) {
            theSmallestNumber = numberElement;
        }
    }
    console.log(theSmallestNumber)
}

theSmallest(3, 4, -5)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function theBiggest(a, b, c) {
    let lst = [a, b, c]
    let theBiggestNumber = lst[0];
    for (const numberElement of lst) {
        if (numberElement > theBiggestNumber) {
            theBiggestNumber = numberElement;
        }
    }
    console.log(theBiggestNumber)
}

theBiggest(3, 4, 5)

// - створити функцію яка повертає найбільше число з масиву
function returnTheBiggest(lst) {
    let theBiggestNumber = lst[0];
    for (const numberElement of lst) {
        if (numberElement > theBiggestNumber) {
            theBiggestNumber = numberElement;
        }
    }
    return theBiggestNumber
}

console.log(returnTheBiggest([1, 2, 3, 4, 5, 6, 123, 2]))

// - створити функцію яка повертає найменьше число з масиву
function returnTheSmallest(lst) {
    let theSmallestNumber = lst[0];
    for (const numberElement of lst) {
        if (numberElement < theSmallestNumber) {
            theSmallestNumber = numberElement;
        }
    }
    return theSmallestNumber
}

console.log(returnTheSmallest([1, 2, 3, -54, 5, 6, 123, 2]))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumOfAll(lst) {
    let theSum = 0;
    for (const numberElement of lst) {
        theSum += numberElement
    }
    return theSum
}

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticMean(lst) {
    sum = sumOfAll(lst);
    return sum / lst.length
}

console.log(arithmeticMean([1, 2, 3, 4, 5, 6, 1]))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function strangeReturn(...lst) {
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
function randomArray(count) {
    let lst = [];
    for (let i = 0; i < count; i++) {
        lst.push(Math.random());
    }
    return lst
}

ran = randomArray(123)
console.log(ran)

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function randomArrayRanged(count) {
    let lst = [];
    for (let i = 0; i < count; i++) {
        lst.push(Math.random() * 100);
    }
    console.log(lst)
}

randomArrayRanged(100)


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function randomArrayLimited(count, limit) {
    let lst = [];
    for (let i = 0; i < count; i++) {
        lst.push(Math.random() * (limit + 1));
    }
    console.log(lst)
    return lst
}
console.log(randomArrayLimited(100, 999));

// - Функція приймає масив та робить з нього новий масив у зворотньому порядку. [1,2,3] - [3,2,1]
function lstRevers(lst) {
    let reversed = []
    for (let i = lst.length - 1; i >= 0; i--) {
        reversed.push(lst[i])
    }
    return reversed
}
smth = lstRevers([1,2,3,4,5,6,7,8,9,10])
console.log(smth)