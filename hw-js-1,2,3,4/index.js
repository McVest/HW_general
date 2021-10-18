

let myFuncs = {
    task0: function () {
        let question = +prompt('Сколько вам лет?');
        if (question >= 0 && question <= 10)
            alert('Вы ребенок.');
        else if (question >= 11 && question <= 18)
            alert('Вы подросток.');
        else if (question >= 19 && question < 60)
            alert('Вы взрослый.');
        else if (question > 60)
            alert('Вы пенсионер.');
        else
            alert('Что ты такое ?');
    },

    task1: function () {
        let question = +prompt('Введите 0-9');
        let symbol = ')!@#$%^&*(';
        let arr = symbol.split('');
        alert(arr[question]);
    },

    task2: function () {
        let number = prompt('Введіть число від 001 до 999', 0);
        number[0] == number[1] || number[0] == number[2] || number[1] == number[2] ? alert('TRUE') : alert('FALSE');
    },

    task3: function () {
        let year = prompt('Введите год чтобы узнать высокосый ли он:');
        year % 4 == 0 && year % 100 !== 0 ? alert('Високосный год') : alert('Не високосный год');
    },

    task4: function () {
        let number = prompt('Введите число для проверки палиндромности');
        number === number.split('').reverse().join('') ? alert('Палиндром') : lert('Не палиндром');
    },

    task5: function () {
        let amount = prompt('Введите сумму в гривнах: ', 0);
        if (amount < 0)
            amount = Math.abs(amount);
        let currency = prompt('В какую валюту хочете перевести: EUR = 1, EUR = 2, AZN = 3', 0);
        switch (currency) {
            case '1':
                alert(amount * 26.33 + ' EUR');
                break;
            case '2':
                alert(amount * 30.43 + ' EUR');
                break;
            case '3':
                alert(amount * 15.49 + ' AZN');
                break;
            default:
                alert('Неправильно выбрал валюту.')
        }
    },

    task6: function () {
        let price = prompt('Введите стоимость покупки для вычисления скидки:');
        if (price >= 200 && price < 300)
            alert(price - (price * 0.03) + '₴ со скидкой 3%');
        else if (price >= 300 && price < 500)
            alert(price - (price * 0.05) + '₴ со скидкой 5%');
        else if (price >= 500)
            alert(price - (price * 0.07) + '₴ со скидкой 7%');
        else
            alert(price);
    },

    task7: function () {
        let radius = prompt('Введите радиус круга:');
        let perimeter = prompt('Введите периметр квадрата:');
        (perimeter / 4) / 2 >= radius ? alert('Такая окружность может поместиться в указанный квадрат.') : alert('Такая окружность НЕ может поместиться в указанный квадрат.');
    }
}
function execute() {
    btns = document.getElementsByClassName('js-btn');
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click',(e)=> btnClicked(e,i));
    }       
}
function btnClicked(event,i) {
    myFuncs['task' + i]();
}
execute();