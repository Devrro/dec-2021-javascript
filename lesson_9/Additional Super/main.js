//
let users = [
    {
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            city: 'Lviv',
            country: 'Ukraine',
            street: 'Shevchenko',
            houseNumber: 1
        }
    }, {
        name: 'petya',
        age: 30,
        status: true,
        address: {
            city: 'New York',
            country: 'USA',
            street: 'East str',
            houseNumber: 21
        }
    }, {
        name: 'kolya',
        age: 29,
        status: true,
        address: {
            city: 'Budapest',
            country: 'Hungary',
            street: 'Kuraku',
            houseNumber: 78
        }
    }, {
        name: 'olya',
        age: 28,
        status: false,
        address: {
            city: 'Prague',
            country: 'Czech',
            street: 'Paster',
            houseNumber: 56
        }
    }, {
        name: 'max',
        age: 30,
        status: true,
        address: {
            city: 'Istanbul',
            country: 'Turkey',
            street: 'Mikar',
            houseNumber: 39
        }
    }, {
        name: 'anya',
        age: 31,
        status: false,
        address: {
            city: 'Rio',
            country: 'Brasil',
            street: 'Ronaldi',
            houseNumber: 5
        }
    }, {
        name: 'oleg',
        age: 28,
        status: false,
        address: {
            city: 'Montreal',
            country: 'Canada',
            street: 'Acusto',
            houseNumber: 90
        }
    }, {
        name: 'andrey',
        age: 29,
        status: true,
        address: {
            city: 'Quebeck',
            country: 'Canada',
            street: 'Binaro',
            houseNumber: 33
        }
    }, {
        name: 'masha',
        age: 30,
        status: true,
        address: {
            city: 'Moscow',
            country: 'Russia',
            street: 'Gogolia',
            houseNumber: 1
        }
    }, {
        name: 'olya',
        age: 31,
        status: false,
        address: {
            city: 'Portland',
            country: 'USA',
            street: 'Forest str',
            houseNumber: 4
        }
    }, {
        name: 'max',
        age: 31,
        status: true,
        address: {
            city: 'Cairo',
            country: 'Egypt',
            street: 'Seashore',
            houseNumber: 45
        }
    }
];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let addressCatch = []
let addressTransfer = (startPoint) => {
    let packed_address = [];
    for (let elem in startPoint) {
        if (elem === 'address') {
            let subElem = startPoint[`${elem}`]
            for (let elem2 in subElem) {
                packed_address.push(subElem[`${elem2}`])
            }
        }
    }
    addressCatch.push(packed_address)
}

for (const elem1 of users) {
    addressTransfer(elem1)
}
console.log(addressCatch);

// - За допомоги циклу проітерувати масив users, записати кожного юзера в свій блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
let part_builder = (key, variable, appendTo) => {
    let block_char = document.createElement('div');
    let variableEq = document.createElement('p');
    block_char.append(variableEq)
    variableEq.innerText = key + ' : ' + variable
    appendTo.append(block_char)
}

let userCard1_container = document.createElement('div')
userCard1_container.classList.add('userCard1_Container')
document.body.append(userCard1_container)
for (let elem of users) {
    let userCard1 = document.createElement('div')
    userCard1.classList.add('userCard1')
    for (let part in elem) {
        if (typeof elem[`${part}`] === `object`) {
            let subElems = elem[`${part}`]
            for (let subElem in subElems) {
                part_builder(subElem, subElems[`${subElem}`], userCard1)
            }
        } else {
            part_builder(part, elem[`${part}`], userCard1)
        }
    }
    userCard1_container.append(userCard1)
}


// - За допомоги циклу проітерувати масив users, записати кожного юзера в свій блок за допомоги document.createElement, розділивши всі властивості по своїм блокам, блок з адресою зробити окремим блоком, з блоками для кожної властивості
let usersContainer3 = document.createElement('div')
usersContainer3.classList.add(`user_container`)
document.body.append(usersContainer3)
let userCreation = (users, appendTo) => {
    for (let user of users) {
        let userCard = document.createElement(`div`)
        userCard.classList.add('user_card')
        for (let info in user) {
            let userInfoBlock = document.createElement('div')
            userInfoBlock.classList.add('user_info_block')
            if (info === 'address') {
                let addressData = user[`${info}`]
                let addressBlock = document.createElement('div')
                addressBlock.classList.add('addressBlock')
                userCard.append(addressBlock)
                for (let address in addressData) {
                    part_builder(address, addressData[`${address}`], addressBlock)
                }
            } else {
                part_builder(info, user[`${info}`], userInfoBlock)
                userInfoBlock.classList.add(info)
                userCard.append(userInfoBlock)

            }
        }
        appendTo.append(userCard)
    }
}

userCreation(users, usersContainer3)


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let rules = (appendTo) => {
    let content = document.getElementById(appendTo)
    let fightClubRules = document.getElementsByClassName('rules')
    let listOfRules = document.createElement('ul')
    content.append(listOfRules)
    for (let i = 0; i < fightClubRules.length; i++) {
        const fightClubRule = fightClubRules[i];
        let rules_li = document.createElement('li')
        rules_li.innerText = fightClubRule.children[0].innerText
        listOfRules.append(rules_li)
    }

}
rules('content')

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];