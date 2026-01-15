(() =>{
    const randomnum = Math.floor(Math.random() * 100);
console.log(randomnum);

const prev = document.getElementById("your_guess");
const pg = [];
let attempts = 10;

document.getElementById("restart").addEventListener("click", function () {
    window.location.reload();
});

document.getElementById("imgBtn").addEventListener("click", function (e) {
    e.preventDefault();
    const guesses = parseInt(document.getElementById("guess").value);

    if (isNaN(guesses)) {
        document.getElementById("highlow").innerHTML = "Please enter a number!";
        return;
    }

    if (guesses < randomnum) {
        document.getElementById("highlow").innerHTML = "Your guess is too low!";
        document.getElementById("guess").value = "";
        
    } 
    else if (guesses > randomnum) {
        document.getElementById("highlow").innerHTML = "Your guess is too high!";
        document.getElementById("guess").value = "";
        
    } 
    else {
        document.getElementById("highlow").innerHTML = "Congratulations! You guessed it right!";
        document.getElementById("ImgBtn").disabled = true;
        document.getElementById("guess").disabled = true;
        return;
    }

    pg.push(guesses);
    prev.innerHTML = pg.join(", ");

    attempts--;
    document.getElementById("left").innerHTML =
        "You have " + attempts + " attempts left";

    if (attempts === 0) {
        document.getElementById("highlow").innerHTML =
            "Game Over! The number was " + randomnum + ". Click restart to play again.";
        document.getElementById("ImgBtn").disabled = true;
        document.getElementById("guess").disabled = true;
    }
});
})();

