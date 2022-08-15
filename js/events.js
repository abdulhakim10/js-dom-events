console.log(60);

// option 2: onclick function.
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// option 3:
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// another option 3:

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}