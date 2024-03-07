 function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call, for example:
    setTimeout(() => {
      // Resolve the promise with some data
      resolve("Response from API");
      
      // Or reject the promise if there's an error
      // reject(new Error("Failed to get response from API"));
    }, 2000); // Simulating a delay of 2 seconds
  });
}
