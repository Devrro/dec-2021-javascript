// - Напишіть функцію cutString(str, n), яка ділить рядок на підрядки, що складається з n символів.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (word, count) => {
    word = word.split('')
    let wordLength = word.length
    let total = [];
    while (wordLength - 1) {
        let wordTemp = '';
        if (wordLength > count) {
            for (let i = 0; i < count; i++) {
                wordLength--;
                wordTemp += word.shift()
            }
        } else {
            total.push(word.join(''))
            break;
        }
        total.push(wordTemp)
    }
    return total
}
console.log(cutString('abcabcabcabcabc', 6))

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// - Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
let gmails = [
    'someemail@gmail.com',
    'someeMAIL@gmail.com',
    'someeMAIL@i.ua',
    'some.email@gmail.com'
]

let characterCount = (word) => {
    let count = {};
    word.split('').map(s => count[s] ? count[s]++ : count[s] = 1);
    return count;
}
let validateMail = (mail) => {
    mail = mail.toLowerCase()
    let flag = true
    let countOfChars = characterCount(mail)
    if (countOfChars['@'] !== 1 || countOfChars['.'] !== 1) {
        flag = false
    }
    while (flag) {
        let split = mail.split('@')
        if (split[0].includes('.')) {
            flag = false
        }
        let split2 = split[1].split('.')
        if (split2[0].length < 2) {
            flag = false
        } else {
            return true
        }
    }
    return false
}
console.log(gmails.map(x => validateMail(x)))

// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадному порядку за кількістю елементів в полі modules
let sortDifArray = (arr) => arr.sort((a, b) => b.modules.length - a.modules.length)
console.log(sortDifArray(coursesArray))


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let symbolCount = (str, symb) => {
    let count = {};
    str.split('').map(s => count[s] ? count[s]++ : count[s] = 1);
    return count[symb];
}
console.log(symbolCount("Астрономия это наука о небесных объектах", "о"))


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutSentence = (str, count) => {
    str = str.split(' ');
    str.splice(count);
    return str.join(" ")
}
console.log(cutSentence("Сила тяжести приложена к центру масс тела", 5))