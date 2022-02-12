// - Дано натуральне число n. Виведіть всі числа від 1 до n.
let toNumber = () => {
    let n = parseInt(prompt("Enter a number"))
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
toNumber()


// - Дано два цілик числа А і Б. Виведіть всі числа від А до В включно, в порядку зростання, якщо А < B, або в порядку спадання в протилежному випадку.
let toRangedNumber = () => {
    let a = parseInt(prompt("Enter first number"))
    let b = parseInt(prompt("Enter second number"))
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    } else {
        console.log('Whoops! Something went wrong!')
    }
}
toRangedNumber()

// - функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let listElSwitcher = (lst, num) => {
    if (num >= lst.length){
        console.log("Your number is out of list length!")
        return -1
    }
    let temp = lst[num];
    lst[num] = lst[num + 1];
    lst[num + 1] = temp;
}
let swArray = [9, 8, 0, 4];
listElSwitcher(swArray, 1)
console.log(swArray)


// - створення масиву для тестування
let zerosArray = [];
for (let i = 0; i < 100; i++) {
    zerosArray.push(Math.round(Math.random() * 10));
}
console.log(zerosArray)
//     -Створити функцію яка буде переносити елементи зі значенням 0 у кінець масиву. Зберігаючи при цьому порядок не нульових значень.
//     Довжина масиву від 2 до 100
//     EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

//     - Hehe. It was fun!
let almostBubbleSort = (lst) => {
    for (let i = 0; i < lst.length; i++) {
        for (let j = i + 1; j < lst.length - i; j++) {
            if (lst[j - 1] === 0) {
                let temp = lst[j];
                lst[j] = lst[j - 1];
                lst[j - 1] = temp;
            }
        }
    }
}
almostBubbleSort(zerosArray);
console.log(zerosArray)

