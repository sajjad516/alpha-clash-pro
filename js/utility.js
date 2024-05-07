// hide element
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// show element
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function reduceValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getARandomAlphabet(){
    //crate an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    //get a random index between 0 - 25
    const radomNumber = Math.random()* 25;
    const index = Math.round(radomNumber);

    const alphabet = alphabets[index];
    
    return alphabet;
}