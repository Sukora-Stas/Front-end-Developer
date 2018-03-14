function message(text) {
    console.log(text);
}



/*
var time = {
    year: 2345,
    month: 11,
    day: 10,
    hour: 11,
    minute: 12,
    second: 13,
    microsecond: 123456
  }

  console.log(time); // (*)
  time.microsecond++; // (**)

  console.log(time);
  time.microsecond++;

  console.log(time);
  time.microsecond++;
*/

/*
// до вызова
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

for (var key in menu) {
    message(key + ": " + menu[key]);
}

multiplyNumeric(menu);

for (var key in menu) {
    message(key + ": " + menu[key]);
}

function multiplyNumeric(obj) {
    for (var key in obj) {
        obj[key] = isNumeric(obj[key]) ? obj[key] * 2 : obj[key];
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
*/

/*var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

var max = 0;
var name = "";
for (var key in salaries) {
    if (max < salaries[key]) {
        max = salaries[key];
        name = key;
    }
}
message(name || "нет сотрудников");*/




/*
for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        log("FizzBuzz");
        continue;
    }
    if (i % 3 == 0) {
        log("Fizz");
        continue;
    }
    if (i % 5 == 0) {
        log("Buzz");
        continue;
    }
    log(i);
}
*/