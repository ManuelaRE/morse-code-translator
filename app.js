const decoder = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
}

const button = document.querySelector('button');
const translation = document.querySelector('.translation');

let userInput;
let arrayOfMorse = [];

button.addEventListener('click', () => {

    // get user input to lowercase and split it into an array of letters
    userInput = (document.getElementById("text").value).toLowerCase();
    let arrayOfLetters = userInput.split("");

    // iterate through the array and check for a match with the decoder Object
    // If there is a match store it into an array 
    arrayOfLetters.filter(letter => {
        Object.entries(decoder).forEach(([key, value]) => {
            if(letter === key) {
                arrayOfMorse.push(value);
            }
        })
    })
    // change the array into a strin plitting each code by /
    let morseCode = arrayOfMorse.join('/');
    translation.innerHTML = morseCode; 
})

// refresh page

function refreshPage(){
    window.location.reload();
} 