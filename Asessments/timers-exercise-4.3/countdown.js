function countDown(n) {
    let countDownTimer = setInterval(function () {
        n--;
        if (n > 0) {
            console.log(n);
        }
        else {
            console.log('DONE!');
            clearInterval(countDownTimer);
        }
    }, 1000)
}

// countDown(4);