// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)


function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1111, 1, 1, 1, 1);
let user2 = new User(2123, 2, 2, 2, 2);
let user3 = new User(3123, 3, 3, 3, 3);
let user4 = new User(4123, 4, 4, 4, 4);
let user5 = new User(5123, 5, 5, 5, 5);
let user6 = new User(5436, 6, 6, 6, 6);
let user7 = new User(7248, 7, 7, 7, 7);
let user8 = new User(1001, 8, 8, 8, 8);
let user9 = new User(1259, 9, 9, 9, 9);
let user10 = new User(1231, 10, 10, 10, 10);

let userArr = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(userArr)


// - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
console.log(userArr.filter((user) => user.id % 2 === 0));


// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
userArr.sort((a, b) => a.id - b.id)
console.log(userArr)


// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

let client1 = new Client(1, 1, 1, 1, 1, ['1', '2', '3', '4', '5'])
let client2 = new Client(2, 1, 1, 1, 1, ['1', '2', '3'])
let client3 = new Client(3, 1, 1, 1, 1, ['1', '2', '3'])
let client4 = new Client(4, 1, 1, 1, 1, ['1', '2'])
let client5 = new Client(5, 1, 1, 1, 1, ['1', '2'])
let client6 = new Client(6, 1, 1, 1, 1, ['1', '2', '3'])
let client7 = new Client(7, 1, 1, 1, 1, ['1'])
let client8 = new Client(8, 1, 1, 1, 1, ['1'])
let client9 = new Client(9, 1, 1, 1, 1, ['1', '2', '3', '4', '5', '6', '7', '8'])
let client10 = new Client(10, 1, 1, 1, 1, ['1', '2', '3'])

// Створити пустий масив, наповнити його 10 об'єктами Client
let clientArr = [
    client1,
    client6,
    client8,
    client9,
    client1,
    client2,
    client10,
    client3,
    client5,
    client4,
    client7
]

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
clientArr.sort((a, b) => a.order.length - b.order.length)