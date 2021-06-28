// pseudo-code
// goal: clicks a button AND generates a new div with new color and text
alert("starting script");
	// 1. get the the button
const btnGen = document.querySelector('#btn-generate');

	// 2. be able to click the button
	// 3. After button click, generate div

btnGen.addEventListener('click', function () {
	
	alert("inside event listener function");
	
	const userTailwindColor;
	const userContent;
	let success;
		
    	// 1. Prompt for user input

    collectInput(userTailwindColor, userContent);   
    
    	// 2. Check that the input is valid

	success = checkInput(userTailwindColor, userContent);
	
    if( !success ) {	// 3a. if input not valid, alert and stop
    	alert("Input not valid. Please try again.");
    	return;

    	// 3b. Otherwise if OK
    createNewDiv(userTailwindColor, userContent);

});

function collectInput(color, text) {

    color = window.prompt('What TW Color?', 'blue-300'); //string
    text = window.prompt('What Text?', 'a new container'); // string
}

function checkInput(color, text) {
    
    if( isTailwindColor(color)  &&  typeof(text) == string)
    	return true;
    	
    return false;
}

function isTailwindColor(color) {
	
	if( typeof(color) != string )
		return false;
		
	// @TODO ensure string for color is in exact Tailwind format
	return true;
}

// [D]ry [R]epeat [Y]ourself
function createNewDiv(tailwindBgColor, content) {
    const div = document.createElement('div');
    div.innerHTML = `<h3 class="text-9xl bg-${userTailwindColor} p-3">${userContent}</h3>`; // string interpolation

    document.body.appendChild(div);

    window.alert('Your div was created');
}







