
function handelKeyboardKeyPress(event) {
    const playerPressed = event.key;

    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get expected to press
    const currentAlphabetElement = document.getElementById('current-alpha');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //check matched or not
    if (playerPressed === expectedAlphabet) {

        const currentScore = getTextElementById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        const currentLife = getTextElementById('current-life');
        const newLife = currentLife - 1;
        const life = reduceValueById('current-life', newLife);
        if (newLife === 0) {
            gameOver();
        }
    }
}

//capture keyboard press
document.addEventListener('keyup', handelKeyboardKeyPress)

function continueGame() {
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    
    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alpha');
    currentAlphabetElement.innerText = alphabet

    setBackgroundColorById(alphabet);
}

function play() {
    //everything hide and show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    //set the last score
    const lastScore = getTextElementById('current-score');
    setTextElementValueById('game-score', lastScore);

    //clear the last selected alphabet
    const currentAlphabet = getElementTextById('current-alpha');
    // console.log(currentAlphabet)
    removeBackgroundColorById(currentAlphabet);
}