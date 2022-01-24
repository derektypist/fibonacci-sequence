// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById('mynumber').value;
    // Check if number is valid
    if (isNaN(num) || num.toString().length == 0 || num<0 || num>1000 || !Number.isInteger(Number(num))) {
        txt += `Invalid input.  Please enter a whole number between 0 and 1000.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `fibonacci(${num}) returns ${fibonacci(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById('numinfo').innerHTML = txt;
}

// Function to Generate nth Fibonacci Number
function fibonacci(n) {
    if (n>=0 && n<=1) {
        return n;
    }

    // Fill the Array with number 0 n+1 times
    let fibs = Array(n+1).fill(0);

    // Set first two numbers to 0 and 1
    fibs[0] = 0;
    fibs[1] = 1;

    // Loop from 2 to n
    for (let i=2;i<=n;i++) {
        fibs[i] = fibs[i-1] + fibs[i-2];
    }

    // Return the nth Fibonacci Number
    return fibs[n];
}

// Functio to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById('numinfo').innerHTML = txt;
}