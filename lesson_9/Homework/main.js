// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta')
block.innerText = 'HELLO THERE'
block.style.backgroundColor = "#7a5f5f";
block.style.color = "grey";
block.style.fontSize = '40px';
block.style.margin = '30px';
document.body.append(block)
document.body.append(block.cloneNode(true))


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let arr1 = ['Main', 'Products', 'About us', 'Contacts'];
let webBuilder001 = (menuEl,addTo) => {
    let newbar = document.getElementsByClassName(`${addTo}`)[0]
    for (let elem of menuEl) {
        console.log(elem)
        let arrElem = document.createElement('li')
        arrElem.classList.add(`${elem}`.replaceAll(' ', '-').toLowerCase())
        arrElem.innerText = `${elem}`
        newbar.append(arrElem)
    }
}
webBuilder001(arr1,'menu')

//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//Чисто від себе просто трохи покрутив стилі і так далі.
let courseAndDuration = document.createElement('div')
courseAndDuration.classList.add('courseList')
courseAndDuration.style.width = '200px';
courseAndDuration.style.display = 'flex'
courseAndDuration.style.flexDirection = 'column'
document.body.append(courseAndDuration)
for(let elem of coursesAndDurationArray){
    let elemOfCourseBlock = document.createElement('div')
    let spanElem =  document.createElement('span')
    elemOfCourseBlock.classList.add('course_elem')
    elemOfCourseBlock.style.display = 'flex';
    elemOfCourseBlock.style.justifyContent = 'space-between';
    elemOfCourseBlock.innerText = elem.title
    spanElem.innerText = elem.monthDuration
    spanElem.classList.add('courseTextDecoration')
    elemOfCourseBlock.append(spanElem)
    courseAndDuration.append(elemOfCourseBlock)
}



// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let courseAndDurationSecondOne = document.createElement('div')
document.body.append(courseAndDurationSecondOne)
for(let elem of coursesAndDurationArray){
    let item = document.createElement('div')
    item.classList.add('item')
    let heading = document.createElement('h1')
    let paragraph = document.createElement('p')
    heading.classList.add('heading')
    paragraph.classList.add('description')
    heading.innerText = elem.title
    paragraph.innerText = elem.monthDuration
    item.append(heading,paragraph)
    courseAndDurationSecondOne.append(item)
}