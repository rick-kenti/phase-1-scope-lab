// Write your solution in this file!
// Declare customerName in global scope and initialize to 'bob'
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'; // This will create a global variable
}

function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
    // This will throw an error because we're trying to reassign a constant
    leastFavoriteCustomer = 'someone else';
}