console.log("js is working") 

let randomNum = Math.floor(Math.random() * 10);

console.log(randomNum);

let scoreDisplay = document.getElementById("score-display");
let borderDiv = document.getElementById("border-div");

let userGuess = document.getElementById("guess-text");


document.querySelector('#guess-button').addEventListener('click', () => {
    if (!isValid()) {
        alert('Type a guess before pressing guess!');
        return;
      }

    if (userGuess.value.toLowerCase() === `${randomNum}`) {
        console.log("CORRECT")

        borderDiv.classList.remove("border-dark");
        borderDiv.classList.remove("border-danger");
        borderDiv.classList.add("border-success");

        //changing the movie
        scoreDisplay.innerHTML = `Correct!`;
        return;
    }

    borderDiv.classList.remove("border-dark");
    borderDiv.classList.remove("border-success");
    borderDiv.classList.add("border-danger");

    scoreDisplay.innerHTML = `Wrong.`;
    
    console.log("WRONG");
});


function isValid() {
    return userGuess.value != '';
}