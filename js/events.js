console.log(60);
// option 1: directly set on the HTML element.
// <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button>


// option 2: add onclick function on the HTML element.
// Important: We will use this.
// <button onclick="makeRed()">Make Red</button>
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

// option 4

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// another option 4

const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// option 4 final
// Important: We will use sometims.
// document.getElementById('make-goldenrod').addEventListener('click', function(){})
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
});