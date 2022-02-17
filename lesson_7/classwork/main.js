// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car(model, manufacturer, relYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.relYear = relYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {
        for (let info in this) {
            if (typeof this[info] !== 'function') {
                console.log(`${info} - ${this[info]}`)
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (year) {
        this.relYear = year;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }

}

let car1 = new Car('gr12', 'toyota', 2000, 120, 4)
car1.drive()
car1.info()
car1.increaseMaxSpeed(20)
car1.changeYear(2010)
car1.addDriver('Maximilian')
car1.info()


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// - drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// - info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// - increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// - changeYear (newValue) - змінює рік випуску на значення newValue
// - addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class nCar {
    constructor(model, manufacturer, relYear, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.relYear = relYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info() {
        for (let info in this) {
            if (typeof this[info] !== 'function') {
                console.log(`${info} - ${this[info]}`)
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(year) {
        this.relYear = year;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car2 = new nCar('GTX9', 'Mazda', 2020, 180, 8)
car2.drive()
car2.info()
car2.increaseMaxSpeed(20)
car2.changeYear(2010)
car2.addDriver('Maximilian')
car2.info()


// -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cindarella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
console.log(Cindarella)
let cindarella1 = new Cindarella('Annie', 20, 45)
let cindarella8 = new Cindarella('Alexa', 18, 34)
let cindarella2 = new Cindarella('Marci', 17, 33)
let cindarella4 = new Cindarella('Olga', 14, 38)
let cindarella10 = new Cindarella('Mikassa', 19, 37)
let cindarella3 = new Cindarella('Ksenya', 45, 39)
let cindarella6 = new Cindarella('Lana', 30, 36)
let cindarella5 = new Cindarella('Sasha', 25, 32)
let cindarella9 = new Cindarella('Julia', 13, 29)
let cindarella7 = new Cindarella('Mary', 16, 35)

let cindarellas = [cindarella3, cindarella2, cindarella1, cindarella8, cindarella4, cindarella9, cindarella10, cindarella7, cindarella5, cindarella6]


// - Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let prince1 = new Prince('Alejandro', 18, 29)


// - За допомоги циклу знайти яка попелюшка повинна бути з принцом.
const newCouple = (array, prince) => {
    for (const elem of array) {
        if (elem.size === prince.size) {
            console.log(`The shoe is ${elem.name}'s. ${prince.name} and ${elem.name} will have happily after :)`)
        }
    }
}
newCouple(cindarellas,prince1)

// -Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cindarellas.find(x => x.size === 29))