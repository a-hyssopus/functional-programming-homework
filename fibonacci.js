function fibonacci(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(12));

// ~O(1) solution, stolen from the Internet. Wanted to know whether such solution exists:

function fib(n) {
    let A = (1 + Math.sqrt(5)) / 2,
        B = (1 - Math.sqrt(5)) / 2,
        fib = (Math.pow(A, n) - Math.pow(B, n)) / Math.sqrt(5);
    return Math.floor(fib); // Math.ceil() for larger numbers fits better
}

console.log(fib(12));