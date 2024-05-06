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

function getARandomAlphabet(){
    //crate an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    //get a random index between 0 - 25
    const radomNumber = Math.random()* 25;
    const index = Math.round(radomNumber);
    // console.log(index)

    const alphabet = alphabets[index];
    // console.log(index, alphabet)
    return alphabet;
}