export function GetApi(url) {
  // Make sure to return the fetch call so that a promise is returned
  return fetch(url)
    .then((response) => {
      return response.json(); // Parse and return JSON
    })
    .catch((error) => {
      console.error("Error in GetApi:", error); // Handle any errors
      throw error; // Re-throw error to propagate it to HandleLogin
    });
}
