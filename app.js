// Our goal: A user clicks a button AND generates a new div with new color

// When approaching this, it's often a great idea to start with a pseudo-code
// something like:
// 1. Get the button from the the DOM
// 2. After getting the button, when a user clicks...
// 3. Generate a div

// with this set, we go to some solvng

// 1. Get the button from the the DOM
const btnGen = document.querySelector("#btn-generate");

// 2. After getting the button, when a user clicks...
btnGen.addEventListener("click", function () {
  // this involves a few steps, so let's do a first pass
  // we're using the "prompt" to get the user input
  // See: http://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
  // (for more fun reading, see the "See also" in the link above)
  const userTailwindColor = window.prompt("What TW Color?"); //string
  const userContent = window.prompt("What Text?"); // string

  // collectInput()
  // checkInput()
  // createDiv()

  // 3. Generate a div
  // `createDiv` is a function we created off a refactor
  createNewDiv(userTailwindColor, userContent);

  // While the above works, we can do better
  // L23 and L24 are repeating themselves, it seems a good candidate for a refactor
  // let's think out loud:

  // 1. we collecting inputs
  // 2. we saving those input as a variables
  // 3. We're acting on those

  // OK, time for a refactor:
  // 1. Collect input
  // function 1:
  //  collectInput()
  // since we're collecting user input,
  // we want to be sure those input are right, so... we add another function
  // checkInput()

  // function 2:
  // 2. Create divs
  // createNewDiv()

  // with all these functions defined, we can simply our code as:
  //  const userTailwindColor =  collectInput('What TW Color?'); //string
  //  const userContent =  collectInput('What Text?'); // string
  // createNewDiv()

  // and since we don't really want to trust our users as they can write anything
  // we want to validate things with their input, so we can do:

  // const isTWClassValid = checkInput(userTailwindColor) // stores the bool value of this check
  // const isContentValid = checkInput(userContent)

  // this will both return booleans, and as part of our problem statement..
  // we want to ONLY create a div IF the input is correct (that is, it must be a string)
  // so we can write the code like this:

  // if(TWCheck && userCheck) createNewDiv()

  // the full code will look like this (version 3):

  /**
   * const userTailwindColor =  collectInput('What TW Color?');
   * const userContent =  collectInput('What Text?');
   *
   * const isTWClassValid = checkInput(userTailwindColor);
   * const isContentValid = checkInput(userContent);
   *
   * if(TWCheck && userCheck) createNewDiv();
   */

  // well, that's nice but we're setting variables over and over, we can clean this up a bit
  // with some eye towards Functional Programming

  // an alternative take can look like this (version 4):

  /**
   * const isTWClassValid = checkInput(collectInput('What TW Color?'));
   * const isContentValid = checkInput(collectInput('What Text?'));
   *
   * if(isContentValid && isTWClassValid) createDiv();
   */

  // I think you will agree that the version 4 is simpler, readable and easier to reason about
  // ALSO... take special note on how I name my variables — I give top priority to clarity.
});

//@TODO: Declare all the other functions to make the above work

// [D]ry [R]epeat [Y]ourself
function createNewDiv(tailwindBgColor, content) {
  const div = document.createElement("div");
  div.innerHTML = `<h3 class="text-9xl ${tailwindBgColor} p-3">${content}</h3>`; // string interpolation

  document.body.appendChild(div);

  window.alert("Your div was created");
}
