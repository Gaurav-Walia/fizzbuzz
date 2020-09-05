let fizbuz = (n) =>  {
    let result = [];
    for ( let i = 0; i < n; i ++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            result.push("FizzBuzz");
        } else if( i % 3 == 0) {
            result.push("Fizz");
        } else if (i % 5 == 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
        console.log(result);
        return result;
    }
}

module.exports = { fizbuz };