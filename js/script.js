/* function play(){
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');

    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
} */

function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log(alphabet)
    //set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alpha');
    currentAlphabetElement.innerText = alphabet

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}