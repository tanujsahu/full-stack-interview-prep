console.log("Callback")

// Function that simulates an asynchronous operation
function fetchData(callback) {
    // setTimeout(() => {
        const data = { message: 'Data fetched successfully!' };
        callback(data); // Call the callback function with the fetched data
    // }, 1000); // Simulates a delay of 1 second
}

// Callback function that will handle the fetched data
function handleData(data) {
    console.log(data.message); // Output the message from the fetched data
}

// Calling fetchData and passing handleData as a callback
fetchData(handleData);
