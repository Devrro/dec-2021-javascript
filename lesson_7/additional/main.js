//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//             }
//         },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//         }
// }

//I спосіб
class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }

}

class Address {
    constructor(street, suite, city, zipcode, lat, lng) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = new Geo(lat, lng)
    }
}

class Company {
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPrase = catchPhrase;
        this.bs = bs;
    }
}

class Worker {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, cname, catchPhrase, bs) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.address = new Address(street, suite, city, zipcode, lat, lng)
        this.company = new Company(cname, catchPhrase, bs)
    }
}

let worker = new Worker(1,
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',
    'Kulas Light',
    'Apt. 556',
    'Gwenborough',
    '92998-3874',
    '-37.3159',
    '81.1496',
    '1-770-736-8031 x56442',
    'hildegard.org',
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    'harness real-time e-markets')
console.log(worker)


//II спосіб
class Worker2 {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, cname, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {}
        this.address.street = street
        this.address.suite = suite
        this.address.city = city
        this.address.zipcode = zipcode
        this.address.geo = {}
        this.address.geo.lat = lat
        this.address.geo.lng = lng
        this.phone = phone
        this.website = website
        this.company = {}
        this.company.cname = cname
        this.company.catchPrase = catchPhrase
        this.company.bs = bs

    }
}

let worker2 = new Worker2(1,
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',
    'Kulas Light',
    'Apt. 556',
    'Gwenborough',
    '92998-3874',
    '-37.3159',
    '81.1496',
    '1-770-736-8031 x56442',
    'hildegard.org',
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    'harness real-time e-markets')

console.log(worker2)


// - Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// - назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


//Для простішого додавання атрибутів використав псевдомасив
class TagsDef {
    constructor(tagName, actionDescrb, ...attributeAnddesk) {
        this.tagName = tagName;
        this.actionDescrb = actionDescrb;
        this.attr = [];
        for (let i = 0; i < attributeAnddesk.length; i += 2) {
//          Попарно перепаковую масив в об'єкти використовуючи значення передані в змінну як значення ключів
            this.attr.push({titleOfAttr: `${attributeAnddesk[i]}`, actionOfAttr: `${attributeAnddesk[i + 1]}`})
        }
    }
}

let a = new TagsDef('a', "Тег <\a> является одним из важных элементов HTML и предназначен для создания " +
    "ссылок. В зависимости от присутствия атрибутов name или href тег " +
    "<\a> устанавливает ссылку или якорь. Якорем называется закладка внутри" +
    " страницы, которую можно указать в качестве цели ссылки. При использовании" +
    " ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.",
    'accesskey', 'Активация ссылки с помощью комбинации клавиш.',
    'coords', 'Устанавливает координаты активной области.',
    'download', 'Предлагает скачать указанный по ссылке файл.')


let div = new TagsDef('div', "Элемент <\div> является блочным элементом и предназначен для выделения " +
    "фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы " +
    "не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут" +
    " class или id с именем селектора.", 'align',
    'Задает выравнивание содержимого тега <\div>.', 'title',
    'Добавляет всплывающую подсказку к содержимому.')


let h1Text = 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка. Так, тег <\h1> представляет собой наиболее важный заголовок первого уровня, а тег <\h6> служит для обозначения заголовка шестого уровня и является наименее значительным. По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания, заголовки последующего уровня по размеру меньше. Теги <h1>,...,<h6> относятся к блочным элементам, они всегда начинаются с новой строки, а после них другие элементы отображаются на следующей строке. Кроме того, перед заголовком и после него добавляется пустое пространство.'
let spanText = 'Тег <\span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <\table>, <\p> или <\div>, с помощью тега <\span> можно выделить часть информации внутри других тегов и установить для нее свой стиль'
let inputText = 'Тег <\input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.'
let formText = 'Тег <\form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. '
let optionText = 'Тег <\option> определяет отдельные пункты списка, создаваемого с помощью контейнера <\select>.'
let selectText = 'Тег <\select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее'

let h1 = new TagsDef('h1', h1Text,
    'align\n', 'Определяет выравнивание заголовка.')

let span = new TagsDef('span', spanText,
    'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.',
    'dir', 'Задает направление и отображение текста — слева направо или справа налево.',
    'hidden', 'Скрывает содержимое элемента от просмотра.'
)
let input = new TagsDef('input', inputText,
    'align', 'Определяет выравнивание изображения.',
    'alt', 'Альтернативный текст для кнопки с изображением.',
    'autocomplete', 'Включает или отключает автозаполнение.'
)

let form = new TagsDef('form', formText, 'accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.',
    'action', 'Адрес программы или документа, который обрабатывает данные формы.',
    'enctype', 'Способ кодирования данных формы.'
)

let option = new TagsDef('option',optionText,'disabled','Заблокировать для доступа элемент списка.',
    'label','Указание метки пункта списка.',
    'selected','Заранее устанавливает определенный пункт списка выделенным.')

let select = new TagsDef('select',selectText,'autofocus','Устанавливает, что список получает фокус после загрузки страницы.',
    'multiple','Позволяет одновременно выбирать сразу несколько элементов списка.   ',
    'required','Список обязателен для выбора перед отправкой формы.')

console.log(a)
console.log(div)
console.log(h1)
console.log(span)
console.log(input)
console.log(form)
console.log(option)
