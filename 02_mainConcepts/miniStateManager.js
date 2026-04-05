function createState(initialValue) {
    let state = initialValue; // Private variable
    const listeners = []; // State change hone par inko notify karenge

    const getState = () => state;

    const setState = (newValue) => {
        state = newValue;
        // Jab bhi state update ho, saare listeners ko naya state bhej do
        listeners.forEach(listener => listener(state));
    };

    const subscribe = (listenerFunc) => {
        listeners.push(listenerFunc);
    };

    return { getState, setState, subscribe };
}

// Example usage
const userScore = createState(0);

// UI update karne ke liye subscribe kar diya
userScore.subscribe((newScore) => {
    console.log(`UI Updated! New Score is: ${newScore}`);
});

userScore.setState(10); // Output: UI Updated! New Score is: 10
userScore.setState(25); // Output: UI Updated! New Score is: 25