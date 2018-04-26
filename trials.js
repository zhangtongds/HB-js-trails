// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');
// console.log(phoneNumbers)

// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printAccountInfo(accountNumber) {
	console.log(accountNumber);
}
// printAccountInfo(accountNumber) 
// Add function to print all addresses, including a header
function printAddress(addresses) {
	for (let address of addresses) {
		console.log(address);
	}
}
// printAddress(addresses)
// Add function to print phone types and numbers
function printPhone(phoneMap) {
	for (let phone of phoneMap) {
		console.log(phone[0] + ": " + phone[1]);
	}
}
// printPhone(phoneNumbers)
// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
let transactions = new Map()

// Add function to add transactions
function addTransactions(date, amount) {
	transactions.set(date, amount);
	return transactions;
}


// Use the function to add transactions
addTransactions('May-2', -500)
addTransactions('May-13', +1200)
addTransactions('May-15', -3200)
// addTransactions('May-16', +4500)

// Add function to show balance status
function showBalance(balance) {
	console.log("Balance: " + balance);
	if (balance < 0) {
		console.log("YOU ARE OVERDRAWN");
	} 
	else if (balance < 20 && balance >= 0) {
		console.log("Warning: You are close to zero balance");
	}
	else {
		console.log("Thank you for your business.");
	}
}
// showBalance(-50)
// showBalance(10)
// showBalance(100)
// Add function to show transactions

function showTransaction(transactionMap, balance) {
	console.log('Starting balance:', balance);
	for (let transaction of transactionMap) {

		let transactionType;

		if (transaction[1] > 0) {
			transactionType = "deposit";
		}
		else {
			transactionType = 'withdrawal';
		}

		console.log(transaction[0], transaction[1], transactionType);

		balance += transaction[1];
		
		if (balance < 0) {
			balance -= 25
		}
	}
		showBalance(balance);
}

startingBalance = 26000
showTransaction(transactions, startingBalance)

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
const customerInfo = {
	'Account holder': accountHolder,
	'Account number': accountNumber,
	'Business name': businessName,
	'Addresses': addresses,
	'Phone numbers': phoneNumbers,
	'Transactions': transactions,
	'Starting balance': startingBalance
};


// Function to add customer attributes

function addMelonAndPets (allCustomerInfo, favMelon='Cantaloupe', numPets=0) {
	allCustomerInfo['Favorite melon'] = favMelon;
	allCustomerInfo['Number of pets'] = numPets;
	console.log(allCustomerInfo);
}

// addMelonAndPets(customerInfo, favMelon='Casaba', numPets=2)
addMelonAndPets(customerInfo)

console.log("===========")

function getLoanRate(customerInfo, income) {
	if (income < 100000) {
		return 0.08;
	}
	else if (income >=100000 && income < 200000) {
		return 0.07;
	}
	else {
		return 0.04;
	}
	
}


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




