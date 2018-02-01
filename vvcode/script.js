function log(a) {
    console.log(a);
}


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
