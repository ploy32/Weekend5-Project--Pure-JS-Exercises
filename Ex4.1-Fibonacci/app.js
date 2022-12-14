/*
-------- Ex4.1 - Fibonacci --------- 
“Write a function to return an n element in Fibonacci sequence” is one of the most common
questions you can hear during the coding challenge interview part. 
In this blogpost I’m going to walk through the two of the most typical solutions 
for this problem and also cover a dreadful (for most of novice developers) topic of time complexity.
So what is a Fibonacci sequence? According to Wikipedia :
“In mathematics, the Fibonacci numbers are the numbers in the following integer sequence,
called the Fibonacci sequence, and characterized by the fact that every number after the first
two is the sum of the two preceding ones.”
Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like
this:
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
or this:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
*/

/**
 * @param {number} n
 * @return {number}
 */
const fib1 = function (n) {
    let n1 = 0;
    let n2 = 1;
    let element;
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    for (let i = 2; i <= n; i++) {
        element = n1 + n2;
        n1 = n2;
        n2 = element;
    }
    return n2;
};

const fib2 = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
};

const fib3 = (n) => {
    const fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
};

// Test: Ex4.1
fib(2); // Output: 1
fib(3); // Output: 2
fib(4); // Output: 3
fib(5); // Output: 5
