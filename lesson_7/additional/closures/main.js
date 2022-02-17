function UserCard(n) {
    if (n <= 3 && n > 0) {
        this.key = n;
    } else {
        return
    }
    this.balance = 100;
    this.transactionLimit = 100;
    this.historyLogs = [];

    this.logging = function (operation, credits) {
        this.historyLogs.push({
            operationType: operation, credits: credits, operationTime:
                `${new Date().getDate()}/`
                + parseInt(`${new Date().getMonth()}`)
                + '/'
                + `${new Date().getFullYear()}`
                + ','
                + ' '
                + `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        })
    }

    this.getCardOptions = function () {
        let cardOpt = {}
        for (const argument in this) {
            if (typeof this[argument] !== 'function')
                cardOpt[argument] = this[argument]
        }
        return cardOpt
    }
    this.transferCredits = function (sum, card) {
        if (sum < this.balance && sum < this.transactionLimit) {
            this.balance = this.balance - sum;
            sum = sum * 0.95;
            card.balance += sum;
            card.logging('Transfer from another card', sum)
            this.logging('Transfer of credits', sum)
        }
    }
    this.putCredits = function (credits) {
        this.balance += credits
        this.logging('Received Credits', credits)
    }

    this.takeCredits = function (credits) {
        if (credits < this.balance) {
            this.balance -= credits
            this.logging('Withdrawal of credits', credits)
        } else {
            console.error('Not enough money')
        }
    }
    this.setTransactionLimit = function (newLimit) {
        this.transactionLimit = newLimit
        this.logging("Transaction limit changed", newLimit)
    }

}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    //перевірка наявності картки в списку
    checker(n) {
        let checker = true;
        for (let elem of this.cards) {
            if (elem.key === n) {
                checker = false
            }
        }
        return checker
    }

    addCard() {
        if (this.cards.length <= 3) {
            this.cards.push(new UserCard(this.cards.length + 1))
        } else {
            console.log(`Impossible add card. User owns too much card`)
        }
    }

    getCardByKey(n) {
        if (n <= 3 && n > 0 && !(this.checker(n))) {
            return this.cards[n - 1]
        } else {
            return 'Card does not exist or you entered invalid number'
        }
    }
}


let user = new UserAccount('Bob');
user.addCard();
user.addCard();
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2)
card2.takeCredits(50);
console.log(card1.getCardOptions())
console.log(card2.getCardOptions())