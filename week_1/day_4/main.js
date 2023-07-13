console.log("js is working") 

const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
]


let currentRandMovieIndex = Math.floor(Math.random() * 100);

let movieDesc = document.getElementById("movie-description");
let hintText = document.getElementById("hint-text");

let userGuess = document.getElementById("guess-text");

// random num between 0 and 99 - using it to choose random initial movie
movieDesc.innerHTML = movies[currentRandMovieIndex % movies.length].explanation;

document.querySelector('#guess-button').addEventListener('click', () => {
    if (!isValid()) {
        alert('Type a guess before pressing guess!');
        return;
      }

    if (userGuess.value.toLowerCase() === movies[currentRandMovieIndex % movies.length].title.toLowerCase()) {
        console.log("CORRECT")
        hintText.innerHTML = null;
        return;
    }
    console.log("WRONG");
});

document.querySelector('#hint-button').addEventListener('click', () => {
    console.log('Hint Clicked');
    hintText.innerHTML = movies[currentRandMovieIndex % movies.length].hint;
});

function isValid() {
    return userGuess.value != '';
}