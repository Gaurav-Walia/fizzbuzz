let fizbuz = (req, res, count) =>  {
    let result = [];
    for ( let i = 1; i <= count; i ++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            result.push("FizzBuzz");
        } else if( i % 3 == 0) {
            result.push("Fizz");
        } else if (i % 5 == 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }

    return result;
}

module.exports = { fizbuz };