// Define a WeakMap to track the number of queries for each endpoint
const weakMap = new WeakMap();

// Define the queryAPI function
function queryAPI(endpoint) {
  // Get the current count for this endpoint from the WeakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count += 1;

  // Update the count for this endpoint in the WeakMap
  weakMap.set(endpoint, count);

  // Check if the count is greater than or equal to 5
  if (count >= 5) {
    // If so, throw an error
    throw new Error('Endpoint load is high');
  }

  // Return the current count (optional, just for demonstration purposes)
  return count;
}

// Export the weakMap and queryAPI function
export { weakMap, queryAPI };
