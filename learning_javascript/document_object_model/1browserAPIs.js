//*Browser APIs

//Browser APIs are built-in objects that allow you to interact with the browser environment.
// For example, the `window` object represents the browser window and provides methods to manipulate it.
// The `document` object represents the HTML document loaded in the browser and allows you to manipulate the DOM.
// Here are some common browser APIs:
// 1. Window API
console.log(window.innerWidth); // Get the width of the browser window
console.log(window.innerHeight); // Get the height of the browser window

// 2. Document API
console.log(document.title); // Get the title of the document   
console.log(document.body); // Get the body element of the document

// 3. Console API
console.log("Hello, World!"); // Log a message to the console

// 4. Fetch API
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));

// 5. Local Storage API
localStorage.setItem('key', 'value'); // Store data in local storage
console.log(localStorage.getItem('key')); // Retrieve data from local storage

//Browser APIs are essential for building interactive web applications.
//For example, when we are creating a web app, we can access the user's location using the Geolocation API but we cannot access the user's browser history directly due to security reasons.
