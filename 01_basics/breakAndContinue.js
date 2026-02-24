for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping 3");
        continue;
    }
    if (i === 5) {
        console.log("Stopping at 5");
        break;
    }
    console.log(`Value of i is: ${i}`);
}