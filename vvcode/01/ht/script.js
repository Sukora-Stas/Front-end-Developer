/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */

/* eslint max-len: "off" */

/**
 * Функция вывода строк для работы в fizzBuzz
 * @param {*} a
 */
function log(a) {
    console.log(a);
}

/* Раместите ваш код ниже */

/**
 * реализовать фукнцию `fizzBuzz`
 * которая выводит числа от 1 до 100.
 * Если число кратно 3 - вместо числа вывести `Fizz`.
 * Если кратно 5 - вывести вместо числа `Buzz`.
 * Если число кратно и 3 и 5 - вывести вместо числа `FizzBuzz`.
 * Для вывода использовать фукнцию `log` (аналогично заданию в классе).
 * В теле функции нельзя использовать  `if`, `switch`, тернарный оператор `? :`
 */
function fizzBuzz() {
    /* Ваше решение */
    for (var i = 1; i <= 100; i++) {
        (i % 5 == 0 && i % 3 == 0 && log("FizzBuzz")) ||
        (i % 3 == 0 && log("Fizz")) ||
        (i % 5 == 0 && log("Buzz")) ||
        log(i);
    }
}


/**
 * реализовать фукнцию  `isPolindrom`,
 * которая принимает на вход строку и возвращает результат проверки (`true`/ `false` ),
 * является строка полндромом (одинакого читается с лева на право и с права на лево ) или нет
 * @param {string} textString
 * @return {boolean} Является строка полндромом (одинакого читается с лева на право и с права на лево ) или нет
 */
function isPolindrom(textString) {

    return textString === textString.split("").reverse().join("");

}


/**
 * Реализовать фукнцию `drawCalendar` ,
 * которая принимает три аргумента - год, месяц, htmlElement
 * и выводит в этот элемент календарь на месяц (дни недели начинаются с понедельника ).
 * @param {number} year
 * @param {number} month - номер месяца, начиная с 1
 * @param {external:HTMLElement} htmlEl
 */
function drawCalendar(year, month, htmlEl) {

    var day = new Date(year, month - 1);

    var table = `<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>`;

    for (var i = 0; i < getDay(day); i++) {
        table += "<td></td>";
    }

    while (day.getMonth() == month - 1) {
        table += "<td>" + day.getDate() + "</td>";
        if (getDay(day) % 7 == 6) {
            table += "</tr><tr>";
        }
        day.setDate(day.getDate() + 1);
    }

    if (getDay(day) != 0) {
        for (var i = getDay(day); i < 7; i++) {
            table += "<td></td>";
        }
    }
    table += "</tr></table>";
    htmlEl.innerHTML = table;
}

function getDay(date) {
    return date.getDay() === 0 ? 7 : date.getDay() - 1;
}


/**
 * Написать функцию `isDeepEqual`
 * которая принимает на вход двe переменных
 * и проверяет идентичны ли они по содержимому. Например
 * @param {*} objA
 * @param {*} objB
 * @return {boolean} идентичны ли параметры по содержимому
 */
function isDeepEqual(objA, objB) {
    if (typeof (objA) !== typeof (objB)) return false;
    if (typeof (objA) !== 'object') return objA === objB;
    if (Array.isArray(objA) != Array.isArray(objB)) return false;
    if (Object.keys(objA).length !== Object.keys(objB).length) return false;
    for (var key in objA) {
        if (!isDeepEqual(objA[key], objB[key])) return false;
    }
    return true;
}