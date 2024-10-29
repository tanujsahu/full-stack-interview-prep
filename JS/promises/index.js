console.log("PROMISES");

function promiseCall(val) {
    const promise = new Promise((res, rej) => {
        if (val) {
            res("Resolved"); // Use res to resolve the promise
        } else {
            rej("Rejected"); // Use rej to reject the promise
        }
    });

    // Return the promise so we can handle it later
    return promise;
}

// Calling the function with true
promiseCall(false).then((res) => {
    console.log("response:", res);
}).catch(error => {
    console.log("error:", error)
});



// Function that returns a promise that resolves after 1 second
function firstPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 'First promise resolved!';
            console.log(result); // Log the result of the first promise
            resolve(result); // Resolve with the result
        }, 1000);
    });
}

// Function that returns a promise that takes a result from the first promise
function secondPromise(firstResult) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const finalResult = `${firstResult} Now, second promise resolved!`;
            resolve(finalResult); // Resolve with the final result
        }, 1000);
    });
}

// Chaining the promises
firstPromise()
    .then(result => {
        return secondPromise(result); // Passes the result to the next promise
    })
    .then(finalResult => {
        console.log(finalResult); // Handles the final result
    })
    .catch(error => {
        console.error('Error:', error); // Catches any errors in the chain
    });
