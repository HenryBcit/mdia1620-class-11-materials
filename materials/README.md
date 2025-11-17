### One function one purpose

Before refactoring (one function doing everything):

```bash
function processOrder(order) {
    // Validate order
    if (!order) {
        console.log('Invalid order');
        return;
    }
    // Calculate total price
    let totalPrice = 0;
    for (let item of order.items) {
        totalPrice += item.price;
    }
    // Print receipt
    console.log(`Receipt: ${order.id} - Total: $${totalPrice}`);
}
```


After refactoring (multiple functions, each with a single purpose):

```bash
function validateOrder(order) {
    if (!order) {
        console.log('Invalid order');
        return false;
    }
    return true;
}

function calculateTotalPrice(order) {
    let totalPrice = 0;
    for (let item of order.items) {
        totalPrice += item.price;
    }
    return totalPrice;
}

function printReceipt(order, totalPrice) {
    console.log(`Receipt: ${order.id} - Total: $${totalPrice}`);
}

function processOrder(order) {
    if (!validateOrder(order)) return;
    let totalPrice = calculateTotalPrice(order);
    printReceipt(order, totalPrice);
}

```

Use descriptive names

Good:

```bash

calculateTotal()

fetchUserProfile()

validateEmail()

```

Bad:

```bash

total()

profile()

email()
```

Vague function names:

```bash
function doStuff(user) { ... }
function calc(x, y) { ... }
function handle(data) { ... }
```

Improved descriptive names:
```bash
function updateUserStatus(user) { ... }
function calculateFinalPrice(subtotal, taxRate) { ... }
function handleApiResponse(response) { ... }
```

### Keep functions short

Long example:

```bash
function createUser(userData) {
    // validate input
    // sanitize data
    // create database record
    // send welcome email
}
```

Better broken down:

```bash
function validateUserData(userData) { ... }
function sanitizeUserData(userData) { ... }
function saveUser(userData) { ... }
function sendWelcomeEmail(userData) { ... }
```

Overly long function doing too much:

```bash
function generateReport(data) {
    // validate
    // filter
    // transform
    // format
    // send to server
    // log results
}
```

Short, clear functions:
```bash
function validateReportData(data) { ... }
function filterReportData(data) { ... }
function formatReport(data) { ... }
function uploadReport(report) { ... }

function generateReport(data) {
    const validData = validateReportData(data);
    const filtered = filterReportData(validData);
    const report = formatReport(filtered);
    uploadReport(report);
}
```

### Avoid modifying data unexpectedly (purity when possible)

Avoid:

```bash
function addItem(cart, item) {
    cart.push(item); // modifies the original cart
}
```

Prefer:

```bash
function addItem(cart, item) {
    return [...cart, item]; // returns a new array
}
```

Avoid:

```bash
let count = 0;

function increment() {
    count++; // modifies external state
}
```


Prefer:

```bash
function increment(value) {
    return value + 1; // no external mutation
}
```

### Utility functions – return a value

Avoid (no return):

```bash
function toUpper(text) {
    console.log(text.toUpperCase());
}
```


Better:

```bash
function toUpper(text) {
    return text.toUpperCase();
}
```

Avoid:

```bash
function calculateTax(amount) {
    const tax = amount * 0.1;
    console.log('Tax:', tax); // side effect
    return tax;
}
```


Better:

```bash
function calculateTax(amount) {
    return amount * 0.1;
}
```

Not a proper utility function (prints instead of returning):

```bash
function doubleNumber(num) {
    console.log(num * 2);
}
```

Proper utility function (returns a value):

```bash
function doubleNumber(num) {
    return num * 2;
}
```

Validate inputs for safety

Good practice:

```bash
function square(num) {
    if (typeof num !== "number") {
        throw new Error("square() expects a number");
    }
    return num * num;
}
```

Example:

```bash
function sendEmail(to, message) {
    if (!to) throw new Error("Missing 'to' address");
    if (!message) throw new Error("Missing email message");

    // Continue safely...
}
```

Example:

```bash
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
```

Unsafe function (trusts input blindly):

```bash
function capitalize(text) {
    return text.toUpperCase(); // breaks if text is null or not a string
}
```

Safe function with input validation:

```bash
function capitalize(text) {
    if (typeof text !== "string") {
        throw new Error("capitalize() expects a string");
    }
    return text.toUpperCase();
}
```


Don’t rely on global variables

Avoid:

```bash
let taxRate = 0.1;

function calculateTotal(price) {
    return price + price * taxRate; // relies on global
}
```

Better:

```bash
function calculateTotal(price, taxRate) {
    return price + price * taxRate;
}
```


Avoid:

```bash
let total = 0;

function addPrice(price) {
    total += price; // updates global variable
}
```


Better:

```bash
function addPrice(currentTotal, price) {
    return currentTotal + price;
}
```