function startCountdown(seconds) {
    let counter = seconds;

    const interval = setInterval(() => {
        console.log(`Time left: ${counter}s`);
        counter--;

        if (counter < 0) {
            clearInterval(interval);
            console.log("Time's up!");
        }
    }, 1000);
}