//

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let i = 0;
while (i < array.length) {
    console.log(array[i])
    i++;
}
// 2. перебрати його циклом for
for (let j = 0; j < array.length; j++) {
    const arrayElement = array[j];
    console.log(arrayElement);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < array.length) {
    if (i % 2 !== 0) {
        console.log(array[i])
    }
    i++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < array.length; j++) {
    if (j % 2 !== 0) {
        let arrayElement = array[j];
        console.log(arrayElement);
    }
}
// 5. перебрати циклом while та вивести числа тільки парні значення
i = 0;
while (i < array.length) {
    if (array[i] % 2 === 0) {
        console.log(array[i])
    }
    i++;
}
// 6. перебрати циклом for та вивести числа тільки парні значення
for (let j = 0; j < array.length; j++) {
    const arrayElement = array[j];
    if (arrayElement % 2 === 0) {
        console.log(arrayElement);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let j = 0; j < array.length; j++) {
    if (array[j] % 3 === 0) {
        array[j] = 'okten';
    }
}
// 8. вивести масив в зворотньому порядку.
for (let j = array.length - 1; j >= 0; j--) {
    const arrayElement = array[j];
    console.log(arrayElement)
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let array_b = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 9_1. перебрати його циклом while
i = array_b.length
while (i > 0) {
    i--;
    console.log(array_b[i])
}
// 9_2. перебрати його циклом for
for (let j = array_b.length - 1; j >= 0; j--) {
    const arrayElement = array_b[j];
    console.log(arrayElement);
}
// 9_3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = array_b.length;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(array_b[i])
    }
    i--;
}
// 9_4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = array_b.length - 1; j >= 0; j--) {
    if (j % 2 !== 0) {
        let arrayElement = array_b[j];
        console.log(arrayElement);
    }
}
// 9_5. перебрати циклом while та вивести числа тільки парні значення
i = array_b.length - 1;
while (i >= 0) {
    if (array_b[i] % 2 === 0) {
        console.log(array_b[i])
    }
    i--;
}
// 9_6. перебрати циклом for та вивести числа тільки парні значення
for (let j = array_b.length - 1; j >= 0; j--) {
    if (array_b% 2 === 0) {
        const arrayElement = array_b[j];
        console.log(arrayElement);
    }
}
// 9_7. замінити кожне число кратне 3 на слово "okten"
for (let j = array_b.length - 1; j >= 0; j--) {
    if (array_b[j] % 3 === 0) {
        array_b[j] = 'okten';
    }
}