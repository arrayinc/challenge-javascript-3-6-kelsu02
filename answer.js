// *** YOUR ANSWER BELOW ***
function matchNumber(N) {
    let fib1 = 1;
    let fib2 = 0;
    if (N <= 1 ) {
        fib1 = 1;
    } else {
        for (let i = 3; i <= N; i++) {
            let fib3 = fib1 + fib2;
            fib2 = fib1;
            fib1 = fib3;
        }
    }
    console.log (`${fib1} is number ${N} in the Fibonacci sequence`);
}

matchNumber(2);
