/* Selecting Elements on the DOM Practice

console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const classValue = document.querySelector(".value");
console.log(classValue);
const buttonElement = document.querySelector("button");
console.log(buttonElement);
const classArea = document.querySelector(".area");
console.log(classArea);
const descendant = document.querySelector(".stat div");
console.log(descendant);
const classHello = document.querySelector(".hello");
console.log(classHello);

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}

//OR
for (let i = 0; i < heading3List.length; i++) {
    const element = heading3List[i];
    console.log(element);
  }


// Example for finding all of the `<div>` elements & logging them
const divList = document.querySelectorAll("div");

for (let element of divList.values()) {
    console.log(element);
}

for (let i = 0; i < divList.length; i++) {
    const element = divList[i];
    console.log(element);
}
*/

// Updating the DOM Examples

// Finding all descriptions
const descriptions = document.querySelectorAll(".description-display");
// Iterate through the descriptions and log the `innerText` value of each
/*
for (let desc of descriptions.values()) {
    let content = desc.innerText;
    console.log(content);
  }
*/
for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + '<a href="#">...</a>';
    }
  
    desc.innerHTML = content;
  }

// Finding all ratings
const ratings = document.querySelectorAll(".rating-display .value");

/*
for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.style.fontWeight = "bold";
      rating.style.color = "#3ba17c";
    }
  }
*/

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
  }

// Create a new element with text

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;

newElement.classList.add("header-statement");

const header = document.querySelector("header");
header.appendChild(newElement);


// Removing DOM elements

/*
// Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park-display");

// Remove that park
main.removeChild(park);
*/

// Event Listeners

// const firstBtn = document.querySelector("button");

// firstBtn.addEventListener("click", function (event) {
//   console.log(event.target.parentNode);
// });

// function to handler favorite button clicks
const favoriteButtonClickHandler = (event) => {
  const park = event.target.parentNode;
  park.style.backgroundColor = "#c8e6c9";
};

// function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parseFloat(
    parkA.querySelector(".rating-display > .value").innerText
  );
  const parkBRating = parseFloat(
    parkB.querySelector(".rating-display > .value").innerText
  );
  return parkBRating - parkARating;
};

// function for handling the nameSorter click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. empty the main
  main.innerHTML = "";

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// function to handle the ratingSorter click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  get the main element
  const main = document.querySelector("main");

  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. empty the main
  main.innerHTML = "";

  // 4. create an array
  const parksArray = Array.from(parksList);

  // 5. sort the array
  parksArray.sort(sortByRating);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// the point where all the code starts
const main = () => {
  // select the nameSorter link
  const nameSorter = document.querySelector("#name-sorter");

  // add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // select the ratingSorter link
  const ratingSorter = document.querySelector("#rating-sorter");

  // add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);

  // select all the buttons for all the parks
  const allBtns = document.querySelectorAll(".rate-button");

  // iterate the list of buttons and add an event handler to each
  allBtns.forEach((btn) => {
    btn.addEventListener("click", favoriteButtonClickHandler);
  });
};

// Add event listener for DOMContentLoaded

//console.log("Before!");

//window.addEventListener("DOMContentLoaded", (event) => {
//  console.log("Loaded!");
//});

//console.log("After!");

window.addEventListener("DOMContentLoaded", main);

