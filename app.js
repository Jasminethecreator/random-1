// pseudo-code
// goal: clicks a button AND generates a new div with new color and text

	// 1. get the the button
const btnGen = document.querySelector('#btn-generate');

	// 2. be able to click the button
	// 3. After button click, generate div

btnGen.addEventListener('click', function () {
        // 1. Prompt for user input
	const userTailwindColor = GetColor();
	const userContent = GetContent();

    	// 2. Check that the input is valid
	let valid = checkInput(userTailwindColor, userContent);

	    // 3a. if input not valid, alert and stop
    if( !valid ) {
        alert("Input not valid. Please try again.");
        return;
    }
    	// 3b. Otherwise if OK
    createNewDiv(userTailwindColor, userContent);
});

function GetColor() {
    return window.prompt('What TW Color?', 'blue-300'); //string
}

function GetContent() {
    return window.prompt('What Text?', 'a new container'); // string
}

function checkInput(color, content) {
    return typeof(content) == "string" && isTailwindColor(color);
}

function isTailwindColor(color) {
	
	if( typeof(color) != "string" )
		return false;
		
	// @TODO ensure string for color is in Tailwind format and exists
	return true;
}

// [D]ry [R]epeat [Y]ourself
function createNewDiv(color, content) {
    const div = document.createElement('div');
    div.innerHTML = `<h3 class="text-9xl bg-${color} p-3">${content}</h3>`; // string interpolation

    document.body.appendChild(div);

    window.alert('Your div was created');
}







