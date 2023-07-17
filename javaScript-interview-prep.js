//Implement the ensure function so that it throws an error if called without arguments or the argument is undefined. Otherwise it should return the given value.

function ensure(value) {
  if (value === undefined) {
    throw new Error("no arguments");
  } else {
    return value;
  }
}

//Implement the removeProperty function which takes an object and property name, and does the following:

//If the object obj has a property prop, the function removes the property from the object and returns true; in all other cases it returns false.
function removeProperty(obj, prop) {
  i;
}

function removeProperty(obj, prop) {
  if (prop in obj) {
    delete obj(prop);
    return true;
  } else {
    return false;
  }
}

/**
 * @prop {string} membershipId: The customer's membership ID.
 * @return {number} The check digit.
 */
function createCheckDigit(membershipId) {
  // Write the code that goes here.
  return 0;
}

console.log(createCheckDigit("55555"));

function createCheckDigit(membershipId) {
  //function to return the sum of the digits of a number
  let sumDigits = membershipId.reduce((a, b) => a + b, 0);
  //if the sum is a single digit return it
  if (sumDigits > 9) {
    return sumDigits;
  } else {
    //else call the function again with the sum as the argument
    return createCheckDigit(sumDigits);
  }
}

console.log(createCheckDigit("55555"));

function formatDate(userData) {
  let date = userData.split("/");
}

console.log(formatDate("12/31/2014"));

//Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.
function formatDate(userDate) {
  let date = userDate.split("/");
  return date[2] + date[0] + date[1];

  console.log(formatDate("12/31/2014"));
}

//Implement the setup function that registers a click event handler and implements the following logic: When the button of class remove is clicked, its parent
//**Notes */

//Exmple of how to add event listener and call a function
const beginGame = () => {
  alert(
    "Welcome! Lets play war, high card wins. You are the red deck Good luck!"
  );
  console.log("beginGame");
  game.shuffle();
  game.deal();
  //game.draw();
};

const startGame = document.getElementById("start-button");
startGame.addEventListener("click", beginGame);
//element should be removed from the gallery.
//**Notes */

const appendChildren = (decorateDivFunction) => {
  const allDiv = document.getElementsByTagName("div");
  allDiv.addEventListener("click", decorateDivFunction);

  decorateDivFunction = (event) => {
    const newDiv = document.createElement("div");
    event.target.appendChild(newDiv);
  };
};

//other example/solution
function appendChildren(decorateDivFunction) {
  var allDivs = [...document.getElementsByTagName("div")];
  for (var i = 0; i < allDivs.length; i++) {
    var newDiv = document.createElement("div");
    decorateDivFunction(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

// Example case.
document.body.innerHTML = `
  <div id="a">
    <div id="b">
    </div>
  </div>`;

// appendChildren(function(div) {});
console.log(document.body.innerHTML);

function setup() {
  let removeImage = (event) => {
    event.target.parentNode.remove();
  };
  var items = document.getElementsByClassName("remove");
  items.addEventListener("click", removeImage);
}

// Example case.
document.body.innerHTML = `
  <div class="image">
    <img src="https://goo.gl/kjzfbE" alt="First">
    <button class="remove">X</button>
  </div>
  <div class="image">
    <img src="https://goo.gl/d2JncW" alt="Second">
    <button class="remove">X</button>
  </div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);

//basic function to add two numbers
const sum = (a, b) => {
  return a + b;
};
//basic function tothrow errors

const sum = function namedSumFunction(a, b) {
  if (!a || !b) throw new Error("Parameters are required.");

  return a + b;
};

sum();
//Fix the bugs in the registerHandlers function. An alert should display anchor's zero-based index within a document instead of following the link

function registerHandlers() {
  var as = document.getElementsByTagName("a");
  for (var i = 0; i < as.length; i++) {
    as[i].onclick = function (i) {
      return function () {
        alert(i);
      };
      alert(i);
      return false;
    };
  }
}

const handleClick = (i) => {
  return () => {
    alert(i);
  };
};

/* HTML code for testing purposes (do not submit uncommented):
  <body>
    In my life, I used the following web search engines:<br/>
    <a href="//www.yahoo.com">Yahoo!</a><br/>
    <a href="//www.altavista.com">AltaVista</a><br/>
    <a href="//www.google.com">Google</a><br/>
  </body>
  */
