# Fibonacci Sequence

The Fibonacci Sequence starts from 0 and 1.  Each number is the sum of the two preceding ones.  Its sequence looks like 0,1,1,2,3,5.8,13,21,34,55..., so F(n) = F(n-1) + F(n-2), when n is greater than or equal to 2. The purpose of the project is to generate the nth Fibonacci Number using HTML Forms.

## UX

**Getting Started**

In the input field, enter a number between 0 and 1000 (e.g. 10) and click on the Submit Button.  You should get information on the number and its nth Fibonacci Number.  To Reset, click on the Reset Button.

**User Stories**

As a user, if I do not enter anything in the input field, I get an error message `Invalid input.  Please enter a whole number between 0 and 1000.`.

As a user, if I enter text (e.g. abc), I get the above error message.

As a user, if I enter a number, but it is not an integer, I get the above error message.

As a user, if I enter a number less than 0 or greater than 1000, I get the above error message.

As a user, assuming my input is valid, I should get something like:

    You have entered the number 10.
    fibonacci(10) returns 55.

As a user, if I click on the Reset Button, I expect the information to be cleared.

**Information Architecture**

The number should be an integer between 0 and 1000.  The function to calculate the nth Fibonacci Number is an integer.

## Features

Validation of numeric input.  Allows the user to enter a number in order to generate the nth Fibonacci Number.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.1.3 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/fibonacci-sequence) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [FreeCodeCamp](https://www.freecodecamp.org)

