function randomGame() {
    let counter = 0;
    let randomNumber = Math.random();
    let randomGameTimer = setInterval(function () {
        randomNumber = Math.random();
        counter++;
        if (randomNumber > 0.75) {
            clearInterval(randomGameTimer)
            if (counter > 1) {
                console.log(`It took ${counter} tries.`);
            }
            else {
                console.log(`It took ${counter} try.`);
            }
        }
    }, 1000)
}

// randomGame();