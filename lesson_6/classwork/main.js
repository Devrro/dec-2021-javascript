// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let goodName = (str, character) => {
    return str.replaceAll(character, ' ')
}
console.log(goodName('Harry..Potter', '.'))


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomList = () => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr.push(Math.round(Math.random() * 100))
    }
    return arr
}
let rList = randomList();
console.log(rList);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
rList.sort(function (a, b) {
    return a - b
});
console.log(rList);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати його за допомоги filter, залишивши тільки парні числа
rList = rList.filter(elem => elem % 2 === 0);
console.log(rList);

let newList = randomList();
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції). за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
newList = newList.map(elem => elem.toString());
console.log(newList);

// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let newList2 = randomList();
let sortingNumber = (list,sortType) => {
    if(sortType === 'ascending'){
        list.sort(function (a, b) {
            return a - b
        });
    } else if( sortType==='descending'){
        list.sort(function (a, b) {
            return b - a
        });
    } else {
        return -1
    }
}
console.log(newList2)
sortingNumber(newList2, 'ascending')
console.log(newList2)
sortingNumber(newList2, 'descending')
console.log(newList2)

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
let sortedCourses = coursesAndDurationArray.sort((a,b) => a.monthDuration-b.monthDuration)
console.log(sortedCourses)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
sortedCourses = sortedCourses.filter(a => a.monthDuration>5)
console.log(sortedCourses)
