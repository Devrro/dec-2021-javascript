// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let btnText = document.getElementById('text')
let btn = document.getElementById('text_button')
btn.onclick = function () {
    btnText.style.display = 'none'
}
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let miracle = document.getElementById('miracle')
miracle.onclick = function () {
    miracle.style.display = 'none'
}


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

let form = document.forms[0]

form.onsubmit = function (element) {
    let age = document.getElementById('age').value;

}
document.getElementById('send1').onclick = function () {
    let age = document.getElementById('form1').value;
    if (age < 18) {
        alert('You are too young!')
    } else if (age >= 18) {
        alert('Everything is fine')
    } else {
        alert('Something went wrong!')
    }
}


// - Создайте меню, которое раскрывается/сворачивается при клике


document.getElementById('menu').onclick = function () {
    document.getElementById('menu_charts').classList.toggle('dispNone')
}


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let commentsArr = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
]


let commentsSection = document.getElementsByClassName('comments')[0]

for (const elem of commentsArr) {
    let comment = document.createElement('div')
    comment.classList.add('comment')
    let titleToggle = document.createElement('div')
    titleToggle.classList.add('title_toggle')
    let title = document.createElement('h3')
    title.classList.add('title')
    let paragraph = document.createElement('p')
    paragraph.classList.add('paragraph')
    let btn = document.createElement('button')
    btn.classList.add('btn')
    titleToggle.append(title,btn)
    comment.append(titleToggle,paragraph)


    title.innerText = elem.title
    paragraph.innerText = elem.body
    btn.onclick = function () {
        paragraph.classList.toggle('hidden')
    }
    commentsSection.append(comment)
}


