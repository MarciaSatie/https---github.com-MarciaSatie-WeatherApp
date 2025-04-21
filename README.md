WeatherApp
A responsive weather forecasting application built with JavaScript, HTML, Eleventy and Bulma.

 WeatherApp fetches and displays real-time weather data for user-specified locations, offering a clean and accessible user interface.​

🌦 Features
Real-Time Weather Data: Fetches current weather conditions using external APIs.​

Responsive Design: Optimized for desktops, tablets, and mobile devices.​


🚀 Getting Started
Prerequisites
Node.js (version 14 or higher)​

Installation
Clone the repository:
git clone https://github.com/MarciaSatie/WeatherApp.git

cd WeatherApp

Install dependencies:
npm install

Run the development server: npx eleventy --serve

The application will be available at http://localhost:8080/.

🛠 Project Structure
plaintext
Copy
Edit
WeatherApp/
├── _includes/       # Nunjucks templates
├── _site/           # Generated static site (output)
├── assets/          # Static assets (CSS, images, etc.)
├── data/            # Data files (e.g., JSON)
├── node_modules/    # Node.js dependencies
├── src/             # Source JavaScript files
├── .eleventy.js     # Eleventy configuration
├── index.njk        # Main Nunjucks template
├── package.json     # Project metadata and scripts
└── package-lock.json

📦 Dependencies
Eleventy: Static site generator.​
JavaScript: Handles data fetching and DOM manipulation.​


🙌 Acknowledgments
**Date**(at file: utils.js): return current Date and has methods to get current hour.
reference:https://www.w3schools.com/jsref/jsref_obj_date.asp
**document.createElement**(at file: utils.js): uses Javascript to create a new HTML element at this case a div.
reference: https://www.w3schools.com/jsref/met_document_createelement.asp

**replaceAll** (at file: utils.js): replace all specified string (or char) at whole variable.
reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

**LoacalStorage** (at file: utils.js amd index.njk): Saves an information even after the page reloads or browser restarts.
reference: https://www.geeksforgeeks.org/javascript-localstorage/

**WindowLocation**(at file header.njk): it was used window.location.pathname to return the path and filename of the current page.
reference:https://www.w3schools.com/js/js_window_location.asp

**event.currentTarget.id**(at dashboard.njk) this will return the value from the ID from teh module related to action click (at this case <a>).
event -> carries all the information from action click and it is passed as a parameter inside of the function myFunction
reference: https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget

**Tenary Expression**(at preference.njk) Just a simpler and easy to read way to write if and else. I particularly I like, and I am trying to use it more.
reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

**JSON.parse and JSON Strigfy**(at preference.njk) As adding direct the array to localStorage will transform everything in a unique string, I need somethinf that will tranform all array's code ina  string. 
reference: https://www.geeksforgeeks.org/how-to-store-an-array-in-localstorage/

**Regex** (at file: header.njk): Regular expression, with a partten of cahracters, allowed me to take of specific characters from a string, using .replace()
reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes
           https://www.debuggex.com/cheatsheet/regex/javascript
regex : /\/+$/ => 
/content/ -> what is between slashes will be count in cosideration for regex .
\/+ ->  To match this / character literally (thsi what I want to get rid off) , escape it with itself. In other words to search for \ use \// (+ -> 1 more, at this case to repit "/" to achive \//).
$ -> end of the string

