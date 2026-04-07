class EventEmitter {
    constructor() {
        this.events = {}; // Saare events aur unke functions yahan store honge
    }

    // Event ko sunne ke liye
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    // Event trigger karne ke liye
    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => callback(data));
        }
    }

    // Event ko hatane ke liye
    off(eventName, callbackToRemove) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(
                callback => callback !== callbackToRemove
            );
        }
    }
}

// Example usage
const myEmitter = new EventEmitter();

const greetUser = (name) => console.log(`Hello, ${name}!`);

myEmitter.on('userJoined', greetUser); // Listen kiya
myEmitter.emit('userJoined', 'Rahul'); // Output: Hello, Rahul!